import { combineReducers, configureStore, PreloadedStateShapeFromReducersMapObject } from "@reduxjs/toolkit";
import { counterSlice } from "../app/test/state/counter";
import { setupListeners } from "@reduxjs/toolkit/query";

export interface StoreReducers {
  counter: typeof counterSlice.reducer;
}

const reducers: StoreReducers = {
  counter: counterSlice.reducer,
};

const rootReducer = combineReducers(reducers);

export const setupStore = (preloadedState?: PreloadedStateShapeFromReducersMapObject<typeof rootReducer>) => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware()
    //     .concat(apiTokenApi.middleware),
    preloadedState,
  });
};

export const makeStore = () => {
  const store = setupStore();
  setupListeners(store.dispatch);
  return store;
}

// Not in Next.JS!
// export const store = setupStore();
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']
