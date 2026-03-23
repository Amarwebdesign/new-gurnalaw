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
    title: "Flawless Application Preparation",
    desc: "IRCC applications require absolute precision. We meticulously prepare, review, and organize your forms and supporting documents to eliminate the simple errors that cause unnecessary delays or rejections.",
    icon: <FileText className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Comprehensive Case Strategy",
    desc: "We do not just fill out forms. We evaluate your unique background to determine the most effective immigration pathway, ensuring your application aligns perfectly with your long-term Canadian goals.",
    icon: <Compass className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Proactive Problem Solving",
    desc: "Anticipating potential issues—like gaps in employment or complex family histories—we address them head-on with detailed legal explanation letters to satisfy visa officers right from the start.",
    icon: <ShieldCheck className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Strict Deadline Management",
    desc: "Missing an IRCC deadline can result in a refused or abandoned application. We expertly track every expiry date, ITA window, and document request to ensure timely and complete submissions.",
    icon: <Clock className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Transparent Client Communication",
    desc: "You will never be left guessing about the status of your application. We provide you with regular updates and clear, jargon-free explanations throughout the entire immigration process.",
    icon: <Users className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Handling All IRCC Categories",
    desc: "From complex Express Entry profiles and Spousal Sponsorships to Study Permits and PR Card Renewals, our legal team possesses the broad expertise to manage any IRCC filing.",
    icon: <Award className="w-8 h-8 text-[#C8102E]" />
  }
];

const faqs = [
  {
    question: "What types of IRCC applications do you handle?",
    answer: "We manage a comprehensive range of applications. This includes economic classes like Express Entry and PNPs, family sponsorships (spousal, parental), temporary resident visas (work, study, visitor), PR card renewals, and citizenship applications."
  },
  {
    question: "Why should I hire a lawyer instead of applying myself?",
    answer: "While you can apply independently, the IRCC system is highly complex and constantly shifting. A single mistake or omission can lead to months of delays or a devastating refusal. We provide legal expertise, error-free preparation, and strategic advice to protect your future."
  },
  {
    question: "How long does it take IRCC to process an application?",
    answer: "Processing times vary significantly depending on the exact type of application and your country of origin. We constantly monitor current IRCC processing trends and ensure your file is 'front-end loaded' (complete from day one) to avoid unnecessary internal delays."
  },
  {
    question: "What happens if IRCC requests more documents during processing?",
    answer: "If you receive a Procedural Fairness Letter (PFL) or a request for additional information, time is critical. We respond swiftly and comprehensively with the exact legal and factual evidence IRCC is looking for to prevent a refusal."
  },
  {
    question: "Can you help me if my previous IRCC application was refused?",
    answer: "Yes, absolutely. We frequently assist clients who have experienced prior refusals. We request the GCMS notes (the officer's internal notes) to understand exactly why you were denied, correct the underlying issues, and submit a vastly stronger new application."
  },
  {
    question: "Do you assist with Express Entry profiles?",
    answer: "Yes we do. We help you accurately calculate your Comprehensive Ranking System (CRS) score, identify legal ways to improve it, correctly create your profile, and swiftly submit your complete permanent residency application once you receive an Invitation to Apply (ITA)."
  },
  {
    question: "How do you ensure my documents are translated correctly for IRCC?",
    answer: "IRCC has incredibly strict rules regarding document translation and certification. We guide you on exactly how to obtain certified translations and ensure all foreign documents meet Canadian legal and evidentiary standards before submission."
  },
  {
    question: "Can I stay in Canada while my PR application is processing?",
    answer: "In many cases, yes. Depending on your current status and the type of PR application you filed, we can apply for a Bridging Open Work Permit (BOWP) or legally extend your temporary status so you can remain in Canada without interruption."
  },
  {
    question: "What is the difference between an IRCC application and a Judicial Review?",
    answer: "An IRCC application is your initial request for a visa, permit, or PR status. A Judicial Review is a formal legal process in the Federal Court used to challenge a negative decision (a refusal) that an IRCC officer made on your application."
  },
  {
    question: "How do we get started with my application?",
    answer: "The best first step is to schedule a consultation with our legal team. We will carefully review your specific circumstances, discuss your eligibility options, and provide a clear, step-by-step roadmap for your Canadian immigration journey."
  }
];

export const metadata = {
  title: 'IRCC Application Lawyer in BC | Visas & PR | Gurna Law',
  description: 'Need help with your Canadian immigration application? Gurna Law Corporation provides flawless IRCC application preparation for PR, work permits, and sponsorships across BC.',
  canonical: 'https://www.gurnalaw.ca/services/ircc-applications',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'IRCC Application Lawyer in BC | Visas & PR | Gurna Law',
    description: 'Need help with your Canadian immigration application? Gurna Law Corporation provides flawless IRCC application preparation for PR, work permits, and sponsorships across BC.',
    url: 'https://www.gurnalaw.ca/services/ircc-applications',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function IRCCApplicationsService() {
  return (
    <>
      <InnerBanner
        type="service"
        serviceName="IRCC Applications"
        title="IRCC Applications & Filings"
        subtitle="Flawless Preparation and Strategic Guidance for Your Canadian Immigration Journey."
        image="/images/banner/VisaRefusalLawyer.png"
      />
      
      <Introduction
        subtitle="Immigration, Refugees and Citizenship Canada"
        title="Navigating the IRCC System With Confidence"
        details={[
            "Navigating the Immigration, Refugees and Citizenship Canada (IRCC) system can be an overwhelming experience. With constantly updating policies, complex online portals, and strict documentary requirements, the stakes are incredibly high. A simple oversight, a missing signature, or the wrong supporting document can lead to returned applications, months of frustrating delays, or a devastating refusal.",
            "At Gurna Law Corporation, we take the stress and uncertainty out of the equation by handling the entire application process from start to finish. Our legal team meticulously reviews your background, builds a tailored strategy, and ensures every single form and document meets IRCC’s exacting standards. Whether you are applying for Permanent Residency, sponsoring a loved one, or seeking a work permit, we provide the precision and advocacy needed to secure a successful outcome."
        ]}
      />
      
      <WhyChoose
        content={whyChooseFeatures}
        title="Why Choose Us for Your IRCC Application?"
        subtitle="Precision and Strategic Planning"
        description="We do not just fill out forms; we build comprehensive legal applications. Discover how our meticulous approach to IRCC filings maximizes your chances of a swift and successful approval."
      />
      
      <DynamicListSection
        type="service"
        name="IRCC Applications"
        locations={LOCATIONS}
        subtitle="Serving Across British Columbia"
        title="Areas Served by Gurna Law Corporation"
        description="We provide expert IRCC application services to clients across multiple locations in British Columbia, ensuring your immigration paperwork is handled with the utmost professional care."
      />
      
      <FAQS
        content={faqs}
        title="IRCC Applications – Frequently Asked Questions"
        subtitle="FAQ – Navigating the Process"
        description="Understanding what IRCC requires is half the battle. We have compiled clear, straightforward answers to the most common questions about the application process to help you feel confident moving forward."
      />
      <Testimonials />
      <FooterCTA type="service" serviceName="IRCC Applications" />
    </>
  );
}