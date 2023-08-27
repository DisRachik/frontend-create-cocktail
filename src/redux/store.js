import { configureStore } from '@reduxjs/toolkit';

import { favoriteReducer } from './favorite/favoriteSlice';
import { categoriesReducer } from './categories/categoriesSlice';
import { glassesReducer } from './glasses/glassesSlice';
import { ingredientsReducer } from './ingredients/ingredientsSlice';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {

    favorites: favoriteReducer,
    categories: categoriesReducer,
    glasses: glassesReducer,
    ingredients: ingredientsReducer,
  },
});
