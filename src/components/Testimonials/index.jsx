"use client";

const testimonials = [
  {
    name: "Lokesh Kumar (LK)",
    quote:
      "From a voluntary departure order to a work permit approval, my journey with Gurna Law Corporation was extraordinary.",
  },
  {
    name: "Harman Sohi",
    quote:
      "After multiple refusals in the past, I approached Gurna Law Corporation and my tourist visa was approved in only a few days.",
  },
  {
    name: "Amir Zeb",
    quote:
      "The refusal decision was set aside after judicial review. They are always approachable, and Mr. Saravpreet Singh is particularly knowledgeable.",
  },
];
export default function Testimonials() {

  return (
    <section id="testimonials" className="py-24 bg-[#F5F5F7]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h3 className="text-[#C8102E] uppercase tracking-widest font-bold text-sm mb-4">Testimonials</h3>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#1A2530] mb-6">What Our Client Says?</h2>
            <p className="text-gray-600 text-lg">
              Explore the journeys of satisfied clients and see how strategic legal representation changed the outcome of their cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div key={index} className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full border border-gray-100">
                <h4 className="text-[#C8102E] font-bold tracking-widest text-sm uppercase mb-6">Client Review</h4>
                <p className="text-[#1A2530] text-lg leading-relaxed flex-grow font-medium">"{test.quote}"</p>
                <div className="pt-8 mt-8 border-t border-gray-100">
                  <p className="font-bold text-[#1A2530]">{test.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};