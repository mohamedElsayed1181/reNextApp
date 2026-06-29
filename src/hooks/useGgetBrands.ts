import { useQuery } from "@tanstack/react-query";
import { getAllBrands } from "../http/barnds/brands.httsp";

export const useGetAllBrands = ({ page }: { page: number }) => {
  return useQuery({
    queryKey: ["brands", page],
    queryFn: () => getAllBrands({ page }),
  });
};
