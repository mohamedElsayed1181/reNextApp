import axiosInstance from "@/lib/axiosInstance";

export const getAllCategory = async () => {
  const res = await axiosInstance.get("/categories");

  return res.data.data;
};

export const getSpacificCategory = async (id: string) => {
  const res = await axiosInstance.get(`/categories/${id}`);
  return res.data.data;
};

export const GetAllSubCategory = async () => {
  const res = await axiosInstance.get("/subcategories");
  return res.data.data;
};

export const getSpacificSubCategory = async (id: string) => {
  const res = await axiosInstance.get(`/subcategories/${id}`);
  return res.data.data;
};

export const getSubCategoryOnCategory = async (id: string) => {
  const res = await axiosInstance.get("/subcategories", {
    params: { category: id },
  });
  return res.data.data;
};
