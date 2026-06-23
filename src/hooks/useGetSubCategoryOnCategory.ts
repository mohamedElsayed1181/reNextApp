"use client";

import { useQuery } from "@tanstack/react-query";
import { getSubCategoryOnCategory } from "../http/category/category.http";
import { TSubCategory } from "../types/category";


export const useGetSubCategoryOnCategory = (id:string) => {

  return useQuery<TSubCategory[]>({

    queryKey: ["spacific-oncategory", id],

    queryFn: () => getSubCategoryOnCategory(id),

    enabled: !!id,

  });

};