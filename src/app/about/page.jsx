import DynamicListSection from "@/components/DynamicListSection";
import FooterCTA from "@/components/FooterCTA";
import InnerBanner from "@/components/InnerBanner";
import Introduction from "@/components/IntroDuction";
import FAQS from "@/components/Sections/FAQS";
import Testimonials from "@/components/Sections/Testimonials";
import WhyChoose from "@/components/Sections/WhyChoose";
import { AlertCircle, Award, Building2, Compass, FileSignature, FileText, Gavel, GraduationCap, Scale, ShieldCheck, Users, Clock } from "lucide-react";

const LOCATIONS = [
  { name: 'Surrey', slug: 'immigration-lawyer-in-surrey', icon: <Building2 className="w-6 h-6 text-[#E5B55E]" /> },
  { name: 'Vancouver', slug: 'immigration-lawyer-in-vancouver', icon: <Building2 className="w-6 h-6 text-[#E5B55E]" /> },
  { name: 'Abbotsford', slug: 'immigration-lawyer-in-abbotsford', icon: <Building2 className="w-6 h-6 text-[#E5B55E]" /> },
  { name: 'Burnaby', slug: 'immigration-lawyer-in-burnaby', icon: <Building2 className="w-6 h-6 text-[#E5B55E]" /> },
  { name: 'Coquitlam', slug: 'immigration-lawyer-in-coquitlam', icon: <Building2 className="w-6 h-6 text-[#E5B55E]" /> },
  { name: 'Langley', slug: 'immigration-lawyer-in-langley', icon: <Building2 className="w-6 h-6 text-[#E5B55E]" /> },
  { name: 'Richmond', slug: 'immigration-lawyer-in-richmond', icon: <Building2 className="w-6 h-6 text-[#E5B55E]" /> }
];

const whyChooseFeatures = [
  {
    title: "Unwavering Legal Advocacy",
    desc: "We treat your Canadian dream as if it were our own. From straightforward applications to intense Federal Court litigation, we fight fiercely to protect your rights and secure your future.",
    icon: <Gavel className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Direct Access to Your Lawyer",
    desc: "You will not be passed off to unqualified assistants. When you hire us, you work directly with experienced legal professionals who know every single detail of your file intimately.",
    icon: <Users className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Honest, Transparent Assessments",
    desc: "We do not make empty promises. We provide a frank, realistic evaluation of your chances of success before you spend a dime, ensuring you always know exactly where you stand.",
    icon: <Scale className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Clear, Flat-Fee Billing",
    desc: "Legal fees should never be a surprise. We operate on a highly transparent, flat-fee billing structure so you know exactly what your investment is from day one, with no hidden hourly charges.",
    icon: <FileSignature className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Culturally Empathetic Counsel",
    desc: "We understand the immense emotional and financial weight of immigrating. We provide a supportive, compassionate environment, offering guidance in English, Punjabi, and Hindi.",
    icon: <ShieldCheck className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Custom-Tailored Roadmaps",
    desc: "Your life story is entirely unique. We reject cookie-cutter approaches, taking the time to engineer a highly personalized legal strategy that aligns perfectly with your long-term goals.",
    icon: <Compass className="w-8 h-8 text-[#C8102E]" />
  }
];

