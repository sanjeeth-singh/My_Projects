// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: (values) => `users/?username=${values.username}&password=${values.password}`,
    }),
    getRegistrationDetails: builder.query({
      query: (username) => `registrations/?campaigner=${username}`,
    }),
    getCampaignersDetails: builder.query({
      query: () => `users/?role=campaigner`,
    }),
    getCampaignDetails: builder.query({
      query: () => `campaigns`,
    }),
    getTotalRegDetails: builder.query({
      query: () => `registrations`,
    }),
    addCampaign: builder.mutation({
      query: (values) => {
        return {
          method: "POST",
          url: "/campaigns",
          body: values
        }
      },
    }),
    addRegistration: builder.mutation({
      query: (values) => {
        return {
          method: "POST",
          url: "/registrations",
          body: values
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLazyGetUserDetailsQuery,
  useAddCampaignMutation,
  useGetCampaignDetailsQuery,
  useAddRegistrationMutation,
  useLazyGetRegistrationDetailsQuery,
  useGetCampaignersDetailsQuery,
  useGetTotalRegDetailsQuery,
} = loginApi