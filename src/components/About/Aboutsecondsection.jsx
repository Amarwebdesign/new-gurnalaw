import Image from "next/image";
import Container from "@/components/Layout/Container";
import Btn from "@/components/Layout/Btns/Btn";
import BtnContact from "@/components/Layout/Btns/BtnContact";
import SectionHeading from "@/components/Layout/SectionHeading";
import ImageAnimated from "@/components/Layout/ImageAnimated";
import ImageAnimated2 from "@/components/Layout/ImageAnimated2";
import React from 'react';
export default function Aboutsecondsection() {
    const Year=new Date();
    const CurrentYear = Year.getFullYear();
    const experience=CurrentYear-2011;
  return (
    <>
<section className="section law-about-area">
        <Container>
            <div className="lg:grid grid-cols-2 gap-[100px] items-center">
               

                <div className="mt-5 lg:mt-0">
                    <SectionHeading
                    minititlecolor="text-blue" minititle="Saravpreet Singh Gurna"
                    title="How We Work"
                    description="Under the leadership of barrister and solicitor, Saravpreet Singh, Gurna Law Corporation has handled cases across a wide spectrum of categories, seeing them through the entire gamut of processes mandated by the IRCC (immigration, refugees and citizenship, Canada). what lends a unique touch to Saravpreet Singh’s skill-set is a vast body of work spanning continents. During a very productive decade of legal practice in the High Courts and the Supreme Court of India, he accomplished success in civil and criminal matters, particularly in the northern belt of Punjab, Haryana, Chandigarh and Delhi—areas known for contributing significant numbers of skilled immigrants to Canada year after year. This cross-cultural oeuvre and multi-systemic understanding makes Singh competent across territories and jurisdictions. He has hands-on experience of dealing with start-up visas, intra-company transfers, owner-operator work permits, LMIA application processing, and many more business and corporate immigration matters. His passion for court work has motivated him to take on complicated judicial review matters, with a high degree of success. Having been a star on the academic firmament during his years at the internationally prestigious Delhi School of Economics, Saravpreet is an accomplished writer and award-winning speaker on the debating circuit, skills that serve him well to this day as they shine through his legal drafting and case presentation in court."
                    />
                    <div className="mt-10 items-center">
                        <BtnContact link="https://gurnalaw.vercel.app/contact" title="Get A Free Estimate"/>
                    </div>                    
                </div>
                <div className=" relative">
                <img className="h-auto w-full  rounded-3xl" src="/images/about second section.jpg" alt=""/>  
                               
                </div>
            </div>
        </Container>
    </section>
    </>
  );
}
