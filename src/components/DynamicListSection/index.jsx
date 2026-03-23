import { ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";

export default function DynamicListSection({
  type = "location", // "location" | "service"
  name = "",
  practiceAreas = [],
  locations = [],

  // ✅ NEW CUSTOM PROPS
  title,
  subtitle,
  description,
}) {
  const isLocation = type === "location";

  return (
    <section className="py-24 bg-[#10151D] text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <h3 className="text-[#E5B55E] uppercase tracking-[0.2em] font-bold text-sm mb-4">
            {subtitle ||
              (isLocation
                ? `${name} Legal Services`
                : `Serving Across BC`)}
          </h3>

          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6">
            {title ||
              (isLocation
                ? `Comprehensive Practice Areas`
                : `Our Locations`)}
          </h2>

          <p className="text-gray-400 text-lg">
            {description ||
              (isLocation
                ? `Gurna Law Corporation provides localized, aggressive, and highly specialized legal representation for all immigration matters in ${name}.`
                : `Gurna Law Corporation provides aggressive legal representation for ${name} across multiple locations in British Columbia.`)}
          </p>
        </div>

        {/* Content */}
        {isLocation ? (
          // 🔹 Practice Areas
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, idx) => (
              <Link
                key={idx}
                href={`/${area.slug}`}
                className="bg-[#181F28] border border-gray-700/50 p-6 rounded-xl hover:border-[#C8102E] transition-colors group flex items-center justify-between"
              >
                <div className="flex items-center">
                  <span className="mr-4 text-gray-500 group-hover:text-[#C8102E]">
                    {area.icon}
                  </span>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#C8102E] transition-colors">
                    {area.name}
                  </h4>
                </div>

                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#C8102E]" />
              </Link>
            ))}
          </div>
        ) : (
          // 🔹 Locations
          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {locations.map((loc, idx) => (
              <Link
                key={idx}
                href={loc.slug}
                className="px-8 py-4 rounded-xl border border-gray-700 bg-[#1A222C] text-gray-300 text-lg font-bold tracking-wider hover:border-[#C8102E] hover:text-white transition-colors flex items-center"
              >
                <MapPin className="w-5 h-5 mr-3 text-[#E5B55E]" />
                {loc.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}