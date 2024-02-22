import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardapioItem, Foods } from '../types'
import { Food } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturesFood: builder.query<Food[], void>({
      query: () => 'restaurantes'
    }),
    getCardapioItem: builder.query<CardapioItem, void>({
      query: () => 'restaurantes'
    }),
    getCardapio: builder.query<Foods[], void>({
      query: () => 'restaurantes'
    }),
    getFood: builder.query<Food, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const {
  useGetFeaturesFoodQuery,
  useGetFoodQuery,
  useGetCardapioItemQuery,
  useGetCardapioQuery
} = api

export default api
