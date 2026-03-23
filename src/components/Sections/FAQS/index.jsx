"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQS({
  content = [],
  title = "Frequently Asked Questions",
  subtitle = "FAQ",
  description = "",
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
        <div itemScope itemType="https://schema.org/FAQPage">
            <div className="space-y-4">
                {content.map((faq, index) => (
                <div
                    key={index}
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                    className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                    openIndex === index
                        ? "border-[#C8102E] bg-white shadow-md"
                        : "border-gray-200 bg-gray-50 hover:border-gray-300"
                    }`}
                >
                    {/* Question */}
                    <button
                    onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full text-left px-6 py-5 flex justify-between items-center"
                    >
                    <span
                        itemProp="name"
                        className={`font-bold text-lg ${
                        openIndex === index
                            ? "text-[#C8102E]"
                            : "text-[#1A2530]"
                        }`}
                    >
                        {faq.question}
                    </span>

                    <span className="ml-4 p-1 rounded-full">
                        {openIndex === index ? (
                        <Minus className="w-5 h-5" />
                        ) : (
                        <Plus className="w-5 h-5" />
                        )}
                    </span>
                    </button>

                    {/* Answer */}
                    <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className={`px-6 transition-all duration-300 ${
                        openIndex === index
                        ? "max-h-96 pb-6 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                    >
                    <p
                        className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
                        itemProp="text"
                    >
                        {faq.answer}
                    </p>
                    </div>
                </div>
                ))}
            </div>
            </div>
      </div>
    </section>
  );
}