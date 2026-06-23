"use client";

import { useSpacificCategory } from "@/src/hooks/useSpacificCategory";
import Image from "next/image";
import Link from "next/link";

export default function SpacificCategories({ id }: any) {
  const { data, isLoading, isError } = useSpacificCategory(id);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="w-full px-6 py-8">
      <div
        className="
        flex 
        flex-col 
        md:flex-row 
        items-center 
        gap-8
        bg-gray-100
        rounded-2xl
        p-6
        mb-8
      "
      >
        <div
          className="
          relative
          w-full
          md:w-72
          h-72
          rounded-xl
          overflow-hidden
        "
        >
          <Image
            src={data?.image}
            alt="category"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-center md:text-left ">
          <h1
            className="
            text-3xl
            font-bold
            text-gray-800
            mb-3
          "
          >
            {data?.name}
          </h1>

          <p
            className="
            text-gray-500
            text-lg
          "
          >
            Explore all products in this category
          </p>

      
        </div>
            <Link 
            href={`/category/${id}/subcategories`}
            className="
              mt-5
              bg-black
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-gray-800
              transition
            "
          >
            View 
          </Link>
      </div>
      {/* 
      <div>
        <h2
          className="
          text-2xl
          font-bold
          mb-6
        "
        >
          Products
        </h2>

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-6
          "
        >

          <div
            className="
            bg-white
            rounded-xl
            shadow
            overflow-hidden
          "
          >
            <div
              className="
              h-48
              bg-gray-200
            "
            />

            <div className="p-4">
              <h3 className="font-semibold">{data?.name}</h3>

              <p
                className="
                text-gray-500
                mt-2
              "
              >
                100 EGP
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
