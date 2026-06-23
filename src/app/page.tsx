import Image from "next/image";
import HeroSlider from "../components/slider/HeroSlider";
import Category from "./category/page";
// import SubCategoryPage from "./subcategory/page";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
<HeroSlider/>
<Category/>
{/* <SubCategoryPage/> */}

    </div>
  );
}
