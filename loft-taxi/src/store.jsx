import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
// import { authMiddleware } from "./authMiddleware";
// import { cardMiddleware } from "./cardMiddleware";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from './saga/rootSaga'

const sagaMiddleware = createSagaMiddleware()

// export const store = createStore(rootReducer, 
//     compose(
//         applyMiddleware(authMiddleware),
//         applyMiddleware(cardMiddleware),
//         ));

export const store = createStore(rootReducer, 
    compose(
        applyMiddleware(sagaMiddleware)
        ));

sagaMiddleware.run(rootSaga)
