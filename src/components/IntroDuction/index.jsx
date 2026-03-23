import Link from "next/link";

export default function Introduction({
  subtitle = "Gurna Law Corporation",
  title = "",
  details = [],
  image = "/images/immgration.png",
}) {

  // ✅ Dynamic Experience
  const startYear = 2009;
  const experience = new Date().getFullYear() - startYear;

  return (
    <section className="py-24 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT CONTENT */}
          <div className="relative z-20 order-2 lg:order-1">

            <h3 className="text-[#C8102E] uppercase tracking-widest font-bold text-sm mb-3">
              {subtitle}
            </h3>

            <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#1A2530] mb-6 leading-tight">
              {title}
            </h2>

            {details.map((paragraph, idx) => (
              <p key={idx} className="text-gray-600 mb-6 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/contact"
                className="bg-[#1A2530] text-white px-8 py-4 rounded text-center font-bold hover:bg-[#C8102E] transition-colors shadow-lg"
              >
                Schedule an Assessment
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[500px] w-full mt-10 lg:mt-0 order-1 lg:order-2 flex justify-center lg:justify-end">

            <div className="absolute top-0 right-0 w-4/5 h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt="Gurna Law Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1A2530]/20"></div>
            </div>

            {/* Experience Card */}
            <div className="absolute bottom-10 left-0 lg:-left-10 bg-white p-8 rounded-2xl shadow-2xl border-l-8 border-[#C8102E] max-w-xs">
              <div className="text-[#E5B55E] text-6xl font-black leading-none mb-2">
                {experience}+
              </div>
              <div className="text-[#1A2530] text-xl font-bold uppercase tracking-wide">
                Years Experience
              </div>
              <p className="text-gray-500 text-sm mt-2 font-medium">
                International Litigation & Immigration
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}