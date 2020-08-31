import React, {useState} from 'react';
import BaseLayout from "./_Layout/BaseLayout";

import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

import AddNewToDoItem from "../components/ToDo/AddNewToDoItem";
import TodoItem from "../components/ToDo/ToDoItem";
import ToDoPageHeader from "../components/ToDo/ToDoPageHeader";

import Grid from "@material-ui/core/Grid";
import "./pageStyles.css";

const SortableContainer = sortableContainer(({ children }) => {
	return <ul className="draggableContainer">{children}</ul>;
});

const SortableItem = sortableElement(({ value }) => (
	<div style={{ paddingBottom: 5 }}>{value}</div>
));

const ToDo = () => {
    const [toDoData, setToDoData] = useState([
		{ id: "0", title: "Todo 1", content: "TodoItem1 content content content" },
		{ id: "1", title: "Todo 2", content: "TodoItem2 content content content" },
		{ id: "2", title: "Todo 3", content: "TodoItem3 content content content" },
    ]);
    
    const [newTodoState, setNewTodoState] = useState();

    const addNewTodo = () => {
        setToDoData([
            ... toDoData,
            {
                id: toDoData.length + 1,
                title: newTodoState.todoTitle,
                content: newTodoState.toDoContent,
            },
        ]);
    }

    const deleteToDoItem = (id) => {
        const toDoDataCopy = toDoData;

        const indexToDelete = toDoDataCopy.findIndex((item)=> item.id === id);

        toDoDataCopy.splice(indexToDelete, 1);

        setToDoData([...toDoDataCopy]);
    }

    const onChange = (event) => {
		setNewTodoState({
			...newTodoState,
			[event.target.name]: event.target.value,
		});
    };

    const onSortEnd = ({ oldIndex, newIndex, collection }) => {
		let copyToDoData = toDoData;
		copyToDoData = arrayMove(copyToDoData, oldIndex, newIndex);
		setToDoData([...copyToDoData]);
	};
    
    return(
        <BaseLayout>
			<div className="page-content-container">
				<Grid container spacing={1}>
					<Grid key="page-title" item xs={10}>
						{JSON.stringify(newTodoState)}
						<ToDoPageHeader onChangeHandler={onChange} />
					</Grid>

					<Grid key="add-new" item xs={2}>
						<AddNewToDoItem addNewTodoHandler={addNewTodo} />
					</Grid>

					<SortableContainer onSortEnd={onSortEnd} lockAxis="y" distance={2}>
						{toDoData.map((todoItem, index) => (
							<SortableItem
								key={todoItem.id}
								index={index}
								collection={0}
								value={
									<Grid item xs={12}>
										<TodoItem
											todoData={{
												id: todoItem.id,
												title: todoItem.title,
												content: todoItem.content,
											}}
											deleteTodoItemHandler={() => deleteToDoItem(todoItem.id)}
										/>
									</Grid>
								}
							/>
						))}
					</SortableContainer>
				</Grid>
			</div>
		</BaseLayout>
    );
};


export default ToDo;