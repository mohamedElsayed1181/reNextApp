import axiosInstance from "@/lib/axiosInstance";
import { IBrandResponse } from "@/src/types/barnds";

export const getAllBrands = async ({page}: {page: number}) => {
  const res = await axiosInstance.get<IBrandResponse>("/brands",{
    params: {
     page,
     limit: 40
    },
  });
  return res.data;
};

export const getSpacificBrand = async (id: string) => {
  const res = await axiosInstance.get(`/brands/${id}`);
  return res.data.data;
};
