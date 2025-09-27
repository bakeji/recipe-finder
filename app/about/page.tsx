import Cta from "@/components/cta-section";
import WhyWeExist from "@/components/exist";
import Philosophy from "@/components/philosophy";
import Image from "next/image";

export default function AboutPage(){
    return(
        <div className="my-10">
            <div className=" w-[90%] mx-auto flex gap-22 justify-between items-center max-lg:flex-col  ">
                <div className="w-[50%] max-lg:w-[100%] ">
                    <div className="bg-[#FE9F6B] rounded-[6px] px-[16px] py-[2px] w-fit mb-4 "><p className=" tex-center text-[#163A34] text-[20px] font-[700]  ">Our mission</p></div>
                    <h2 className="text-[#163A34] font-[800] text-[48px] mb-4 max-lg:text-[40px] ">Help more people cook nourishing meals, more often.</h2>
                    <p className="mb-3 text-[#395852] text-[20px] font-[500] ">Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious.</p>
                    <p className="mb-3 text-[#395852] text-[20px] font-[500] ">We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed shortcuts—just honest ingredients and straightforward steps.</p>
                </div>
                
                <div>
                    <Image src='/image-about-our-mission-large.webp' width={618} height={600} alt='a woman cutting vegetable' />
                </div>
            </div>

            <div className="border-t-1 border-b-1 border-[#E0E6E3] mt-12 ">
                <WhyWeExist />

                <Philosophy />

            </div>
            
            <div className="mt-12  w-[90%] mx-auto flex gap-22 justify-between items-center max-lg:flex-col max-lg:items-start max-lg:justify-center ">
                <div className="w-[50%] max-lg:w-full ">
                    <h2  className="text-[#163A34] font-[800] text-[48px] mb-4 "> Beyond the plate</h2>
                    <p className="text-[#395852] text-[20px] font-[500] mb-4 ">We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:</p>
                    <p className="text-[#395852] text-[20px] font-[500] mb-3">. Encourage family dinners and social cooking.</p>
                    <p className="text-[#395852] text-[20px] font-[500] mb-3">. Reduce reliance on single-use packaging and delivery waste.</p>
                    <p className="text-[#395852] text-[20px] font-[500] mb-3">. Spark curiosity about seasonal produce and local agriculture.</p>
                </div>
                
                <div>
                    <Image src='/image-about-beyond-the-plate-large.webp' width={618} height={600} alt='a woman cutting vegetable' />
                </div>
            </div>

            <div className="w-[90%] mx-auto ">
                <Cta />
            </div>
        </div>
    )
}