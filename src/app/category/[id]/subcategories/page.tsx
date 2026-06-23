
"use client";
import SubCategoriesCategory from '@/src/components/SubCategoriesCategory/SubCategoriesCategory'
import { useParams } from 'next/navigation';


export default function SubCategoriesCategoryPage() {

    const { id } = useParams();
  return (
    <div>
      <SubCategoriesCategory id={id}/>
    </div>
  )
}
