import { useQuery } from "@tanstack/react-query";
import { getSpacificBrand } from "../http/barnds/brands.httsp";
import { IBrand } from "../types/barnds";

export const useGetSpacificBrand = (id: string) => {
  return useQuery<IBrand>({
    queryKey: ["spacific-brand", id],
    queryFn: () => getSpacificBrand(id),
    enabled: !!id,
  });
};
