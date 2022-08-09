import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,

})

let store = legacy_createStore(reducers);

export default store;