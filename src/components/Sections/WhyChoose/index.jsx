"use client";
export default function WhyChoose({
  content = [],
  title = "How A Canadian Immigration Lawyer Can Assist You",
  subtitle = "Why Choose Us",
  description = "Immigration laws can be complex and confusing. Tracking every single rule and regulation can be a daunting task if you represent yourself. At Gurna Law Corporation, we engage with the immigration regulatory framework as our day job. Let the pros handle it.",
}) {

  return (
    <section className="py-24 bg-[#fff]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#C8102E] uppercase tracking-widest font-bold text-sm mb-4">
            {subtitle}
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A2530] mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-gray-600 text-lg">{description}</p>
          )}
        </div>

        {/* FAQ List */}
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#C8102E]/30 transition-all duration-300 group">
                    <div className="bg-[#F8F9FA] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C8102E]/10 transition-colors">
                        {feature.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-[#1A2530] mb-4">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
                ))}
            </div>
      </div>
    </section>
  );
}