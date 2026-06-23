"use client";

import Image from "next/image";
import { useGetSpacificBrand } from "@/src/hooks/useGetSpacificBrand";

export default function SingleBrand({ id }: { id: string }) {
  const { data, error, isLoading } = useGetSpacificBrand(id);

  if (isLoading) {
    return <div className="text-center mt-10">Loading Brand...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">Something went wrong</div>
    );
  }

  return (
    <section className="p-5">
      <div
        className="
          max-w-md
          mx-auto
          border
          rounded-xl
          p-6
          shadow-sm
          flex
          flex-col
          items-center
          gap-4
        "
      >
        {data?.image && (
          <Image
            src={data.image}
            alt={data.name}
            width={150}
            height={150}
            className="object-contain"
          />
        )}

        <h2 className="text-2xl font-bold">{data?.name}</h2>

        <p className="text-gray-500">{data?.slug}</p>

        <p className="text-sm text-gray-400">Created At: {data?.createdAt}</p>
      </div>
    </section>
  );
}
