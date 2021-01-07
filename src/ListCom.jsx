import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const ListCom = (props) => {
	const [line, setLine] = useState(false);
	const deleteItem = () => {
		setLine(true);
	};

	return (
		<>
			<div className="todo_style">
				<span>
					<DeleteIcon className="delete" onClick={deleteItem} />
				</span>

				<li style={{ textDecoration: line ? "line-through" : "none" }}>
					{props.text}
				</li>
			</div>
		</>
	);
};

export default ListCom;
