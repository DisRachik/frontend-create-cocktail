import { configureStore } from '@reduxjs/toolkit';

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
  reducer: {},
});