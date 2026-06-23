import { useQuery } from "@tanstack/react-query";
import { getSpacificSubCategory } from "../http/category/category.http";
import { TSubCategory } from "../types/category";

export const useGetSpacificSubCategory =  (id: string) => {
  return useQuery<TSubCategory>({
    queryKey: ["spacific-subcategory", id],
    queryFn: () => getSpacificSubCategory(id),
    enabled: !!id,
  });
};
