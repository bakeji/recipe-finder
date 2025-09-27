'use client'
import { useState } from "react";
import MobileNav from "./mobilenav";
import NavBar from "./navbar";



export default function Navs(){
const [showMobileNav, setShowMobileNav] = useState(false)

function showMobileNavBtn(){
    setShowMobileNav(prev => !prev)
}


    return(
        <div>
            <NavBar showMobileNavBtn={showMobileNavBtn} />
            <MobileNav setShowMobileNav={setShowMobileNav} showMobileNav = {showMobileNav} />
        </div>
    )
}