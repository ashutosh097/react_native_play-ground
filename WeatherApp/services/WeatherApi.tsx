import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'd067862e9c533a4a1d50bf46c7a6e214'

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  tagTypes: ['Weather'],
  endpoints: (builder) => ({
    getWeatherByCoords: builder.query({
      query: ({ lat, lon }) =>
        `weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
      providesTags: ['Weather'],
      keepUnusedDataFor: 900, // 15 minutes
    }),
  }),
});
export const { useGetWeatherByCoordsQuery } = weatherApi;
