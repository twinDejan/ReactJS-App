import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

const AddNewToDoItem = ({ addNewTodoHandler }) => {
	return (
		<Card style={{ height: "100%" }}>
			<Button
				color="primary"
				style={{ height: "100%", width: "100%" }}
				onClick={addNewTodoHandler}
			>
				Add +
			</Button>
		</Card>
	);
};

export default AddNewToDoItem;
