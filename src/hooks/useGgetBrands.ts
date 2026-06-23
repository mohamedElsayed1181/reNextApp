import { useQuery } from "@tanstack/react-query";
import { getAllBrands } from "../http/barnds/brands.httsp";

export const useGetAllBrands = () => {
  return useQuery({
    queryKey: ["brands"],
    queryFn: getAllBrands,
  });
};
