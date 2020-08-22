import React from 'react';
import BaseLayout from "./_Layout/BaseLayout";

import AddNewToDoItem from "../components/ToDo/AddNewToDoItem";
import TodoItem from "../components/ToDo/ToDoItem";
import ToDoPageHeader from "../components/ToDo/ToDoPageHeader";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";

import "./pageStyles.css";

const ToDo = () => {
    return(
        <BaseLayout>
        <div className="page-cintent-container"></div>
            <Grid container spacing={3}>
                <Grid key="page-title" item xs={10}>
                    <ToDoPageHeader/>
                </Grid>
                <Grid key="add-new" item xs={2}>
                    <AddNewToDoItem/>
                </Grid>
                <Grid item xs={12}>
                    <TodoItem todoData={{id:"0", title:"ToDo 1", content:"dasdasda"
                }}/>
				</Grid>
                <Grid item xs={12}>
                    <TodoItem todoData={{id:"1", title:"ToDo 2", content:"dasdasda"
                }}/>
				</Grid>
            </Grid>
        </BaseLayout>
    );
};


export default ToDo;