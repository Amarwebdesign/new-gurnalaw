"use client";

import Link from "next/link";
import React, { useEffect } from 'react';
import Navigation from "@/components/Layout/Navigation/Index";
import Logo from "@/components/Layout/Logo/Logo";
import BtnContact from "@/components/Layout/Btns/BtnContact";
import Btn from "@/components/Layout/Btns/Btn";
import LogoWhite from "@/components/Layout/Logo/LogoWhite";
import ContainerNews from "@/components/Layout/ContainerNews";
import MobileCta from "@/components/Layout/MobileCta";
import SidebarNav from "@/components/Layout/Navigation/SidebarNav";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function HeaderNews() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>

    {/* <header className="">
        <ContainerNews>
            <div className="flex items-center justify-between py-3">
                <div className="w-[200px] md:w-[250px] leading-[0]">
                    <Link title="Gurna Law Coroporation - Immigration Lawyer In Surrey" href="/">
                        <Logo />
                    </Link>
                </div>
                <div className="main-menu hidden xl:block">
                <Navigation/>
                </div>
                <div className="ml-0 xl:hidden">
                        <div className="mobile-nav-btn"><span></span><span></span></div>
                    </div>
                
            </div>
        </ContainerNews>
        <div className="NewsNavigation py-2 border-y-[1px] border-y-[#f0f0f0]">
            <ContainerNews>
                <ul className="flex justify-between items-center gap-5">
                    <li><Link href="#" className="text-blue hover:text-black">Canada</Link></li>
                    <li><Link href="#" className="text-blue hover:text-black">Citizenship</Link></li>
                    <li><Link href="#" className="text-blue hover:text-black">Express Entry</Link></li>
                    <li><Link href="#" className="text-blue hover:text-black">Family Sponsorship</Link></li>
                    <li><Link href="#" className="text-blue hover:text-black">Life in Canada</Link></li>
                    <li><Link href="#" className="text-blue hover:text-black">Provinces</Link></li>
                    <li><Link href="#" className="text-blue hover:text-black">Study</Link></li>
                    <li><Link href="#" className="text-blue hover:text-black">Visit</Link></li>
                    <li><Link href="#" className="text-blue hover:text-black">Work</Link></li>
                </ul>
            </ContainerNews>
        </div>
    </header> */}
    <SidebarNav/>
    <MobileCta/>
    </>
  );
}
