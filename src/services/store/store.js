import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import serviceListReducer from "../reducers/service-list-reducer";
import {fetchServicesDataEpic} from "../epics";

const reducer = combineReducers({
    servicesList: serviceListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
    fetchServicesDataEpic,
);
const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);
export default store;
