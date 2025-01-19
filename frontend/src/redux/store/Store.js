import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/productSlice';
import basketReducer from '../features/basketSlice';
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const basketPersistConfig = {
    key: "basket",
    storage
}

const persistedBasketReducer = persistReducer(
    basketPersistConfig,
    basketReducer
);

const store = configureStore({
    reducer: {
        products: productReducer,
        basket: persistedBasketReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

export const persistor = persistStore(store);

export default store;
