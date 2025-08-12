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


const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
      query: (userInfo) => ({
        url: "/otp/send",
        method: "POST",
        data: userInfo
      })
    }),
    verifyOtp: builder.mutation<IResponse<null>, IVerifyOtp>({
      query: (userInfo) => ({
        url: "otp/verify",
        method: "POST",
        data: userInfo
      })
    })
  }),
});

export const { useRegisterMutation, useLoginMutation, useSendOtpMutation, useVerifyOtpMutation } = authApi;