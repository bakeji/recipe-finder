import RecipeList from "@/components/recipe-list";
import data from "@/data.json"
import Image from "next/image"
import Link from "next/link";

type RecipeProps= {
params: Promise<{slug:string}>;
}
export default async function Recipe({params}:RecipeProps){
    const {slug}= await params
    const recipeDetails = data.find((recipes)=> recipes.slug === slug)
   

    if(!recipeDetails){
        return;
    }


    return(
        <div className="my-10 ">
            <div className='w-[90%] mx-auto mb-4  ' >
                <p className='text-[#163A34] text-[18px] font-[600]'><Link className="text-[#163A34] opacity-[0.6]" href='/recipes'>Recipes / </Link> {recipeDetails.title} </p>
            </div>

            <div className="border-b border-[#E0E6E3] pb-7">
                <div className="w-[90%] mx-auto flex gap-4 items-start justify-center max-md:flex-col ">
                    <div className="flex-1/2 max-md:w-full">
                        <Image className="rounded-[10px] w-full h-auto" src={recipeDetails.image.large} width={580} height={580} alt="logo" />
                    </div>

                    <div className="flex-1/2 flex flex-col gap-4 max-md:w-full  " >
                        <h1 className="text-[#163A34] font-[800] text-[48px]">{recipeDetails?.title}</h1>
                        <p className="text-[#395852] font-[500] text-[20px]">{recipeDetails?.overview}</p>

                        <div className=" flex  gap-6 max-sm:grid max-sm:grid-cols-2 max-sm:gap-2 max-sm:justify-items-start ">
                            <div className="flex gap-2 items-center justify-start">
                                <Image src='/icon-servings.svg' width={20} height={20} alt="search icon" />
                                <p className="text-[#163A34] font-[500] text-[16px]">Servings: {recipeDetails?.servings}</p>
                            </div>

                            <div className="flex gap-2 items-center justify-center">
                                <Image src='/icon-prep-time.svg' width={20} height={20} alt="search icon" />
                                <p className="text-[#163A34] font-[500] text-[16px]">Prep: {recipeDetails?.prepMinutes} mins</p>
                            </div>

                            <div className="flex gap-2 items-center justify-center col-span-2 ">
                                <Image src='/icon-cook-time.svg' width={20} height={20} alt="search icon" />
                                <p className="text-[#163A34] font-[500] text-[16px]">Cook: {recipeDetails?.cookMinutes} mins </p>
                            </div>

                        </div>

                        <p className="text-[#163A34] text-[24px] font-[700]">Ingredients:</p>
                        <div>
                            {recipeDetails.ingredients.map((ingredient, index)=>(
                            <div key={index} className="flex items-center gap-2 " >
                                <Image className="mt-2" src='/icon-bullet-point.svg' width={32} height={32} alt="bullet point" />
                                <p className='text-[#395852] text-[20px] font-[500]'>{ingredient} </p>
                            </div>
                            ))}
                        </div>

                        <p className="text-[#163A34] text-[24px] font-[700]">Instructions:</p>
                        <div>
                            {recipeDetails.instructions.map((instruction, index)=>(
                            <div key={index} className="flex items-center gap-2 " >
                                <Image className="mt-2" src='/icon-bullet-point.svg' width={32} height={32} alt="bullet point" />
                                <p className='text-[#395852] text-[20px] font-[500]'>{instruction} </p>
                            </div>
                            ))}
                        </div>

                    </div>

                </div>

            </div>

           <div className="w-[90%] mx-auto mt-8">
                <p className="text-[#163A34] font-[700] text-[32px] mb-8" >More recipes</p>
                <RecipeList data={data} />
             </div>

        </div>
    )
}