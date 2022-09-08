import {createSlice} from "@reduxjs/toolkit";


export const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        search: "", status: "All", priorities: [],
    },
    reducers: {
        searchFilter: (state, action) => {
            state.search = action.payload;
        },
        statusFilter: (state, action) => {
            state.status = action.payload;
        },
        prioritiesFilter: (state, action) => {
            state.priorities = action.payload;
        }
    }
})

