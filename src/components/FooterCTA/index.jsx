"use client";
import Link from "next/link";

export default function FooterCTA({
  type = "default", // "location" | "service" | "default"
  locationName = "",
  serviceName = "",
}) {
  let heading = "";
  let subText = "";

  // 🎯 Dynamic Content Logic
  if (type === "location") {
    heading = `Speak with an Immigration Lawyer in ${locationName}`;
    subText = `Gurna Law Corporation provides strategic immigration solutions for clients in ${locationName} and surrounding areas. Get clear legal guidance tailored to your case.`;
  } else if (type === "service") {
    heading = `${serviceName} Legal Assistance`;
    subText = `Gurna Law Corporation delivers precise legal strategies for ${serviceName.toLowerCase()} applications, ensuring every detail is handled with expertise and care.`;
  } else {
    heading = `Contact Gurna Law Corporation for Legal Guidance`;
    subText = `Gurna Law Corporation provides professional legal support in immigration, citizenship, appeals, and notarial services with clarity and confidence.`;
  }

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-r from-[#C8102E] via-[#8B0015] to-[#2B0E14]">
      
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-white/80 uppercase tracking-widest font-bold text-xs mb-4">
              Need Legal Advice?
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-sans font-bold text-white leading-tight mb-6">
              {heading}
            </h2>

            <p className="text-white/90 text-lg font-light leading-relaxed">
              {subText}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 w-full lg:w-auto justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#1A2530] px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors text-center"
            >
              Contact Us
            </Link>

            <Link
              href="tel:+16042613171"
              className="bg-transparent border border-white/40 text-white px-10 py-4 rounded-full font-bold tracking-wider text-sm hover:bg-white/10 transition-colors text-center"
            >
              +1-604-261-3171
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}