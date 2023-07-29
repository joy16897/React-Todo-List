/** @format */

import React, { useState } from "react"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"
const TodoItem = ({ todo, deleteTodo, toggleComplete }) => {
	const [isChecked, setIsChecked] = useState(false)
	const change = () => setIsChecked(!isChecked)
	return (
		<div>
			<li>
				<div onClick={change}>{!isChecked ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon />}</div>
				<div onClick={change}>{todo.text}</div>
				<div onClick={() => deleteTodo(todo.id)}>
					<CloseOutlinedIcon />
				</div>
			</li>
		</div>
	)
}

export default TodoItem