const faqs = [
  {
    question: "Where is Gurna Law Corporation located?",
    answer: "Our primary office is located in Surrey, BC. However, we represent clients throughout the Lower Mainland, the Fraser Valley, across Canada, and all over the globe."
  },
  {
    question: "Do you offer virtual or remote legal consultations?",
    answer: "Absolutely. We understand that our clients lead busy lives or may currently reside outside of Canada. We offer fully secure, confidential consultations via phone or Zoom video conferencing to accommodate your schedule and location."
  },
  {
    question: "Will I be speaking directly with an immigration lawyer?",
    answer: "Yes. Unlike many firms that route you through sales teams or paralegals, your consultation and the strategic handling of your case will be conducted directly by an experienced, licensed Canadian immigration lawyer."
  },
  {
    question: "Why should I hire a lawyer instead of an immigration consultant?",
    answer: "While consultants can fill out basic forms, only licensed lawyers have the legal authority to represent you in the Federal Court of Canada if your application is unfairly refused. We bring a higher level of regulatory accountability, solicitor-client privilege, and complex litigation experience to your case."
  },
  {
    question: "What languages does your legal team speak?",
    answer: "To best serve our diverse community, our team is highly fluent in English, Punjabi, and Hindi. We ensure that you fully understand every step of your legal journey in the language you are most comfortable with."
  },
  {
    question: "How do you structure your legal fees?",
    answer: "We believe in total financial transparency. For the vast majority of our work, we charge flat-rate fees. This means you will know the exact total cost of our representation upfront during your initial consultation, preventing any unexpected bills."
  },
  {
    question: "Do you handle highly complex or previously refused cases?",
    answer: "Yes, we thrive on solving complex legal puzzles. A significant portion of our practice is dedicated to overturning previous IRCC refusals, navigating criminal or medical inadmissibility, and handling intense appellate work at the IAD and Federal Court."
  },
  {
    question: "How will I be updated on the progress of my case?",
    answer: "We prioritize proactive communication. You will never be left in the dark. Our team provides regular, timely updates at every major milestone of your application, and we make ourselves readily available to answer your questions as they arise."
  },
  {
    question: "Can you assist me if I am currently living outside of Canada?",
    answer: "Certainly. We proudly represent a global clientele. No matter where you are currently living in the world, we have the digital infrastructure and legal expertise to seamlessly manage your Canadian immigration application from start to finish."
  },
  {
    question: "How do I get started with Gurna Law Corporation?",
    answer: "The best way to begin is by booking an initial consultation. During this meeting, we will carefully listen to your story, review your documents, assess your eligibility, and provide you with a clear, strategic roadmap for your future in Canada."
  }
];

export const metadata = {
  title: 'About Us | Gurna Law Corporation | BC Immigration Lawyers',
  description: 'Learn about Gurna Law Corporation. We are a dedicated team of Canadian immigration lawyers in BC, committed to fierce advocacy and turning your immigration goals into reality.',
  canonical: 'https://www.gurnalaw.ca/about-us',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'About Us | Gurna Law Corporation | BC Immigration Lawyers',
    description: 'Learn about Gurna Law Corporation. We are a dedicated team of Canadian immigration lawyers in BC, committed to fierce advocacy and turning your immigration goals into reality.',
    url: 'https://www.gurnalaw.ca/about-us',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function AboutUsPage() {
  return (
    <div className="font-['Inter']">
      <InnerBanner
        type="about"
        title="About Gurna Law Corporation"
        subtitle="Your Trusted Partners in Navigating the Complexities of Canadian Immigration Law."
        image="/images/banner/VisaRefusalLawyer.png" // You may want to update this image to a team photo or office shot
      />
      
      <Introduction
        subtitle="Who We Are"
        title="Fierce Advocates for Your Canadian Dream"
        details={[
            "Immigrating to Canada is far more than just a bureaucratic process; it is a life-changing journey that impacts your family, your career, and your entire future. At Gurna Law Corporation, we understand the immense weight of this transition. We built our legal practice on a foundation of unyielding advocacy, absolute integrity, and a deep, personal commitment to our clients' success.",
            "Based in British Columbia, our firm specializes in tackling the most complex immigration challenges. From carefully assembling your initial permanent residency application to aggressively defending your rights in the Federal Court of Canada, we stand by your side at every step. We do not just process paperwork; we listen to your unique story, understand your specific goals, and meticulously craft a legal strategy designed to overcome bureaucratic hurdles and bring your Canadian aspirations to life."
        ]}
      />
      
      <WhyChoose
        content={whyChooseFeatures}
        title="What Sets Our Law Firm Apart"
        subtitle="Our Core Values"
        description="Choosing the right legal representation can make all the difference in your case. Discover the principles and standards that drive our firm to achieve exceptional results for our clients every single day."
      />
      
      <DynamicListSection
        type="service"
        name="Visa Refusals"
        locations={LOCATIONS}
        subtitle="Our Reach Across British Columbia"
        title="Communities We Proudly Serve"
        description="While our main office is in Surrey, we leverage modern technology and deep regional expertise to provide top-tier legal representation to individuals, families, and businesses across the entire province."
      />
      
      <FAQS
        content={faqs}
        title="About Our Firm – Frequently Asked Questions"
        subtitle="FAQ – Working With Us"
        description="Choosing a lawyer is a big decision. We have compiled clear, honest answers to the most common questions about how our firm operates, our billing practices, and what you can expect when you hire us."
      />
      <Testimonials />
      
      <FooterCTA type="about" />
    </div>
  );
}