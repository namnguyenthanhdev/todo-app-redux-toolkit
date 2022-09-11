import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const todoListSlice = createSlice({
    name: "todoList",
    initialState: {status: "idle", todos: []},
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
    },
    extraReducers: builder => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.status = "loading";
        }).addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload;
            state.status = "idle";
        })
    }

})

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const res = await fetch("/api/todos");
    console.log({res});
    const data = await res.json();
    console.log({data});
    return data.todos;
})

export default todoListSlice;

///////////////       CO THE SUA GIA TRI        ////////////////////
// export function addTodos (todo) {
//     return function addTodosThunk(dispatch, getState){
//         console.log({todo});
//         console.log("addTodosThunk: ", getState());
//         // custom
//         todo.name="Nam em know your vá lù";
//         dispatch(todoListSlice.actions.addTodo(todo));
//         console.log("after addTodosThunk: ", getState());
//
//     }
// }


/*
{ id: 0, text: 'Learn React', completed: true, priority: 'High' },
            { id: 1, text: 'Learn Redux', completed: false, priority: 'Medium' },
            { id: 2, text: 'Build something fun!', completed: false, priority: 'Low' }
 */
