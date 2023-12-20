import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

const makesFilterAPI = createApi({
  reducerPath: 'makesFilter',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    getMakesFilter: builder.query({
      query: () => ({ url: '/makesFilter' }),
    }),
  }),
});

export default makesFilterAPI;
export const { useGetMakesFilterQuery } = makesFilterAPI;
