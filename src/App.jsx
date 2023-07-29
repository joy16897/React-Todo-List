/** @format */
import React, { useState, useEffect } from "react"
import "./App.css"
import { v4 as uuid4 } from "uuid"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {
	const initialTodos = JSON.parse(localStorage.getItem("todos")) || []
	const [todos, setTodos] = useState(initialTodos)

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos))
	}, [todos])

	const addTodo = (newTodos) => {
		setTodos([...todos, newTodos])
	}

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id))
	}

	return (
		<div className="base">
			<h1>TODO LIST</h1>
			<TodoForm addTodo={addTodo} />
			<TodoList todos={todos} deleteTodo={deleteTodo} />
		</div>
	)
}

export default App
