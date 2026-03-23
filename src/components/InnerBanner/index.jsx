import Link from "next/link";
import { MapPin, Scale, Newspaper, Phone } from "lucide-react";

export default function InnerBanner({
  title,
  subtitle,
  image,
  type = "service", // "location" | "service" | "news"
  locationName = "",
}) {
  const isLocation = type === "location";
  const isNews = type === "news"; // <-- ADDED THIS LINE

  return (
    <section className="relative pb-20 pt-32 lg:pb-32 flex items-center min-h-[50vh] md:min-h-[60vh]">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="absolute inset-0 bg-[#10151D]/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Tag */}
        <div className="inline-block px-4 py-1.5 border border-[#C8102E]/40 bg-[#C8102E]/20 backdrop-blur-sm rounded-full mb-6">
          <span className="text-white font-medium tracking-wide text-sm flex items-center uppercase">
            {isLocation ? (
                <>
                    <MapPin className="w-4 h-4 mr-2 text-[#C8102E]" />
                    Serving {locationName}, BC
                </>
            ) : isNews ? (
                <>
                    <Newspaper className="w-4 h-4 mr-2 text-[#C8102E]" />
                    Latest News & Updates
                </>
            ) : (
                <>
                    <Scale className="w-4 h-4 mr-2 text-[#C8102E]" />
                    Specialized Legal Services
                </>
            )}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-white leading-tight mb-6">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
          {subtitle}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="tel:+16042613171"
            className="bg-[#C8102E] hover:bg-[#A00D24] text-white px-8 py-4 rounded-sm font-bold text-lg transition-all shadow-lg flex items-center justify-center"
          >
            <Phone className="w-5 h-5 mr-3" />
            Call +1-604-261-3171
          </Link>

          <Link
            href="/contact"
            className="bg-transparent border border-white text-white hover:bg-white hover:text-[#1A2530] px-8 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}