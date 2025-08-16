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


export const divisionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addDivision: builder.mutation({
      query: (divisionData) => ({
        url: "/division/create",
        method: "POST",
        data: divisionData,
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
  }),
});

export const {useAddDivisionMutation  } = divisionApi;