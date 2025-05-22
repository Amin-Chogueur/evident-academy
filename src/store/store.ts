import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./dashboardSlices/userSlice";
import courseReducer from "./dashboardSlices/courseSlice";
import cartReducer from "./clientSlices/cartSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage"; // localStorage for web

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart"], // persist the cart array inside cart slice
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions for serializable middleware
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
