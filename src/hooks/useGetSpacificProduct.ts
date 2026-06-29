import { useQuery } from "@tanstack/react-query";
import { getSpacificProduct } from "../http/products/products.http";

export const useGetSpacificProduct = (id: string) => {
  return useQuery({
    queryKey: ["spacific-product", id],
    queryFn: () => getSpacificProduct(id),
    enabled: !!id,
  });
};
