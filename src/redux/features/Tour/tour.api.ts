/* eslint-disable @typescript-eslint/no-unused-vars */
import { baseApi } from "@/redux/baseApi";


interface ISendOtp {
  email: string
}

interface ILogin {
  email : string,
  password: string
}

interface IResponse<T> {
  statusCode : number;
  success : boolean;
  message : string;
  data: T
}

interface IVerifyOtp {
  email : string;
  otp : string;
}


export const tourApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTour: builder.mutation({
      query: (tourData) => ({
        url: "/tour/create",
        method: "POST",
        data: tourData,
      }),
      invalidatesTags: ["TOUR"]
    }),
    addTourType: builder.mutation({
      query: (tourTypeName) => ({
        url: "/tour/create-tour-type",
        method: "POST",
        data: tourTypeName,
      }),
      invalidatesTags: ["TOUR"]
    }),
    removeTourType: builder.mutation({
      query: (tourTypeId) => ({
        url: `/tour/tour-types/${tourTypeId}`,
        method: "DELETE"
      }),
      invalidatesTags: ["TOUR"]
    }),
    getTourTypes: builder.query({
      query: () => ({
        url: "/tour/tour-types",
        method: "GET",
      }),
      providesTags: ["TOUR"],
      transformResponse: (response) => response.data,
    }),
    getAllTours: builder.query({
      query: (params) => ({
        url: "/tour",
        method: "GET",
        params
      }),
      providesTags: ["TOUR"],
      transformResponse: (response) => response.data,
    })
  }),
});

export const { useGetTourTypesQuery, useAddTourTypeMutation,useRemoveTourTypeMutation, useAddTourMutation, useGetAllToursQuery } = tourApi;