import {createSlice} from "@reduxjs/toolkit";


const todoListSlice = createSlice({
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
            const currentTodo = state.find(todo => todo.id === action.payload);
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
        },
    }
})

export default todoListSlice;

export function addTodos (todo) {
    return function addTodosThunk(dispatch, getState){
        console.log({todo});
        console.log("addTodosThunk: ", getState());
        // custom
        todo.name="Nam em know your vá lù";
        dispatch(todoListSlice.actions.addTodo(todo));
        console.log("after addTodosThunk: ", getState());

    }

}
