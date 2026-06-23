"use client";
import SingleBrand from "@/src/components/SingleBrand/SingleBrand";
import { useParams } from "next/navigation";

export default function SingleBrandPage() {
  const params = useParams();

  const id = params.id as string;
  return (
    <div>
      <SingleBrand id={id} />
    </div>
  );
}
