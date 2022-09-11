import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";


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
        }).addCase(addNewTodo.fulfilled, (state, action) => {
            state.todos.push(action.payload);
        })
        //     .addCase(updateTodo.fulfilled, (state, action) => {
        //    let currentTodo = state.todos.find((todo) => {todo.id === action.payload});
        //    if(currentTodo) {
        //        currentTodo = action.payload;
        //    }
        // });
    }

})

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const res = await fetch("/api/todos");
    console.log({res});
    const data = await res.json();
    console.log({data});
    return data.todos;
});

export const addNewTodo = createAsyncThunk("/api/todos", async (newTodo) => {
    const res = await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify(newTodo)
    });
    const data = await res.json();
    console.log("dataAfterAddNew: ",{data});
    return data.todos;
})


export const updateTodo = createAsyncThunk("/api/todos", async (updatedTodo) => {
    const res = await fetch("/api/updateTodo", {
        method: "POST",
        body: JSON.stringify(updatedTodo)
    });
    const data = await res.json();
    console.log("dataAfterUpdate: ",{data});
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
