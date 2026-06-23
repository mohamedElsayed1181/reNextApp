"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "../http/category/category.http";


export const useCategories = () => {

  return useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategory,
  });

};