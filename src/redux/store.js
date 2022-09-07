import {createStore} from "redux"
import rootReducer from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";


const composedEnhancer = composeWithDevTools();
const store = createStore (rootReducer, composedEnhancer);
console.log(store);
export default store;