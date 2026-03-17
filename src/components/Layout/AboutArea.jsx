"use client";

import Image from "next/image";
import Container from "@/components/Layout/Container";
import Btn from "@/components/Layout/Btns/Btn";
import BtnContact from "@/components/Layout/Btns/BtnContact";
import SectionHeading from "@/components/Layout/SectionHeading";
import MarqueHeading from "@/components/Layout/MarqueHeading";
import ImageAnimated from "@/components/Layout/ImageAnimated";
import ImageAnimated2 from "@/components/Layout/ImageAnimated2";
import React from 'react';
export default function ContentLeftImage() {
    const Year=new Date();
    const CurrentYear = Year.getFullYear();
    const experience=CurrentYear-2011;
  return (
    <>
    <MarqueHeading
    name="About us"
    headingClass="about"
    />
    <section className="section law-about-area">
        <Container>
            <div className="lg:grid grid-cols-2 gap-[100px] items-center">
                <div className=" relative">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="col-md-6">
                            <div className="law-about-left-title mt-[60px] mb-[20px] bg-blue text-white flex items-center gap-3">
                                <div className="flex items-center w-16 h-16">
                                    <svg className="w-full h-auto" id="Layer_1" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path fill="#fff" d="m19 39-8 12 20-6.67v17.67h2v-17.67l20 6.67-8-12 13-10.61-4.95-.7 3.54-7.78-7.78 3.53-.71-4.95-9.1 10.51 2-22-5 5-4-10-4 10-5-5 2 22-9.1-10.51-.71 4.95-7.78-3.53 3.54 7.78-4.95.7z"/></svg>
                                </div>
                                <div className="font-bold text-lg">Expertise in Immigration Law</div>
                            </div>
                            <div className="">
                                <ImageAnimated2
                                    width="285"
                                    height="440"
                                    src="/images/home/about-img.webp"
                                    alt="Immigration Lawyer in Surry"
                                    classname="rounded-md"
                                />
                            </div>
                        </div>
                        <div className="">
                            <div className="h-[450px]">
                                <ImageAnimated
                                    width="275"
                                    height="450"
                                    src="/images/home/saravpreet-singh-gurna-law-canada-immigration-lawyer-in-surrey.webp"
                                    alt="Immigration Lawyer in Surry"
                                    classname="rounded-md"
                                />
                            </div>
                            <div className="experience-circle w-[150px] h-[150px] md:w-[250px] md:h-[250px] relative">
                                <div className="animated-cirlce-img">
                                    <Image src="/images/banner/experience-circle.svg" alt="Immigration Lawyer In Surrey" width={250} height={250} className="w-full" />
                                </div>
                                <div className="text-center font-bold h-[150px] md:h-[250px] flex items-center relative">
                                    <div className="text-center w-full">
                                        <div className="text-[20px] md:text-[70px] leading-tight text-yellow">{experience}+</div>
                                        <div className="text-[20px]">Years Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>

                <div className="mt-5 lg:mt-0">
                    <SectionHeading
                    minititlecolor="text-blue" minititle="Saravpreet Singh Gurna"
                    title="Immigration Lawyer In Canada"
                    description="Gurna Law Corporation is an esteemed name in the field of Canadian immigration and refugee law. At Gurna Law Corporation, under qualified barrister-level expertise, you can get lawyered up and avail yourself of the whole range of services to steer your application, be it first-time entry, study visa, work permit, permanent residency, an appeal or review by the Federal Court of Canada."
                    />
                    <div className="mt-10 grid grid-cols-2 gap-3 items-center">
                        <Btn link="/practice-areas" title="Our Services" btnclass="btn-secondary"/>
                        <BtnContact link="/contact" title="Contact us"/>
                    </div>                    
                </div>
            </div>
        </Container>
    </section>
    </>
  );
}
