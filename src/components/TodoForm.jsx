/** @format */

import React, { useState } from "react"
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"
import { v4 as uuidv4 } from "uuid"

const TodoForm = ({ addTodo }) => {
	const [text, setText] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		if (text.trim() !== "") {
			addTodo({
				id: uuidv4(),
				text: text.trim(),
				completed: false
			})
			setText("")
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input className="input" type="text" placeholder="Add a Todo" value={text} onChange={(e) => setText(e.target.value)} />
			<button type="submit" className="btnAdd">
				<AddOutlinedIcon />
			</button>
		</form>
	)
}

export default TodoForm
