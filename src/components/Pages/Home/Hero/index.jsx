"use client";

import { ArrowRight, Clock, Mail, MapPin, Phone, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <>
          <section id="home" className="relative h-screen min-h-[800px] flex items-center pt-20">
    <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("images/home/citizenship-lawyer-in-canada.jpg")' }}
        >
          {/* Deep blue/charcoal gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2530]/95 via-[#1A2530]/85 to-[#1A2530]/60"></div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-3xl lg:w-3/5">
            <div className="inline-block px-4 py-1.5 border border-[#C8102E]/40 bg-[#C8102E]/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-white font-medium tracking-wide text-sm flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#C8102E] mr-2 shadow-[0_0_8px_#C8102E]"></span>
                  Regulated Canadian Immigration Counsel
                </span>
              </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
              Gurna Law Corporation
            </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light max-w-2xl">
              Expert legal representation for Express Entry, Work Permits, Study Visas, and Family Sponsorships. We turn your Canadian dream into reality with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
                <Link
                  href="/contact"
                  className="bg-[#C8102E] hover:bg-[#A00D24] text-white px-8 py-4 rounded-sm font-medium text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-[#C8102E]/30 flex items-center justify-center group"
                >
                  Free Assessment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#practice-areas" 
                  className="bg-transparent border border-white text-white hover:bg-white hover:text-[#1A2530] px-8 py-4 rounded-sm font-medium text-lg transition-all flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>


          </div>

          {/* Right Contact Card inside Hero */}
            <div className="hidden lg:block lg:w-1/3 max-w-sm">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C8102E] to-[#A00D24]"></div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Immediate Legal Help</h3>
                <p className="text-gray-300 text-sm mb-6">Contact our office directly to speak with an immigration professional.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-[#C8102E] transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Call Us</p>
                      <a href="tel:+16042613171" className="text-white font-bold text-lg hover:text-[#C8102E] transition-colors">+1-604-261-3171</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-[#C8102E] transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Email Us</p>
                      <a href="mailto:info@gurnalaw.ca" className="text-white font-bold text-lg hover:text-[#C8102E] transition-colors break-all">info@gurnalaw.ca</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-[#C8102E] transition-colors">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Head Office</p>
                      <p className="text-white text-sm leading-relaxed">Serving Surrey, Vancouver,<br/>Abbotsford & Surrounding Areas</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <a href="#contact" className="block w-full text-center bg-white text-[#1A2530] font-bold py-3 rounded hover:bg-gray-100 transition-colors">
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
        </div>
        </div>
      </section>
      <section className="bg-white border-b border-gray-100 py-8 relative z-20 -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-lg shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="flex items-center space-x-4">
            <div className="bg-gray-50 p-3 rounded-full text-[#C8102E]">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-[#1A2530] text-lg">Fully Licensed</h4>
              <p className="text-gray-500 text-sm">Regulated Legal Counsel</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-gray-50 p-3 rounded-full text-[#C8102E]">
              <Star className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-[#1A2530] text-lg">High Success Rate</h4>
              <p className="text-gray-500 text-sm">Thousands of approvals</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-gray-50 p-3 rounded-full text-[#C8102E]">
              <Clock className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-[#1A2530] text-lg">Years of Experience</h4>
              <p className="text-gray-500 text-sm">Proven track record</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
