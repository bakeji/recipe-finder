import Cta from '@/components/cta-section';
import Image from 'next/image';
import Link from 'next/link';
export default function HomePage(){
const features=[
    {
        icon: '/Feature Icon.svg',
        title: 'Whole-food recipes',
        description: 'Each dish uses everyday, unprocessed ingredients.'
    },
    
    {
        icon: '/Flash.svg',
        title: 'Minimum fuss',
        description: 'All recipes are designed to make eating healthy quick and easy.'
    },

    {
        icon: '/Search menu hamburger.svg',
        title: 'Search in seconds',
        description: 'Filter by name or ingredient and jump straight to the recipe you need.'
    }
]

    return(
        <div className='w-[90%] mx-auto my-10 '>
            <div className='flex  flex-col items-center justify-center gap-10 max-md:items-start '>
                <div className='font-nunito '>
                    <h1 className='text-[72px]  text-center font-[800] text-[#163A34] max-md:text-[50px] max-md:text-start '><span>Healthy</span> meals, zero fuss</h1>
                    <div className='w-[69%] mx-auto max-md:w-full'><p className='text-[20px] text-center font-[500] text-[#163A34] max-md:text-start '>Discover eight quick, whole-food recipes that you can cook tonight -no processed junk, no guesswork.</p> </div>
                    <div className='px-[32px] py-[16px] rounded-[10px] w-[224px] text-[20px] font-[700] mx-auto max-md:mx-0 my-6 text-white bg-[#163A34]'><Link href='/recipes'>Start exploring</Link></div>
                </div>
                <div className='w-[100%] relative rounded-[12px] border-4 border-white h-[701px] '>
                    <Image className='rounded-[12px] object-cover ' src="/hero-img.png" fill alt="Healthy meals" />
                </div>
            </div>

            <div className='mx-auto mt-10' >
                <h2 className='text-center text-[48px] font-[800] text-[#163A34] max-md:text-start'>What you'll get</h2>
                <div className='flex items-center justify-center w-full gap-4 mt-10 max-md:flex-col max-md:items-start '>
                    {features.map((feature, index) => (
                    <div key={index} className='flex-1/3 items-start flex-col justify-center gap-5 max-md:flex-1  ' >
                      <div className='w-[70px] h-[70px] rounded-[12px] border-[#E9EDE8] border bg-white flex items-center justify-center '>
                        <Image src={feature.icon} width={40} height={40} alt="icon 1" />
                      </div>
                       <h3 className='text-[32px] mt-2 font-[700] text-[#163A34] '>{feature.title}</h3>
                        <p className='text-[#395852] font-[500] mt-5 w-[74%] max-md:w-full ' >{feature.description}</p>
                    </div>
                    ))}
                </div>
            </div>

            <div className='mt-23 flex items-center justify-center gap-7 max-md:flex-col'>
                <div className='w-[50%] max-md:w-full '>
                    <h2 className='text-[48px] font-[800] text-[#163A34] mb-3 '>Built for real Life</h2>
                    <p className='text-[#395852] font-[500] text-[20px] mb-3 '>Cooking shouldn’t be complicated. These recipes come in under <span>30 minutes</span> of active time, fit busy schedules, and taste good enough to repeat. </p>
                    <p className='text-[#395852] font-[500] text-[20px] '>Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.</p>
                </div>

                <div>
                    <Image src="/real-img.png" width={635} height={450} alt="Healthy meals" />
                </div>
            </div>
            
           <Cta />
        </div>
    )
}