"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
type MobileProps={
  showMobileNavBtn:() => void;
}

export default function NavBar({showMobileNavBtn}: MobileProps){
    const headerLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/recipes", label: "Recipes" },
      ]
     
    const pathname = usePathname();
    return(
        <header className=" w-[100%] py-4 border-b font-nunito border-[#E0E6E3]" >
                    <div className="flex w-[90%] mx-auto items-center justify-between ">
                      <div>
                        <Link href="/"><Image src='/Logo.png' width={260} height={40} alt="logo" /></Link>
                      </div>
        
                 <nav className='max-md:hidden' >
                    <ul className="flex items-center gap-5 justify-center">
                      {headerLinks.map((link) => (   
                      <li className={`text-[18px] font-[600] text-[#163A34] ${pathname===link.href? 'underline underline-offset-5 decoration-4 decoration-[#FE9F6B]':''}`} key={link.href}><Link href={link.href}>{link.label}</Link></li>
                      ))}
                    </ul>
                 </nav>
        
                <Link href='/recipes' className="max-md:hidden py-3 text-[20px] font-[700] px-4 box-content bg-[#163A34] text-white rounded-[10px] ">Browse recipes</Link>
                <button onClick={showMobileNavBtn} className="md:hidden "><Image src='/hamburger.png' width={40} height={40} alt="hamburger-icon" /></button>

                    </div>
                </header>

    )
}