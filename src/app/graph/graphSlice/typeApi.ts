import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { TerminusdbBindings } from './types'

// Define a service using a base URL and expected endpoints
export const typesApi = createApi({
  reducerPath: 'typesApi',
  tagTypes: ['types'],
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getAllTypes: builder.query({
      providesTags: result =>{
        return result
          ? [
              ...result.map((binding:string) => ({ type: 'types', types: binding })),
              { type: 'types', id: 'LIST' },
            ]
          : [{ type: 'types', id: 'LIST' }]},
      query: () => `types`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllTypesQuery } = typesApi