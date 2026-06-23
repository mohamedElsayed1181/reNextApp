"use client";

import { useQuery } from "@tanstack/react-query";
import { GetAllSubCategory } from "../http/category/category.http";
import { TSubCategory } from "../types/category";

export const useGetAllSubCategory = () => {
  return useQuery<TSubCategory[]>({
    queryKey: ["susb-categories"],
    queryFn: GetAllSubCategory,
  });
};
