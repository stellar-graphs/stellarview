import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { TerminusdbBindings } from './types'

// Define a service using a base URL and expected endpoints
export const predicateApi = createApi({
  reducerPath: 'predicateApi',
  tagTypes: ['predicate'],
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getAllPredicates: builder.query({

      providesTags: result =>{

        return result
          ? [
              ...result.map((binding:any) => ({ type: 'predicate', predicate: binding.predicate })),
              { type: 'predicate', id: 'LIST' },
            ]
          : [{ type: 'predicate', id: 'LIST' }]},

      query: () => `predicate`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPredicatesQuery } = predicateApi