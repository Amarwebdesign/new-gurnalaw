"use client";

import { Globe, GraduationCap, Users } from "lucide-react";

  const expertiseServices = [
    {
      title: "Express Entry",
      description: "Fast-track your Canadian permanent residency through the comprehensive ranking system.",
      icon: <Globe className="w-8 h-8 transition-colors" />
    },
    {
      title: "Family Sponsorship",
      description: "Reunite with your loved ones in Canada. We handle spousal, parent, and child sponsorships.",
      icon: <Users className="w-8 h-8 transition-colors" />
    },
    {
      title: "Study Permits",
      description: "Secure your future by studying in Canada's world-class educational institutions.",
      icon: <GraduationCap className="w-8 h-8 transition-colors" />
    }
  ];
export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-[#C8102E] uppercase tracking-widest font-bold text-sm mb-4">Our Expertise</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2530] mb-6">
              Comprehensive Immigration<br className="hidden md:block"/> Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              Whether you are coming to Canada to visit, study, work, or live permanently, we have the specific legal expertise to guide you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseServices.map((service, index) => (
              <div key={index} className="bg-[#F8F9FA] p-8 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C8102E] to-[#A00D24] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <div className="mb-6 bg-white w-16 h-16 rounded-lg flex items-center justify-center shadow-sm text-[#1A2530] group-hover:bg-[#1A2530] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1A2530] mb-3 group-hover:text-[#C8102E] transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
