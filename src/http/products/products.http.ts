import axiosInstance from "@/lib/axiosInstance";

export const getAllProducts = async (page: number = 1) => {
  const res = await axiosInstance.get("/products", {
    params: {
      page,
      limit: 40,
    },
  });
  return res.data;
};



export const getSpacificProduct = async (id: string) => {
  const res = await axiosInstance.get(`/products/${id}`);
  return res.data.data;
};