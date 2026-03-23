"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";

export default function FooterContact() {
  const { register, handleSubmit, handleError, formState: { errors } } = useForm({
    mode: "onChange",
  });
  const router = useRouter();
  const [buttonShow, setButtonShow] = useState(false);

  const handleKeyPress = (event) => {
    const allowedKeys = ["+", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "(", ")", " "];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  const onSubmit = async (data) => {
    setButtonShow(true);
    try {
      const response = await fetch("https://crm-api.amrsoftec.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      router.push("/thank-you");
      setButtonShow(false);
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem sending your message.");
      setButtonShow(false);
    }
  };

  return (
    <>
     <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff8f8_0%,#fffefc_100%)] py-20 lg:py-24">
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[rgba(200,16,46,0.12)] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[rgba(27,86,139,0.12)] blur-3xl" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-[#C8102E] uppercase tracking-widest font-semibold text-sm mb-3">Get in Touch</h3>
              <h2 className="text-4xl font-bold text-[#1A2530] mb-8">Contact Our Office</h2>
              <p className="text-gray-600 mb-10 text-lg">
                Fill out the form to request a consultation. Our team will get back to you within 24 business hours to schedule an appointment.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mr-5">
                    <MapPin className="text-[#C8102E] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A2530] text-lg mb-1">Head Office</h4>
                    <p className="text-gray-600">Unit 208–8028, 128th St., Surrey, BC, V3W4E9<br/><span className="text-sm text-gray-500">Monday – Saturday, 10am – 6pm, Sunday Closed</span></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mr-5">
                    <Phone className="text-[#C8102E] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A2530] text-lg mb-1">Phone</h4>
                    <p className="text-gray-600">+1-604-261-3171</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mr-5">
                    <Mail className="text-[#C8102E] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A2530] text-lg mb-1">Email</h4>
                    <p className="text-gray-600">legal@gurnalaw.ca</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#F8F9FA] p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm">
              <form onSubmit={handleSubmit(onSubmit, handleError)} className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Name *</label>
                    <div>
                        <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent transition-all ${errors?.name ? "error" : ""}`}
                        />
                        {errors?.name ? <p className="error-message">{errors.name.message}</p> : null}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <div>
                        <input
                        type="text"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid email address",
                            },
                        })}
                        className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent transition-all ${errors?.email ? "error" : ""}`}
                        />
                        {errors?.email ? <p className="error-message">{errors.email.message}</p> : null}
                    </div>
                  </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone *</label>
                  <div>
                    <input
                    type="text"
                    {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                        value: /^(?:\+[0-9])?[0-9]{7,16}$/,
                        message: "Must be numeric and up to 16 digits",
                        },
                    })}
                    className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent transition-all ${errors?.phone ? "error" : ""}`}
                    onKeyPress={handleKeyPress}
                    />
                    {errors?.phone ? <p className="error-message">{errors.phone.message}</p> : null}
                </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <div>
                    <input
                    type="text"
                    {...register("subject", { required: "Subject is required" })}
                    className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent transition-all ${errors?.subject ? "error" : ""}`}
                    />
                    {errors?.subject ? <p className="error-message">{errors.subject.message}</p> : null}
                </div>
                </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <div>
                    <textarea
                        rows="6"
                        {...register("message", { required: "Message is required" })}
                        className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-transparent transition-all ${errors?.message ? "error" : ""}`}
                    />
                    {errors?.message ? <p className="error-message">{errors.message.message}</p> : null}
                    </div>
                </div>
                <button type="submit" disabled={buttonShow} className="w-full bg-[#1A2530] hover:bg-[#C8102E] text-white font-bold py-4 rounded-md transition-colors shadow-md">
                  
                  {buttonShow ? "Sending" : "Submit Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
