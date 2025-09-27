"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
type Recipes = {
        id: number;
        title: string;
        slug: string;
        image: {
            large: string;
            small: string;
        };
        overview: string;
        servings: number;
        prepMinutes: number;
        cookMinutes: number;
        ingredients: string[];
        instructions: string[];
    }


type RecipeProps ={
    data:Recipes[]
}

export default function RecipeList({data}:RecipeProps){
    const pathName = usePathname()

    const randomRecipes = data.sort(()=> Math.random()-0.5 ).slice(0, 3);
console.log(randomRecipes)
 const newData = pathName === '/recipes'? data : randomRecipes


    return(
        <div className="grid grid-cols-3  gap-4 max-md:flex max-md:flex-col max-md:gap-3  ">
            {newData.map((recipe)=>(
            <div key={recipe.id} className="bg-white  shadow-lg pt-1 pb-3 rounded-[10px] gap-[16px] border border-[#E0E6E3] flex flex-col items-start justify-center ">
                <div className="flex items-center justify-center w-full ">
                    <Image className="rounded-[10px] w-full h-auto" src={recipe.image.large} width={360} height={360} alt="food" /> 
                </div>
                <p className="text-[#163A34] text-[20px] px-2 text-start font-[700] truncate w-[95%]  ">{recipe.title}</p>
                <p className="text-[16px] font-[500] text-[#395852] px-2 text-start ">{recipe.overview}</p>

                <div className="grid-cols-2 max-lg:flex  max-lg:flex-col grid px-1 gap-1 justify-items-start max-md:grid-cols-3">
                    <div className="flex gap-2 items-center justify-center max-lg:justify-start">
                        <Image src='/icon-servings.svg' width={20} height={20} alt="search icon" />
                        <p className="text-[#163A34] font-[500] text-[16px]">Servings: {recipe.servings}  </p>
                    </div>

                    <div className="flex gap-2 items-center justify-center max-lg:justify-start">
                        <Image src='/icon-prep-time.svg' width={20} height={20} alt="search icon" />
                        <p className="text-[#163A34] font-[500] text-[16px]"> Prep: {recipe.prepMinutes} mins</p>
                    </div>

                    <div className="col-span-2 flex gap-2 items-center justify-center">
                        <Image src='/icon-cook-time.svg' width={20} height={20} alt="search icon" />
                        <p className="text-[#163A34] font-[500] text-[16px]">Cook: {recipe.cookMinutes} mins </p>
                    </div>
                </div>

               <div className="flex items-center w-[100%] justify-center max-lg:justify-start">
                 <div className="px-[32px] py-[16px] rounded-4xl w-[90%] text-center text-[16px] font-[700] text-white bg-[#163A34]"> <Link href={`recipes/${recipe.slug}`}> View Recipe</Link> </div>
               </div>
            </div>

            ))}
        </div>
    )
}