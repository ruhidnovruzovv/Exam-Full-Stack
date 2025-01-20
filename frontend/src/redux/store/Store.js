import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/productSlice';
import basketReducer from '../features/basketSlice';
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import wishlistReducer from '../features/wishlistSlice'

const basketPersistConfig = {
    key: "basket",
    storage
}

const wishlistPersistConfig = {
    key: "wishlist",
    storage
}

const persistedBasketReducer = persistReducer(
    basketPersistConfig,
    basketReducer
);
const persistedWishlistReducer = persistReducer(
    wishlistPersistConfig,
    wishlistReducer
);


const store = configureStore({
    reducer: {
        products: productReducer,
        basket: persistedBasketReducer,
        wishlist: persistedWishlistReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

export const persistor = persistStore(store);

export default store;
