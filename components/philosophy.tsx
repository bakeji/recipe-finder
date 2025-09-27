import Image from "next/image"
export default function Philosophy(){

    const philosophys =[
        {heading:'Whole ingredients first.', details:'Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.'},
        {heading:'Flavor without compromise.', details:'Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.'},
        {heading:'Respect for time.', details:'Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.'},
        {heading:'Sustainable choices.', details:'Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.'}
    ]
    return(
        
        <div className="w-[90%] mx-auto flex gap-18 justify-between items-start py-12 max-lg:flex-col" >
            <h1 className=" text-[48px] w-2/5  font-[800] text-[#163A34] text-center max-lg:text-left"> Our food Philosophy</h1>

            <div className="flex flex-col gap-6  items-start justify-center w-3/5">
                {philosophys.map((reasons,id)=>(
                    <div key={id} className="flex gap-2 justify-center items-start" >
                        <Image className="mt-2" src='/icon-bullet-point.svg' width={32} height={32} alt="bullet point" />
                            <div>
                                <h5 className="text-[#163A34] font-[700] text-[24px] ">{reasons.heading}</h5>
                                <p className="text-[20px] font-[500] text-[#395852]" >{reasons.details}</p>
                            </div>
                    </div>
                ))}
            </div>
        </div>


    )
}