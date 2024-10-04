import { combineReducers, configureStore, PreloadedStateShapeFromReducersMapObject } from "@reduxjs/toolkit";
import { counterSlice } from "./test/state/counter";
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

// export default store;
export const store = setupStore();
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
