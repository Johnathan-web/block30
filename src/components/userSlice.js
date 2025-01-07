import api from "../store/api";

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getReservations: build.query({
      query: () => '/reservations',
      providesTags: ['Books'],
      transformResponse: (response) => response,
      transformErrorResponse: (error) => error,
    }),

addLogin: build.mutation({
    query: (userInfo) => ({
      url: '/users/login',
      method: "POST",
      body: userInfo,
}),
    invalidatesTags: ['Username'],
    transformResponse: (response) => response,
    transformErrorResponse: (error) => error,
  }),
  addRegister: build.mutation({
    query: (newUserInfo) => ({
        url: '/users/register',
        method: 'POST',
        body: newUserInfo,
    }),
    invalidatesTags: ['Username'],
    transformResponse: (response) => response,
    transformErrorResponse: (error) => error,
  }),
  removeReservation: build.mutation({
    query: ({reservationId}) => ({
      url: `/reservations/${reservationId}`,
      method: 'DELETE',
    }),
    invalidatesTags:['Books'],
    transformResponse: (response) => response,
    transformErrorResponse: (error) => error,
  }),
}),
});

export const {
useGetReservationsQuery,
useAddLoginMutation,
useAddRegisterMutation,
useRemoveReservationMutation,
}=userApi 