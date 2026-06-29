"use client";

import { useState } from "react";
import { useGetAllBrands } from "@/src/hooks/useGgetBrands";

import Image from "next/image";
import Link from "next/link";

import Pagination from "../Pagination/Pagination";

export default function Brands() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useGetAllBrands({ page });

  if (isLoading) {
    return <div>Loading Brands...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <section className="p-5">
      <h2 className="text-2xl font-bold mb-6">Brands</h2>

      <div
        className="
grid 
grid-cols-2 
md:grid-cols-3 
lg:grid-cols-4 
gap-5
"
      >
        {data?.data.map((brand) => (
          <Link
            key={brand._id}
            href={`/brands/${brand._id}`}
            className="
border
rounded-xl
p-5
flex
flex-col
items-center
gap-3
hover:shadow-lg
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

            <h3>{brand.name}</h3>

            <p>{brand.slug}</p>
          </Link>
        ))}
      </div>

      <Pagination
        currentPage={data?.metadata.currentPage ?? 1}
        totalPages={data?.metadata.numberOfPages ?? 1}
        onPageChange={setPage}
      />
    </section>
  );
}
