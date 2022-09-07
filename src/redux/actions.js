import {ADD_TODO} from "./constants";

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo,
    }
}