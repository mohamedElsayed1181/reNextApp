"use client";

import SpacificCategories from "@/src/components/SpacificCategories/SpacificCategories";
import { useParams } from "next/navigation";

export default function SpacificCategory() {


const { id } = useParams();


  return (
    <div>
      <SpacificCategories id={id}/>
    </div>
  );
}
