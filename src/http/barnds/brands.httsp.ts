import axiosInstance from "@/lib/axiosInstance";
import { IBrandResponse } from "@/src/types/barnds";

export const getAllBrands = async () => {
  const res = await axiosInstance.get<IBrandResponse>("/brands");
  return res.data.data;
};

export const getSpacificBrand = async (id: string) => {
  const res = await axiosInstance.get(`/brands/${id}`);
  return res.data.data;
};
