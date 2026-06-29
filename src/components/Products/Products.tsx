"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useProductStore } from "@/src/store/productStore";
import Pagination from "../Pagination/Pagination";
import Link from "next/link";

export default function Products() {
  const { products, loading, metadata, fetchProducts } = useProductStore();

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-5">
      {/* Products */}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => {
          return (
            
            <Link href={`/products/${product._id}`} key={product.id} className="border rounded-lg p-4">
              <Image
                src={product.imageCover}
                width={300}
                height={300}
                alt={product.title}
                className="w-full h-52 object-cover"
              />

              <h2 className="font-bold mt-3">{product.title}</h2>

              <p>{product.price} EGP</p>

              <p>⭐ {product.ratingsAverage}</p>
            </Link>
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-5 mt-10">
        <Pagination
          currentPage={metadata?.currentPage ?? 1}
          totalPages={metadata?.numberOfPages ?? 1}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
