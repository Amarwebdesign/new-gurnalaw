import DynamicListSection from "@/components/DynamicListSection";
import FooterCTA from "@/components/FooterCTA";
import InnerBanner from "@/components/InnerBanner";
import Introduction from "@/components/IntroDuction";
import FAQS from "@/components/Sections/FAQS";
import Testimonials from "@/components/Sections/Testimonials";
import WhyChoose from "@/components/Sections/WhyChoose";
import { AlertCircle, Award, Building2, Compass, FileSignature, FileText, Gavel, GraduationCap, Scale, ShieldCheck, Users } from "lucide-react";

const whyChooseFeatures = [
  {
    title: "Local Burnaby Expertise",
    desc: "We deeply understand the unique needs of Burnaby's diverse community, offering specialized legal counsel right in your neighborhood—from Metrotown to Lougheed.",
    icon: <GraduationCap className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Meticulous File Preparation",
    desc: "We leave nothing to chance. Our team rigorously prepares and reviews your applications to ensure full compliance with strict IRCC standards, minimizing the risk of delays.",
    icon: <FileText className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Fierce Advocacy",
    desc: "Whether you are dealing with a complicated appeal or a sudden visa refusal, we provide steadfast representation to fiercely protect your Canadian aspirations.",
    icon: <Scale className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Transparent Legal Counsel",
    desc: "No confusing jargon or hidden steps. We keep you fully informed with clear, honest communication at every single phase of your immigration journey.",
    icon: <ShieldCheck className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Community-Focused Settlement Advice",
    desc: "We do more than just process paperwork; we offer valuable insights and practical guidance to help you and your family successfully integrate into the Burnaby community.",
    icon: <Compass className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Strategy Built for You",
    desc: "Your life story is unique, and your legal plan should be too. We craft individualized pathways that align perfectly with your specific long-term immigration goals.",
    icon: <Users className="w-8 h-8 text-[#C8102E]" />
  }
];

const PRACTICE_AREAS = [
    {
        name: 'Judicial Reviews',
        slug: 'judicial-reviews',
        icon: <Gavel className="w-6 h-6 text-[#E5B55E]" />
    },
    {
        name: 'Immigration Appeals',
        slug: 'immigration-appeals',
        icon: <AlertCircle className="w-6 h-6 text-[#E5B55E]" />
    },
    {
        name: 'IRCC Applications',
        slug: 'ircc-applications',
        icon: <FileText className="w-6 h-6 text-[#E5B55E]" />
    },
    {
        name: 'Refugee Claims and Appeals',
        slug: 'refugee-claims',
        icon: <ShieldCheck className="w-6 h-6 text-[#E5B55E]" />
    },
    {
        name: 'ID Hearings',
        slug: 'id-hearings',
        icon: <Building2 className="w-6 h-6 text-[#E5B55E]" />
    },
    {
        name: 'Visa Refusal',
        slug: 'visa-refusal',
        icon: <FileSignature className="w-6 h-6 text-[#E5B55E]" />
    },
    {
        name: 'Citizenship Lawyer',
        slug: 'citizenship',
        icon: <Award className="w-6 h-6 text-[#E5B55E]" />
    },
    {
        name: 'Notary Public',
        slug: 'notary-public',
        icon: <Scale className="w-6 h-6 text-[#E5B55E]" />
    }
];

