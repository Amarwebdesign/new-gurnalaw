import Image from "next/image";
import Link from "next/link";
import MarqueHeading from "@/components/InnerBanner/MarqueHeading";
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
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
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
                    <p className="text-blue text-sm font-semibold uppercase tracking-[0.18em]">Saravpreet Singh Gurna</p>
                    <h2 className="mt-4 text-3xl font-semibold text-[#1A2530] md:text-4xl">Who We Are</h2>
                    <p className="mt-6 text-base leading-8 text-slate-700">
                      Gurna Law Corporation is an esteemed name in the field of Canadian immigration and refugee law. At Gurna Law Corporation, under qualified barrister-level expertise, you can get lawyered up and avail yourself of the whole range of services to steer your application, be it first-time entry, study visa, work permit, permanent residency, an appeal to the IRB or judicial review by the Federal Court of Canada. At our core, we hold your trust in high regard and prioritize your well-being. As a rule, we make a steadfast commitment to refrain from offering false guarantees or pledges. Instead, we let our results speak for themselves: there are cases aplenty where we steered to success even those applicants who had lost all hope after rejections at multiple levels.
                    </p>
                    <div className="mt-10 items-center">
                        <Link
                          href="/contact"
                          className="inline-flex items-center rounded-full bg-[#C8102E] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#a00d24]"
                        >
                          Get A Free Estimate
                        </Link>
                    </div>                    
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
