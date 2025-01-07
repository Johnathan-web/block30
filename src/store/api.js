import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/`;

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL, 
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if(token){
            headers.set('Authorization', `Bearer ${token}`);
        }
        headers.set('Content-Type', 'application/json');

        return headers;
    } }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "books",
      providesTags: ["Books"],
    }),
  }),
});

export const {
    useGetAllBooksQuery,
} = api;
export default api;
