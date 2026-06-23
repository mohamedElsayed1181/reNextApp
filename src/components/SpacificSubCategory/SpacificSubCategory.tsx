"use client";

import { useGetSpacificSubCategory } from "@/src/hooks/useGetSpacificSubCategory";

export default function SpacificSubCategory({ id }: { id: string }) {
  const { data, isLoading, isError } = useGetSpacificSubCategory(id);

  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center py-10">
        <p className="text-red-500 text-lg">Something went wrong</p>
      </div>
    );
  }

  return (
    <section className="w-full px-6 py-8">
      {/* Header */}
      <div
        className="
          bg-gray-100
          rounded-2xl
          p-8
          text-center
          mb-8
        "
      >
        <h1
          className="
            text-3xl
            md:text-4xl
            font-bold
            text-gray-800
          "
        >
          {data?.name}
        </h1>

        <p
          className="
            text-gray-500
            mt-3
          "
        >
          Explore products in this sub category
        </p>
      </div>

 
    </section>
  );
}
