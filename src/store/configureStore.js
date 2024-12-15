import {applyMiddleware, combineReducers, createStore} from "redux";
import entriesReducer from "../reducers/entries.reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import modalsReducers from "../reducers/modals.reducers";
import createSagaMiddleware from "redux-saga";
import {initSagas} from "../sagas";

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const configureStore = () => {
    const store = createStore(
        combineReducers({
            entries: entriesReducer,
            modals: modalsReducers
        }), composeWithDevTools(applyMiddleware(...middlewares))
    )

    initSagas(sagaMiddleware)
    return store
}

export default configureStore;