'use client'
import RecipeList from "@/components/recipe-list"
import Image from "next/image"
import data from "@/data.json"
import { useState } from "react"
import Link from "next/link"

export default function Recipes(){
    
    const prepTime= []
    const cookTime =[]
    
        for(let i=0; i<=20; i+=5){
            prepTime.push(i)   
        }
        for(let i=0; i<=20; i++){
            cookTime.push(i)
        }
    const [inputData, setInputData] = useState({
        search:'',
        prepTime:'',
        cookTime:''
    })
        
        function handleChange(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>){
            const {name, value } =e.target
            setInputData((prev)=>({
                ...prev,
                [name]:value
            }))
        }

        const filteredRecipes =data.filter((recipe)=>{
            const searchTitle =  recipe.title.toLowerCase().includes(inputData.search.toLowerCase())
            const searchIngredients = recipe.ingredients.some((ingrd)=>ingrd.toLowerCase().includes(inputData.search.toLowerCase()))
            const searchedRecipe = searchTitle || searchIngredients
            const filterPrepTime = inputData.prepTime ===""|| recipe.prepMinutes === Number(inputData.prepTime)
            const filterCookTime = inputData.cookTime ===""|| recipe.cookMinutes === Number(inputData.cookTime)
            return searchedRecipe && filterCookTime && filterPrepTime
        })
            const finalData = inputData.search !=="" || inputData.cookTime !=="" || inputData.prepTime !=="" ? 
                                filteredRecipes : data

                                console.log(finalData)
    return(
        <div className="w-[90%] mx-auto my-10 ">
            <div>
                <h1 className="text-[48px] font-[800] text-[#163A34] mb-4 text-center max-md:text-start ">Explore our simple, healthy recipes</h1>
                <p className="text-center text-[20px] font-[500] text-[#395852] w-[60%] mx-auto max-md:text-start max-md:w-full" >Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.</p>
            </div>

            <div className="mt-10 mb-10 flex items-center justify-between max-sm:flex-col ">
                <div className="flex gap-4 items-center justify-center max-sm:flex-col max-sm:w-full ">
                  
                   <div className="max-sm:bg-white max-sm:w-full max-sm:flex max-sm:items-center max-sm:justify-center max-sm:border max-sm:border-[#E0E6E3]   ">
                        <select className=" bg-white py-[10px] max-sm:text-center px-[16px] outline-0 rounded-[10px] border border-[#E0E6E3] max-sm:border-none text-[#163A34] text-[18px]font-[800] " 
                            name="prepTime" 
                            id="prepTime"
                            value={inputData.prepTime}
                            onChange={handleChange}
                            >
                                <option   value="">Max Prep Time</option>
                                {prepTime.map((time, index)=>(
                                    <option  key={index} value={time}>{time} minutes</option>
                                ))}
                         </select>
                    </div>
                    
                    <div className="max-sm:bg-white max-sm:w-full max-sm:flex max-sm:items-center max-sm:justify-center max-sm:border max-sm:border-[#E0E6E3]   ">
                        <select  className=" bg-white py-[10px] max-sm:text-center px-[16px] outline-0 rounded-[10px] border border-[#E0E6E3] text-[#163A34] max-sm:border-none text-[18px]font-[800]" 
                            name="cookTime" 
                            id="cookTime" 
                            value={inputData.cookTime}
                            onChange={handleChange}
                            >
                                <option  value=''>Max Cook Time</option>
                            {cookTime.map((time,index)=>(
                                <option key={index} value={time}>{time} minutes</option>
                            ))}
                        </select>
                    </div>
                </div>
                
               <div className="max-sm:mt-4 max-sm:w-full">
                    <div className="flex items-center gap-2 px-[16px] py-[10px] bg-white border rounded-[10px] border-[#E0E6E3]" >
                        <Image src='icon-search.svg' width={20} height={20} alt="search icon" />
                        <input className="outline-0 placeholder:text-xs font-[600] "
                        type="search" 
                        name="search" 
                        id="search"
                        value={inputData.search}
                        onChange={handleChange} 
                        placeholder="Search by name or ingredient…" />
                    </div>
               </div>
            </div>

                {finalData.length ===0 &&  
                    <div  className='W-[100%] flex flex-col gap-2 items-center justify-center '>
                        <h1 className='text-[48px] text-center font-[800] text-[#163A34] max-md:text-[35px]  '> your search and filter did not return any recipe</h1>
                       
                    </div> 
                }


            <RecipeList data={finalData} />


        </div>
    )
}