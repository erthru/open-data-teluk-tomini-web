import { combineReducers, createStore } from "redux";
import navigationReducers from "./navigation/reducers";

const combinedReducers = combineReducers({
    navigation: navigationReducers,
});

export type Store = ReturnType<typeof combinedReducers>;
export default createStore(combinedReducers, {});
