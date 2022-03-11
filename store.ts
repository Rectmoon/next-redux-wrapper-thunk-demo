import { Action, configureStore, Store } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { ThunkAction } from "redux-thunk";
import { MakeStore } from "next-redux-wrapper";
import weaponsReducer from "./slice";

const rootReducer = combineReducers({
  weaponsReducer: weaponsReducer
});

type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<any>>;

/**
 * @param initialState The store's initial state (on the client side, the state of the server-side store is passed here)
 */
const makeStore: MakeStore = (initialState, options): Store => {
  const store: Store = configureStore({
    reducer: rootReducer
  });

  // @ts-ignore
  if (process.env.NODE_ENV === "development" && module.hot) {
    // @ts-ignore
    module.hot.accept("./slice", () => {
      const newRootReducer = require("./slice").default;
      store.replaceReducer(newRootReducer);
    });
  }

  return store;
};

export default makeStore;
