
import {combineReducers, createStore} from 'redux';
import rabotaReducer from "./rabota";


let rootReducer = combineReducers({
    rabota: rabotaReducer,
})

let store = createStore(rootReducer);

window.store = store;

export default store;