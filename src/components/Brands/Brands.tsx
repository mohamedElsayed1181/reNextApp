"use client";

import { useGetAllBrands } from "@/src/hooks/useGgetBrands";
import Image from "next/image";
import Link from "next/link";

export default function Brands() {
  const { data, error, isLoading } = useGetAllBrands();

  if (isLoading) {
    return <div className="text-center mt-10">Loading Brands...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">Something went wrong</div>
    );
  }

  return (
    <section className="p-5">
      <h2 className="text-2xl font-bold mb-6">Brands</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data?.map((brand) => (
          <Link
            href={`/brands/${brand._id}`}
            key={brand._id}
            className="
              border
              rounded-xl
              p-5
              flex
              flex-col
              items-center
              gap-3
              hover:shadow-lg
              transition
            "
          >
            <Image
              src={brand.image}
              alt={brand.name}
              width={96}
              height={96}
              className="
    w-24
    h-24
    object-contain
  "
            />

            <h3 className="font-semibold text-lg">{brand.name}</h3>

            <p className="text-gray-500 text-sm">{brand.slug}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
