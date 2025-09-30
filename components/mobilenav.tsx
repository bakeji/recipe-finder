"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
type MobileProps={
    showMobileNav: boolean,
    setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function MobileNav({showMobileNav, setShowMobileNav}:MobileProps){
     const headerLinks = [
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/recipes", label: "Recipes" },
          ]
        const pathname = usePathname();

    return(
        <div className={`w-[80%] mt-5 mx-auto p-3 bg-white ${showMobileNav? "":"hidden"} ` }>
            <nav className='' >
                <ul className="flex flex-col items-start gap-5  justify-center text-start w-[80%]">
                    {headerLinks.map((link) => (   
                    <li className={`text-[18px] font-[600] text-[#163A34] text-start ${pathname===link.href? 'underline underline-offset-5 decoration-4 decoration-[#FE9F6B]':''}`} key={link.href}><Link onClick={()=>{setShowMobileNav(false)}} href={link.href}>{link.label}</Link></li>
                    ))}
                </ul>
             </nav>    

          <div className="w-[100%] flex items-center justify-center mt-5 ">
          <Link onClick={()=>{setShowMobileNav(false)}} href='/recipes' className="text-[20px] py-3 w-full text-center font-[700] px-4 box-content bg-[#163A34] text-white rounded-[10px] ">Browse recipes</Link>
        </div>    
                

        </div>
    )
}