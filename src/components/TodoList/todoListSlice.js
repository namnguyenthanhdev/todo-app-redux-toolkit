

const initState = [
    { id: 0, text: 'Learn React', completed: true, priority: 'High' },
    { id: 1, text: 'Learn Redux', completed: false, priority: 'Medium' },
    { id: 2, text: 'Build something fun!', completed: false, priority: 'Low' }
]

function todoListSlice (state = initState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default todoListSlice;