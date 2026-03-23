"use client";

import { CheckCircle, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
        const startYear = 2009;
        const currentYear = new Date().getFullYear();
        const experience = currentYear - startYear;
  return (
    <>
    <section id="about" className="py-24 bg-[#F8F9FA] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Image Collage Side */}
            <div className="relative h-[500px] lg:h-[650px] w-full mt-10 lg:mt-0">
              {/* Decorative Background Element */}
              <div className="absolute top-10 right-10 w-3/4 h-3/4 bg-[#C8102E]/10 rounded-2xl -z-10"></div>
              
              {/* Main Background Image */}
              <Image 
                src="/images/about-img.jpeg" 
                alt="Gurna Law Office" 
                  width={1000}
                  height={1000}
                className="absolute top-0 left-0 w-4/5 h-[80%] object-cover rounded-xl shadow-2xl"
              />
              
              {/* Overlapping Lawyer Portrait */}
              <div className="absolute bottom-0 right-0 w-3/5 h-[70%] z-10">
                <Image 
                  src="/images/home/saravpreet-singh-gurna-law-canada-immigration-lawyer-in-surrey.webp" 
                  alt="Saravpreet Singh - Immigration Lawyer" 
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-xl shadow-2xl border-8 border-[#F8F9FA]"
                />
                {/* Name Tag */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 pr-8 rounded-lg shadow-xl border-l-4 border-[#C8102E]">
                  <p className="font-bold text-[#1A2530] text-lg">Saravpreet Singh</p>
                  <p className="text-sm text-[#C8102E] font-medium uppercase tracking-wider">{experience}+ Years of Experience</p>
                   <p className="text-sm text-gray-400 mt-1">Regulated Canadian
                  </p>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="relative z-20">
              <h3 className="text-[#C8102E] uppercase tracking-widest font-semibold text-sm mb-3">About Gurna Law</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A2530] mb-6 leading-tight">
                Dedicated to Your <br/>Canadian Dream.
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                At Gurna Law, immigration to Canada is treated with the seriousness and precision it demands. Recognizing that each case represents a life-changing decision, Gurna Law is committed to delivering strategic, results-driven legal solutions. Under the leadership of <strong>Saravpreet Singh</strong>, the firm addresses complex immigration matters with unwavering integrity, transparency, and legal expertise.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Gurna Law offers tailored legal representation designed to maximize the likelihood of success in every application. Rather than relying on standardized approaches, the firm develops well-structured legal strategies aligned with each client’s specific circumstances. Every case is handled with diligence, professionalism, and a clear focus on achieving favorable outcomes.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Direct access to specialized legal counsel', 'Transparent strategies without false promises', 'Expertise in complex appeals & refusals', 'Multilingual support available'].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="text-[#C8102E] w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-[#1A2530] font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="contact" className="inline-flex items-center bg-[#1A2530] text-white px-8 py-4 rounded font-bold hover:bg-[#2A3B4C] transition-colors group shadow-lg">
                Schedule an Assessment
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
