"use client";

import ProductDetails from "@/src/components/ProductDetails/ProductDetails";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
const param = useParams();

const id=param.id as string
  return (
    <div>
      <ProductDetails id={id}/>
    </div>
  )
}
