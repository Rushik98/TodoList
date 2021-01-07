import React from "react";
import { FaTimes } from "react-icons/fa";

const ToDoList = (props) => {
	return (
		<>
			<div className="todo_style">
				<FaTimes
					className="font"
					onClick={() => {
						props.onSelect(props.id);
					}}
				/>
				<li>{props.text}</li>
			</div>
		</>
	);
};

export default ToDoList;
