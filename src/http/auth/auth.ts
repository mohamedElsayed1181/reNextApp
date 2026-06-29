import axiosInstance from "@/lib/axiosInstance";
import { LoginData, RegisterData } from "@/src/types/auth";

export const register = async (data: RegisterData) => {
  const res = await axiosInstance.post("/auth/signup", data);

  return res.data;
};

export const login = async (data: LoginData) => {
  const res = await axiosInstance.post("/auth/signin", data);

  return res.data;
};
 