import Image from "next/image"
export default function WhyWeExist(){

    const reasons =[
        {heading:'Cut through the noise.', details:'The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.'},
        {heading:'Empower home kitchens.', details:'When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.'},
        {heading:'Make healthy look good.', details:'High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.'}
    ]
    return(
        <div className="border-b-1 border-[#E0E6E3]">
            <div className="w-[90%] mx-auto flex gap-18 justify-between items-start py-12 max-lg:flex-col " >
                <h1 className=" text-[48px] w-2/5 font-[800] text-[#163A34] text-center max-lg:text-left "> Why we exist </h1>

                <div className="flex flex-col w-3/5 gap-6 items-start justify-center" >
                    {reasons.map((reason, id)=>(
                    <div key={id} className="flex gap-2 justify-center items-start ">
                        <Image className="mt-2" src='/icon-bullet-point.svg' width={32} height={32} alt="bullet point" />
                        <div>
                            <h5 className="text-[#163A34] font-[700] text-[24px] ">{reason.heading}</h5>
                            <p className="text-[20px] font-[500] text-[#395852]" >{reason.details}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>

        </div>
    )
}