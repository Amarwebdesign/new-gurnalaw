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
    title: "Dedicated Tri-Cities Immigration Counsel",
    desc: "We bring specialized knowledge of Canada's evolving immigration framework right to your doorstep, serving individuals, families, and businesses throughout Coquitlam and the surrounding Tri-Cities.",
    icon: <GraduationCap className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Flawless Document Preparation",
    desc: "IRCC applications are notoriously strict. Our legal team meticulously reviews every form and piece of evidence, safeguarding your application against preventable errors, delays, or outright rejections.",
    icon: <FileText className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Tenacious Advocacy & Representation",
    desc: "When faced with complex legal hurdles like admissibility issues or visa denials, our Coquitlam-focused lawyers step in with robust representation to fight for your right to live and work in Canada.",
    icon: <Scale className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Transparent Process & Communication",
    desc: "We believe you shouldn't be left in the dark. We prioritize clear, jargon-free communication so you understand exactly where your case stands and what the next steps are.",
    icon: <ShieldCheck className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Your Coquitlam Settlement Partners",
    desc: "Our support goes beyond legal paperwork. We are deeply invested in your successful transition to life in Coquitlam, offering tailored advice to help you plant roots in your new community.",
    icon: <Compass className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Custom-Tailored Legal Roadmaps",
    desc: "Cookie-cutter solutions don't work in immigration law. We analyze your specific background to build a strategic, highly personalized pathway designed to achieve your Canadian goals.",
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
    question: "What kind of immigration support do you provide to Coquitlam residents?",
    answer: "Our firm handles the full spectrum of Canadian immigration law. Whether you are living in Coquitlam and looking to sponsor a spouse, aiming to enter the Express Entry pool, or needing robust defense for an immigration appeal, we have the expertise to guide you."
  },
  {
    question: "How do I book a meeting with your legal team from Coquitlam?",
    answer: "Getting started is simple. You can reach out to us via phone or through our website's contact form. Our friendly staff will promptly arrange an initial consultation to discuss your specific immigration needs and timeline."
  },
  {
    question: "My visa was denied. Can your law firm help me appeal?",
    answer: "Absolutely. Visa refusals are frustrating, but they aren't always the end of the road. We carefully analyze the visa officer's notes, identify the weak points in the original application, and build a compelling case to appeal or challenge the decision."
  },
  {
    question: "What should I prepare for my first meeting?",
    answer: "To make the most of our time together, please gather any correspondence you've had with IRCC, copies of your current and past passports, existing permits, and any refusal letters. This helps us give you an accurate legal assessment right away."
  },
  {
    question: "Is my personal information secure with your firm?",
    answer: "Without a doubt. Client privilege is the cornerstone of our legal practice. All details, documents, and conversations shared with our lawyers remain strictly confidential in accordance with the Law Society of British Columbia."
  },
  {
    question: "Can you assist me in bringing my spouse or family members to Coquitlam?",
    answer: "Yes, family reunification is one of our primary practice areas. We take the stress out of Spousal, Common-Law, and Parental Sponsorship applications by ensuring your relationship is documented perfectly to meet the government's strict criteria."
  },
  {
    question: "What if I am facing removal or deportation orders?",
    answer: "If you are facing enforcement action, time is of the essence. We provide urgent and strategic legal interventions, representing you at hearings and exploring all legal avenues, such as stays of removal, to keep you in Canada."
  },
  {
    question: "Do you handle international student visas and temporary work permits?",
    answer: "We frequently assist clients looking to study at local institutions or work in the BC economy. We ensure your study permit or work visa application is airtight, significantly boosting your chances of a swift approval."
  },
  {
    question: "How fast can I expect my IRCC application to be processed?",
    answer: "Processing times fluctuate based on IRCC's current backlog and the specific category you are applying under. During our consultation, we will provide you with the most up-to-date processing estimates and ensure your application is submitted perfectly to avoid internal delays."
  },
  {
    question: "Who do I contact if my situation is highly complex?",
    answer: "If you have a complicated background—such as a previous refusal or medical inadmissibility—don't hesitate to call us. Our senior legal team thrives on solving tough immigration puzzles and finding viable pathways for our clients."
  }
];

export const metadata = {
  title: 'Top Immigration Lawyer in Coquitlam | Reliable Legal Help',
  description: 'Searching for a trusted Immigration Lawyer in Coquitlam, BC? Gurna Law Corporation offers dedicated legal support for visas, appeals, and citizenship. Contact us today!',
  canonical: 'https://www.gurnalaw.ca/immigration-lawyer-in-coquitlam',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'Top Immigration Lawyer in Coquitlam | Reliable Legal Help',
    description: 'Searching for a trusted Immigration Lawyer in Coquitlam, BC? Gurna Law Corporation offers dedicated legal support for visas, appeals, and citizenship. Contact us today!',
    url: 'https://www.gurnalaw.ca/immigration-lawyer-in-coquitlam',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function ImmigrationLawyerCoquitlam() {
  return (
    <>
      <InnerBanner
        type="location"
        locationName="Coquitlam"
        title="Immigration Lawyer In Coquitlam"
        subtitle="Turn Your Canadian Goals Into Reality With Dedicated Legal Support in Coquitlam, BC."
        image="/images/banner/VisaRefusalLawyer.png"
      />
      
      <Introduction
        subtitle="Gurna Law Corporation"
        title="Trusted Immigration Counsel for Coquitlam Residents"
        details={[
            "Coquitlam is a thriving, diverse community, making it a highly desirable place for newcomers to establish their roots in Canada. However, navigating the intricate web of Canadian immigration policies, shifting regulations, and strict deadlines can easily overwhelm anyone trying to do it alone.",
            "That is where we step in. As experienced immigration lawyers serving the Coquitlam area, we are equipped to handle the heavy lifting for you. From securing work permits to fighting complex legal battles in federal court, our firm leverages years of specialized litigation and immigration experience. We are committed to removing the confusion from the process so you can focus on building your future in British Columbia."
        ]}
      />
      
      <WhyChoose
        content={whyChooseFeatures}
        title="How Our Legal Team Advocates for You"
        subtitle="Why Choose Gurna Law Corporation in Coquitlam"
        description="Attempting to manage your own immigration case can lead to costly mistakes. We stand by our clients in Coquitlam by offering proactive, high-level legal strategies designed to conquer bureaucratic hurdles and deliver meaningful results."
      />
      
      <DynamicListSection
        type="location"
        name="Coquitlam"
        practiceAreas={PRACTICE_AREAS}
        subtitle="Coquitlam Immigration Practice"
        title="Comprehensive Legal Services in Coquitlam"
        description="Discover the wide array of immigration services we provide to our Coquitlam clients, ranging from straightforward permanent residency filings to highly complex appellate work."
      />
      
      <FAQS
        content={faqs}
        title="Coquitlam Immigration Matters – Frequently Asked Questions"
        subtitle="FAQ – Tri-Cities Legal Support"
        description="Review our curated answers to the questions we hear most often from our clients. We strive to provide transparent, easily digestible information to help you make informed decisions about your legal journey."
      />
      <Testimonials />
      <FooterCTA type="location" locationName="Coquitlam" />
    </>
  );
}