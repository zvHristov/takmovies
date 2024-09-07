import { configureStore } from '@reduxjs/toolkit';
import auth from '../model/auth';
import movies from '../model/movies';

export const store = configureStore({
    reducer: {
      auth,
      movies,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  })

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;