"use client";

import Image from "next/image";
import Container from "@/components/Layout/Container";
import Btn from "@/components/Layout/Btns/Btn";
import BtnContact from "@/components/Layout/Btns/BtnContact";
import SectionHeading from "@/components/Layout/SectionHeading";
import ImageAnimated from "@/components/Layout/ImageAnimated";
import ImageAnimated2 from "@/components/Layout/ImageAnimated2";
import AboutArea from "@/components/Layout/AboutArea";
import React from 'react';
export default function Layer() {
    const Year=new Date();
    const CurrentYear = Year.getFullYear();
    const experience=CurrentYear-2011;
  return (
    <>
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
                                    width="275"
                                    height="440"
                                    src="/images/about-img.webp"
                                    alt="Best Immigration Lawyer in Surrey"
                                    classname="rounded-md"
                                />
                            </div>
                        </div>
                        <div className="">
                            <div className="h-[450px]">
                                <ImageAnimated
                                    width="275"
                                    height="450"
                                    src="/images/immgration.png"
                                    alt="Immigration appeal lawyer in Surrey
                                    "
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
                    minititlecolor="text-yellow" minititle="Gurna Law Corporation
                    "
                    title="Empower Your Canadian Dream With Our Immigration Services."
                    description="As a land of opportunity, Canada is a popular destination for many seeking to start a new life. However, the immigration process can be challenging, with many rules and regulations to navigate, even the slightest mistake can negatively impact your application. Fortunately, hiring an experienced immigration lawyer in Canada can make all the difference. As a law firm based out of Surrey, we are well-versed in the complexities of immigration law and can provide the guidance and support you need to achieve your goals. With our help, you can emigrate from any country to Canada, without stress or hassle. we have over ten years of international litigation experience to draw from."
                    />
                    <div className="mt-10 grid grid-cols-2 gap-3 items-center">
                        <Btn link="https://gurnalaw.ca/bc-pnp-points-calculator-canada" title="BG PNP Calculator" btnclass="btn-secondary"/>
                        <BtnContact link="https://gurnalaw.ca/contact" title="Get A Free Estimate"/>
                    </div>                    
                </div>
            </div>
        </Container>
    </section>
    </>
  );
}
