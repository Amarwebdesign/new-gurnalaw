"use client";
const locations = [
  { title: "Surrey", url: 'immigration-lawyer-in-surrey' },
  { title: "Abbotsford", url: 'immigration-lawyer-in-abbotsford' },
  { title: "Vancouver", url: 'immigration-lawyer-in-vancouver' },
  { title: "Burnaby", url: 'immigration-lawyer-in-burnaby' },
  { title: "Coquitlam", url: 'immigration-lawyer-in-coquitlam' },
  { title: "Langley", url: 'immigration-lawyer-in-langley' },
  { title: "Richmond", url: 'immigration-lawyer-in-richmond' },
];
const legalServices = [
  {
    title: "Judicial Reviews",
    description:
      "Individualized legal counsel and representation before the Federal Court of Canada.",
    href: "#judicial-reviews",
  },
  {
    title: "Immigration Appeals",
    description:
      "Strong representation in appeal cases involving sponsorship refusals and complex matters.",
    href: "#immigration-appeals",
  },
  {
    title: "IRCC Applications",
    description:
      "Complete assistance with all IRCC applications ensuring accuracy and compliance.",
    href: "#ircc-applications",
  },
  {
    title: "Refugee Claims",
    description:
      "Professional representation for refugee claims and IRB hearings.",
    href: "#refugee-claims",
  },
  {
    title: "ID Hearings",
    description:
      "Defense strategies for inadmissibility and immigration hearings.",
    href: "#id-hearings",
  },
  {
    title: "Visa Refusal",
    description:
      "Strategic solutions to overcome visa refusals with strong documentation.",
    href: "#visa-refusal",
  },
  {
    title: "Citizenship Lawyer",
    description:
      "Guidance for Canadian citizenship applications and eligibility.",
    href: "#citizenship",
  },
  {
    title: "Notary Public",
    description:
      "Certified documentation, affidavits, and legal notarization services.",
    href: "#notary-public",
  },
];
import { ChevronRight } from "lucide-react";
import Link from "next/link";


export default function LegalServices() {

  return (
	<section id="practice-areas" className="py-24 bg-[#10151D] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Heading & Locations */}
            <div className="flex flex-col justify-center lg:sticky lg:top-32 h-fit">
              <h3 className="text-[#E5B55E] uppercase tracking-[0.2em] font-bold text-xs sm:text-sm mb-6">What Legal Services Do We Offer</h3>
              <h2 className="text-5xl md:text-6xl lg:text-[64px] font-sans font-bold leading-[1.1] mb-8">
                Practical legal guidance without false guarantees.
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
                At our core, we hold your trust in high regard and prioritize your well-being. As a result, we make a steadfast commitment to refrain from offering false guarantees or pledges.
              </p>
              
              {/* Location Pills */}
              <div className="flex flex-wrap gap-3 max-w-xl">
                {locations.map((item, idx) => (
                  <Link 
                    href={item.url}
                    key={idx} 
                    className="px-5 py-2.5 rounded-full border border-gray-700 bg-[#1A222C] text-gray-300 text-xs sm:text-sm font-semibold tracking-wider hover:border-[#C8102E] hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column: Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {legalServices.map((service, index) => (
              <Link key={index} href={service.href} className="block bg-[#181F28] border border-gray-700/50 p-6 xl:p-8 rounded-2xl hover:border-[#E5B55E]/50 transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl xl:text-2xl font-bold text-white group-hover:text-[#E5B55E] transition-colors">{service.title}</h4>
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#E5B55E] transition-colors" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </Link>
              ))}

            </div>
          </div>
        </div>
      </section>

  );
}