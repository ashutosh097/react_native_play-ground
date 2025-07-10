import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from './WeatherApi';
import { userApi } from '../../login/api services/api';

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware, userApi.middleware),
});