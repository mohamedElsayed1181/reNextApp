"use client";

import { useGetSubCategoryOnCategory } from "@/src/hooks/useGetSubCategoryOnCategory";

export default function SubCategoriesCategory({ id }: any) {
  const { data, error, isLoading } = useGetSubCategoryOnCategory(id);

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-10">Something went wrong</p>
    );
  }

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">Sub Categories</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.map((subCategory) => (
          <div
            key={subCategory._id}
            className="
              border 
              rounded-lg 
              p-4 
              shadow-sm
              hover:shadow-md
              transition
            "
          >
            <h3 className="text-lg font-semibold">{subCategory.name}</h3>

            <p className="text-gray-500 mt-2">Slug: {subCategory.slug}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
