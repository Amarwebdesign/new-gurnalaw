import Image from "next/image";
import Link from "next/link";
import React from 'react';
export default function Aboutsecondsection() {
    const Year=new Date();
    const CurrentYear = Year.getFullYear();
    const experience=CurrentYear-2011;
  return (
    <>
<section className="section law-about-area">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="lg:grid grid-cols-2 gap-[100px] items-center">
               

                <div className="mt-5 lg:mt-0">
                    <p className="text-blue text-sm font-semibold uppercase tracking-[0.18em]">Saravpreet Singh Gurna</p>
                    <h2 className="mt-4 text-3xl font-semibold text-[#1A2530] md:text-4xl">How We Work</h2>
                    <p className="mt-6 text-base leading-8 text-slate-700">
                      Under the leadership of barrister and solicitor, Saravpreet Singh, Gurna Law Corporation has handled cases across a wide spectrum of categories, seeing them through the entire gamut of processes mandated by the IRCC (immigration, refugees and citizenship, Canada). what lends a unique touch to Saravpreet Singh’s skill-set is a vast body of work spanning continents. During a very productive decade of legal practice in the High Courts and the Supreme Court of India, he accomplished success in civil and criminal matters, particularly in the northern belt of Punjab, Haryana, Chandigarh and Delhi—areas known for contributing significant numbers of skilled immigrants to Canada year after year. This cross-cultural oeuvre and multi-systemic understanding makes Singh competent across territories and jurisdictions. He has hands-on experience of dealing with start-up visas, intra-company transfers, owner-operator work permits, LMIA application processing, and many more business and corporate immigration matters. His passion for court work has motivated him to take on complicated judicial review matters, with a high degree of success. Having been a star on the academic firmament during his years at the internationally prestigious Delhi School of Economics, Saravpreet is an accomplished writer and award-winning speaker on the debating circuit, skills that serve him well to this day as they shine through his legal drafting and case presentation in court.
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
                <div className=" relative">
                <img className="h-auto w-full  rounded-3xl" src="/images/about second section.jpg" alt=""/>  
                               
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
