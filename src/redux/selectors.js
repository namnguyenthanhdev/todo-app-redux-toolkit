import {createSelector} from "reselect";

export const todoListSelector = state => state.todoList;
export const searchTextSelector = state => state.filters.search;
export const prioritiesSelectSelector = state => state.filters.priorities;
export const statusSelectSelector = state => state.filters.status;


export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    prioritiesSelectSelector,
    statusSelectSelector,
    (todoList, search, priorities, status) => {
         return todoList.filter(todo => {
            if (status === "All") {
                return priorities.length ? todo.text.includes(search) && todo.priority.includes(priorities) : todo.text.includes(search)
            }
            return (
                todo.text.includes(search) &&
                (status === "Completed" ? todo.completed : !todo.completed) &&
                (priorities.length ? todo.priority.includes(priorities) : true)
            )
        })
    }
)