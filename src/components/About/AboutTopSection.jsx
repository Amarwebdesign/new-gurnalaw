import Image from "next/image";
import Container from "@/components/Layout/Container";
import Btn from "@/components/Layout/Btns/Btn";
import BtnContact from "@/components/Layout/Btns/BtnContact";
import SectionHeading from "@/components/Layout/SectionHeading";
import MarqueHeading from "@/components/Layout/MarqueHeading";
import ImageAnimated from "@/components/Layout/ImageAnimated";
import ImageAnimated2 from "@/components/Layout/ImageAnimated2";
import React from 'react';
export default function AboutTopSection() {
    const Year=new Date();
    const CurrentYear = Year.getFullYear();
    const experience=CurrentYear-2011;
  return (
    <>
    <MarqueHeading
    name="About us"
    headingClass="about"
    />
    <section className="section law-about-area bg-[#f2f4ff]">
        <Container>
            <div className="lg:grid grid-cols-2 gap-[100px] items-center">
                <div className=" relative">
                    
                 <div className=" relative">
                <img className="h-auto w-full " src="/images/cta.jpeg" alt=""/>  
                <div className="col-md-12">
                            <div className="experience-circle w-[150px] h-[150px] md:w-[250px] md:h-[250px] relative">
                                <div className="animated-cirlce-img">
                                <Image src="/images/banner/experience-circle.svg" alt="Immigration Lawyer In Surrey" width={250} height={250} className="w-full" />
                                </div>
                                <div className="text-center font-bold h-[150px] md:h-[250px] flex items-center relative pt-3.5	">
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
                    title="Who We Are"
                    description="Gurna Law Corporation is an esteemed name in the field of Canadian immigration and refugee law. At Gurna Law Corporation, under qualified barrister-level expertise, you can get lawyered up and avail yourself of the whole range of services to steer your application, be it first-time entry, study visa, work permit, permanent residency, an appeal to the IRB or judicial review by the Federal Court of Canada. At our core, we hold your trust in high regard and prioritize your well-being. As a rule, we make a steadfast commitment to refrain from offering false guarantees or pledges. Instead, we let our results speak for themselves: there are cases aplenty where we steered to success even those applicants who had lost all hope after rejections at multiple levels."
                    />
                    <div className="mt-10 items-center">
                        <BtnContact link="https://gurnalaw.vercel.app/contact" title="Get A Free Estimate"/>
                    </div>                    
                </div>
            </div>
        </Container>
    </section>
    </>
  );
}
