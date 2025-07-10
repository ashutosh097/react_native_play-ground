import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api',
    prepareHeaders: (headers) => {
      headers.set('x-api-key', 'reqres-free-v1');
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userData) => ({
        url: 'login',
        method: 'POST',
        body: { email: userData.email, password: userData.password },
      }),
    }),
  }),
});

export const useCreateUserMutation = userApi.useCreateUserMutation;
