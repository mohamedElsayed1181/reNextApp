"use client";

import { useQuery } from "@tanstack/react-query";
import { getSpacificCategory } from "../http/category/category.http";


export const useSpacificCategory = (id:string) => {

  return useQuery({

    queryKey: ["spacific-category", id],

    queryFn: () => getSpacificCategory(id),

    enabled: !!id,

  });

};