import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

const advertsAPI = createApi({
  reducerPath: 'adverts',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    getAllAdverts: builder.query({
      query: () => ({ url: '/adverts' }),
    }),
  }),
});

export default advertsAPI;
export const { useGetAdvertsByQuery, useGetAllAdvertsQuery } = advertsAPI;
