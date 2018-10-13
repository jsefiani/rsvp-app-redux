import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

// Import Reducer
import rsvpReducer from "../reducers/rsvpReducer";
import pendingGuestReducer from "../reducers/pendingGuestReducer";
import filterReducer from "../reducers/filterReducer";

// Importing sagas
import rootSaga from "../sagas/sagas";

// Create middleware
const sagaMiddleware = createSagaMiddleware();

export default () => {
    // Creating a store
    const store = createStore(
        combineReducers({
            pendingGuest: pendingGuestReducer,
            isFiltered: filterReducer,
            guests: rsvpReducer
        }),
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    sagaMiddleware.run(rootSaga);

    return store;
};



