import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// a persisted version of the store, makes it possible to use
// for example localStorage via Redux
export const persistor = persistStore(store);

export default { store, persistor };
