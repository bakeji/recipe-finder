import Image from "next/image";
import Link from "next/link";
export default function Cta(){
    return(
        <div className='w-[100%] flex items-center justify-center mt-24 bg-[#E9EDE8] rounded-[16px] max-sm:py-8  '>
        
        <div className="max-md:w-[20%] max-md:mt-[50%] max-sm:hidden" >
            <Image src='/illustration1.png' width={315} height={390} alt='illustration' />
        </div>
        <div className='W-[100%] flex flex-col gap-2 items-center justify-center ' >
            <h2 className='text-[48px] text-center font-[800] text-[#163A34] max-md:text-[35px]  '>Ready to cook smarter?</h2>
            <p className='text-[#395852] text-[20px] font-[500] text-center ' >Hit the button, pick a recipe, and get dinner on the table—fast.</p>
            <Link href='/recipes' className='bg-[#163A34] py-[16px] px-[24px] text-white text-[18px] font-[700] rounded-[10px] '>Browse recipes</Link>
        </div>

        <div className="max-md:w-[20%] max-md:mb-[50%] max-sm:hidden">
            <Image src='/illustration2.png' width={315} height={390} alt='illustration' />
        </div>
    </div>
    )
}