import {createSlice} from "@reduxjs/toolkit";


export const todoListSlice = createSlice({
    name: "todoList",
    initialState: [
            { id: 0, text: 'Learn React', completed: true, priority: 'High' },
            { id: 1, text: 'Learn Redux', completed: false, priority: 'Medium' },
            { id: 2, text: 'Build something fun!', completed: false, priority: 'Low' }
        ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        completedToggle: (state, action) => {
            const currentTodo = state.filter(todo => todo.id === action.payload);
            currentTodo.completed = !currentTodo.completed;
        },
    }
})
