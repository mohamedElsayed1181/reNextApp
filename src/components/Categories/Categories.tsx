"use client";

import { useCategories } from "@/src/hooks/useCategories";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const { data, isLoading, isError } = useCategories();

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="w-full px-6 py-6">
      <h2 className="text-3xl font-bold mb-8">Categories</h2>

      <div
        className="
    grid
    w-full
    grid-cols-2
    sm:grid-cols-3
    md:grid-cols-4
    lg:grid-cols-5
    xl:grid-cols-6
    gap-6
  "
      >
        {data?.map((category: any) => (
          <Link 
           href={`/category/${category._id}`}
            key={category._id}
            className="
    w-full
    bg-white
    rounded-xl
    shadow-md
    overflow-hidden
  "
          >
            <div className="relative w-full h-48">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
            </div>

            <h3
              className="
                text-center
                text-xl
                font-semibold
                py-5
              "
            >
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
