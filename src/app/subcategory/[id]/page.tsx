"use client";
import SpacificSubCategory from '@/src/components/SpacificSubCategory/SpacificSubCategory';
import { useParams } from 'next/navigation';

export default function SpacificSubCategoryPage() {
const { id} = useParams<{ id: string }>();

  return (
    <div>
      <SpacificSubCategory id={id}/>
    </div>
  )
}
