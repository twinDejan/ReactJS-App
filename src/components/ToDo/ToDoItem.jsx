import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const ToDoItem = ({ todoData, deleteTodoItemHandler }) => {
	return (
        <div style={{ paddingBottom: 5 }}>
            <Card>
			<CardHeader
				title={
					<div>
						{todoData.title}
						<Button onClick={deleteTodoItemHandler}>X</Button>
					</div>
				}
			/>
			<CardContent>{todoData.content}</CardContent>
		</Card>
        </div>
	);
};

export default ToDoItem;