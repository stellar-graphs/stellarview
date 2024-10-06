import { combineReducers, configureStore, PreloadedStateShapeFromReducersMapObject } from "@reduxjs/toolkit";
import { counterSlice } from "../app/test/state/counter";
import { setupListeners } from "@reduxjs/toolkit/query";
import { predicateApi } from "@/app/graph/graphSlice/predicateApi";
import { graphSelection } from "@/app/graph/graphSlice/graphSelectionSlice";

export interface StoreReducers {
  counter: typeof counterSlice.reducer;
  predicateApi: typeof predicateApi.reducer;
  graphSelection: typeof graphSelection.reducer;
}

const reducers: StoreReducers = {
  counter: counterSlice.reducer,
  graphSelection: graphSelection.reducer,
  predicateApi: predicateApi.reducer,
};

const rootReducer = combineReducers(reducers);

export const setupStore = (preloadedState?: PreloadedStateShapeFromReducersMapObject<typeof rootReducer>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(predicateApi.middleware),
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