const faqs = [
  {
    question: "What immigration matters do you handle for clients in Burnaby?",
    answer: "We manage a wide array of Canadian immigration issues for our Burnaby clients, including permanent residency applications, spousal sponsorships, work permits, and complex federal court appeals."
  },
  {
    question: "How do I arrange a consultation with your law firm?",
    answer: "Arranging a meeting is completely hassle-free. Just give us a call or send an email, and we will quickly schedule a consultation to review your specific situation and outline the best path forward."
  },
  {
    question: "What happens if my Canadian visa application gets rejected?",
    answer: "Do not panic. We regularly assist clients with visa refusals. We will meticulously review the officer's reasons for rejection and develop a robust strategy for reconsideration, a new application, or a formal appeal."
  },
  {
    question: "What should I bring to my initial consultation?",
    answer: "Please bring your passport, any current or expired visas, correspondence from IRCC, and any previous application forms. Having these documents on hand allows us to give you the most accurate and immediate advice."
  },
  {
    question: "Will my case details be kept private?",
    answer: "Absolutely. Your privacy is paramount. Everything we discuss is protected by strict solicitor-client privilege, ensuring your sensitive information remains entirely confidential at all times."
  },
  {
    question: "Can you help me sponsor my parents to live in Burnaby?",
    answer: "Yes, family reunification is a core part of our practice. We will expertly guide you through the intricate Parent and Grandparent Program or help you secure a Super Visa so your family can join you in Canada."
  },
  {
    question: "I am facing a removal order. What can you do?",
    answer: "Time is absolutely critical in these situations. We provide aggressive deportation defense, representing you before the Immigration and Refugee Board and exploring every legal option to keep you safely in the country."
  },
  {
    question: "Do you assist international students studying in Burnaby?",
    answer: "Definitely. With major institutions like SFU and BCIT right here in Burnaby, we frequently help students obtain and extend their study permits, as well as seamlessly transition to Post-Graduation Work Permits (PGWPs)."
  },
  {
    question: "How long will it take for my permanent residency to be approved?",
    answer: "Processing times are entirely dependent on IRCC and the specific stream you apply through. We will provide you with the most current timelines during our meeting and ensure your application is error-free to prevent any unnecessary hold-ups."
  },
  {
    question: "My case is very complicated. Can you still help?",
    answer: "Yes, we thrive on resolving complex legal challenges. Whether it involves criminal inadmissibility or previous misrepresentation issues, our senior lawyers possess the experience and tenacity to find creative, effective solutions."
  }
];

export const metadata = {
  title: 'Dedicated Immigration Lawyer in Burnaby | Expert Legal Guidance',
  description: 'Looking for an experienced immigration lawyer in Burnaby, BC? Gurna Law Corporation provides tailored legal solutions for visas, PR, and appeals. Book today!',
  canonical: 'https://www.gurnalaw.ca/immigration-lawyer-in-burnaby',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'Dedicated Immigration Lawyer in Burnaby | Expert Legal Guidance',
    description: 'Looking for an experienced immigration lawyer in Burnaby, BC? Gurna Law Corporation provides tailored legal solutions for visas, PR, and appeals. Book today!',
    url: 'https://www.gurnalaw.ca/immigration-lawyer-in-burnaby',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function ImmigrationLawyerBurnaby() {
  return (
    <>
      <InnerBanner
        type="location"
        locationName="Burnaby"
        title="Immigration Lawyer In Burnaby"
        subtitle="Secure Your Future in Canada With Unwavering Legal Support in Burnaby, BC."
        image="/images/banner/VisaRefusalLawyer.png"
      />
      
      <Introduction
        subtitle="Gurna Law Corporation"
        title="Your Dedicated Immigration Advocates in Burnaby"
        details={[
            "Burnaby is a vibrant, rapidly growing city that attracts people from all over the world. However, the path to living and working in Canada involves navigating a highly complex and constantly changing legal system. A single oversight on your application can result in months of frustrating delays or devastating refusals.",
            "That is exactly why having a dedicated legal advocate is crucial. We proudly serve the Burnaby community, bringing years of focused immigration and litigation experience directly to your case. Whether you are aiming for permanent residency, seeking to sponsor a loved one, or fighting a challenging appeal in federal court, we are here to shoulder the legal burden and pave the way for your success in British Columbia."
        ]}
      />
      
      <WhyChoose
        content={whyChooseFeatures}
        title="How We Protect Your Canadian Dreams"
        subtitle="Why Choose Gurna Law Corporation in Burnaby"
        description="Navigating immigration law without professional help can be risky. We empower our clients in Burnaby by delivering proactive, high-caliber legal strategies designed to overcome bureaucratic roadblocks and secure the results you deserve."
      />
      
      <DynamicListSection
        type="location"
        name="Burnaby"
        practiceAreas={PRACTICE_AREAS}
        subtitle="Burnaby Legal Practice"
        title="Comprehensive Immigration Services in Burnaby"
        description="Explore the extensive range of immigration services we provide to our Burnaby clients, from standard visa processing to highly intricate appellate advocacy."
      />
      
      <FAQS
        content={faqs}
        title="Burnaby Immigration Legal Matters – Frequently Asked Questions"
        subtitle="FAQ – Expert Legal Support"
        description="Read through our detailed answers to the most common questions we receive from clients in Burnaby. We believe in providing transparent, accessible information so you feel confident taking the next step."
      />
      <Testimonials />
      <FooterCTA type="location" locationName="Burnaby" />
    </>
  );
}