import { configureStore } from '@reduxjs/toolkit'
import { loginApi } from '../services/jsonAPI'
import userReducer, { loginSlice } from '../features/reducers/userSlice'

export const store = configureStore({
  reducer: {
    userRed:userReducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),

})
