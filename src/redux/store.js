import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { categoriesReducer } from './categories/categoriesSlice';
import { glassesReducer } from './glasses/glassesSlice';
import { ingredientsReducer } from './ingredients/ingredientsSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const categoriesPersistConfig = {
  key: 'categories',
  storage,
  whitelist: ['items'],
};

const glassesPersistConfig = {
  key: 'glasses',
  storage,
  whitelist: ['items'],
};

const ingredientsPersistConfig = {
  key: 'ingredients',
  storage,
  whitelist: ['items'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    categories: persistReducer(categoriesPersistConfig, categoriesReducer),
    glasses: persistReducer(glassesPersistConfig, glassesReducer),
    ingredients: persistReducer(ingredientsPersistConfig, ingredientsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
