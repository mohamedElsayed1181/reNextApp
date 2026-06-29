"use client";

import Image from "next/image";
import { useGetSpacificProduct } from "@/src/hooks/useGetSpacificProduct";

interface Props {
  id: string;
}

export default function ProductDetails({ id }: Props) {
  const { data, error, isLoading } = useGetSpacificProduct(id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-semibold">Loading Product...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-xl">Something went wrong</p>
      </div>
    );
  }

  const product = data;

  if (!product) return null;

  return (
    <section className="container mx-auto px-5 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-5">
          <div className="border rounded-2xl p-5 shadow-sm">
            <Image
              src={product.imageCover}
              width={600}
              height={600}
              alt={product.title}
              className="w-full h-[500px] object-contain rounded-xl"
            />
          </div>

          <div className="flex gap-3 flex-wrap">
            {product.images?.map((image: string) => (
              <div
                key={image}
                className="border rounded-xl p-2 hover:border-black cursor-pointer"
              >
                <Image
                  src={image}
                  width={90}
                  height={90}
                  alt={product.title}
                  className="w-[90px] h-[90px] object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-5">{product.title}</h1>

          <p className="text-gray-600 leading-7 mb-6">{product.description}</p>

          <div className="text-3xl font-bold text-green-600 mb-5">
            {product.price} EGP
          </div>

          <div className="flex items-center gap-2 mb-5">
            <span className="text-yellow-500 text-xl">⭐</span>

            <span className="font-semibold">{product.ratingsAverage}</span>

            <span className="text-gray-500">
              ({product.ratingsQuantity} reviews)
            </span>
          </div>

          <div className="space-y-3 border-t pt-5">
            <div className="flex gap-2">
              <span className="font-semibold">Brand:</span>

              <span className="text-gray-600">{product.brand?.name}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-semibold">Category:</span>

              <span className="text-gray-600">{product.category?.name}</span>
            </div>

            <div className="flex gap-2">
              <span className="font-semibold">Available:</span>

              <span className="text-gray-600">{product.quantity}</span>
            </div>
          </div>

          <button
            className="
          mt-8 
          bg-black 
          text-white 
          py-4 
          rounded-xl 
          text-lg 
          font-semibold
          hover:bg-gray-800
          transition
          "
          >
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
}
