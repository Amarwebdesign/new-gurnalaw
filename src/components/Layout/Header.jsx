"use client";

import Link from "next/link";
import React, { useEffect } from 'react';
import { AllMainJS } from "@/components/js/AllMainJS";
import Navigation from "@/components/Layout/Navigation/Index";
import Logo from "@/components/Layout/Logo/Logo";
import BtnContact from "@/components/Layout/Btns/BtnContact";
import Btn from "@/components/Layout/Btns/Btn";
import LogoWhite from "@/components/Layout/Logo/LogoWhite";
import Container from "@/components/Layout/Container";
import SidebarNav from "@/components/Layout/Navigation/SidebarNav";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRef } from "react";
export default function Header() {
    useEffect(() => {
        AOS.init();
        AllMainJS(); 
      }, []);
      const container = useRef();
  return (
    <>

    <header className="header group">
        <Container>
            <div className="flex items-center justify-between py-3">
                <div className="w-[200px] md:w-[250px] leading-[0] group-[.header-fix]:md:w-[200px]">
                    
                <Link title="Gurna Law Coroporation - Immigration Lawyer In Surrey" href="/">
                        <LogoWhite />

                        <Logo />
                    </Link>
                </div>
                <div className="main-menu hidden xl:block">
                <Navigation/>
                </div>
                <div className="ml-0 md:flex items-center gap-5">
                    <div className="hidden md:flex">
                    <Btn link="bc-pnp-points-calculator-canada" title="BG PNP Calculator" btnclass="btn-black bc-pnp-calculator-btn" />
                       
                    </div>
                    <div className="hidden xl:flex">
                    <BtnContact link="/contact" title="
 Book a consultation" />
                    </div>
                    <div className="ml-0 xl:hidden">
                        <div className="mobile-nav-btn"><span></span><span></span></div>
                    </div>
                </div>
                
            </div>
        </Container>
    </header>
    <SidebarNav/>
   
    </>
  );
}
