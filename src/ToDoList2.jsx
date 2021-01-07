import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ListCom from "./ListCom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const ToDoList2 = () => {
	const [itemList, setItem] = useState("");
	const [newItem, setNewItem] = useState([]);

	const itemEvent = (event) => {
		setItem(event.target.value);
	};

	const listOfItems = () => {
		setNewItem((preValue) => {
			return [...preValue, itemList];
		});
		setItem(" ");
	};

	return (
		<>
			<div className="main_div">
				<div className="center_div">
					<br />
					<h1>ToDo List</h1>
					<br />
					<input
						type="text"
						placeholder="Add Items"
						onChange={itemEvent}
						value={itemList}
					/>
					<Button className="add" onClick={listOfItems}>
						<AddIcon />
					</Button>
					<br />
					<ol>
						{newItem.map((val, index) => {
							return (
								<>
									<ListCom key={index} text={val} />
								</>
							);
						})}
					</ol>
					<br />
				</div>
			</div>
		</>
	);
};

export default ToDoList2;
