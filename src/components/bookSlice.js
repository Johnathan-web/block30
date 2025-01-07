import api from "../store/api";

const bookApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => "/books",
      providesTags: ["Books"],
      transformResponse: (response) => response,
      transformErrorResponse: (error) => error,
    }),
  
    getBook: build.query({
      query: (bookId) => `/books/${bookId}`,
      providesTags: ["Books"],
      transformResponse: (response) => response,
      transformErrorResponse: (error) => error,
      }),
    patchBook: build.mutation({
      query: ({bookId, available}) => ({
        url: `/books/${bookId}`,
        method: 'PATCH',
        body: {available},
      }),
      invalidatesTags: ["Books"],
      transformResponse: (response) => response,
      transformErrorResponse: (error) => error,
    }),
  }),
});



export const {
  useGetAllBooksQuery,
  useGetBookQuery,
  usePatchBookMutation,

} = bookApi;
