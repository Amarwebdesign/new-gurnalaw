import DynamicListSection from "@/components/DynamicListSection";
import FooterCTA from "@/components/FooterCTA";
import InnerBanner from "@/components/InnerBanner";
import Introduction from "@/components/IntroDuction";
import FAQS from "@/components/Sections/FAQS";
import Testimonials from "@/components/Sections/Testimonials";
import WhyChoose from "@/components/Sections/WhyChoose";
import { AlertCircle, Award, Building2, Compass, FileSignature, FileText, Gavel, GraduationCap, Scale, ShieldCheck, Users, Clock } from "lucide-react";

// Assuming these are the locations you have pages for based on our previous work
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
    title: "Federal Court Litigation Experience",
    desc: "Judicial Reviews take place in the Federal Court of Canada, requiring highly specific litigation skills. Our legal team possesses the deep expertise necessary to confidently represent you at this level.",
    icon: <Gavel className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Identifying Legal & Procedural Errors",
    desc: "We meticulously review the visa officer’s notes (GCMS notes) to identify instances where the decision was legally flawed, factually unreasonable, or procedurally unfair.",
    icon: <AlertCircle className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Strict Adherence to Deadlines",
    desc: "The window to file for a Judicial Review is incredibly tight—often just 15 days for decisions made inside Canada. We move swiftly and decisively to secure your right to challenge the refusal.",
    icon: <Clock className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Honest Case Assessments",
    desc: "Federal litigation is a serious undertaking. We provide a transparent, upfront evaluation of your chances of success before you invest time and money into the Federal Court process.",
    icon: <ShieldCheck className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Comprehensive Written Arguments",
    desc: "Success in Federal Court relies heavily on written advocacy. Our lawyers draft compelling, legally sound memorandums of argument to persuade a judge to reopen your case.",
    icon: <FileSignature className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Strategic Resolution Pathways",
    desc: "Often, a strong application for 'Leave' will prompt the Department of Justice to settle the matter outside of court. We negotiate aggressively to get your application reopened faster.",
    icon: <Scale className="w-8 h-8 text-[#C8102E]" />
  }
];

const faqs = [
  {
    question: "What exactly is a Judicial Review in Canadian immigration?",
    answer: "A Judicial Review is a legal process where we ask the Federal Court of Canada to review a negative decision made by an immigration officer, the IRB, or IRCC. The court examines whether the decision-maker acted fairly, reasonably, and within their legal authority."
  },
  {
    question: "Is a Judicial Review the same thing as an appeal?",
    answer: "No. In an appeal, a new decision-maker can look at the facts and make a new decision. In a Judicial Review, the Federal Court judge only determines if the original decision was legally sound. If we win, the judge doesn't approve your visa; they order a different immigration officer to process your application again, fairly."
  },
  {
    question: "What types of immigration decisions can be challenged in Federal Court?",
    answer: "We can challenge almost any final decision made under the Immigration and Refugee Protection Act (IRPA). This includes refused study permits, denied work permits, rejected permanent residency applications, failed refugee claims, and negative Humanitarian and Compassionate (H&C) decisions."
  },
  {
    question: "How long do I have to file a Judicial Review?",
    answer: "Time is of the essence. If the decision was made inside Canada, you have only 15 days from the date you received the refusal letter to file. If the decision was made outside Canada, you have 60 days. Missing these strict deadlines usually means losing your right to challenge the decision."
  },
  {
    question: "Can I submit new evidence or documents during a Judicial Review?",
    answer: "Generally, no. A Judicial Review is strictly based on the exact same information and documents that were in front of the visa officer when they made their original decision. You cannot introduce new evidence to strengthen your case at this stage."
  },
  {
    question: "What happens during the 'Leave' stage?",
    answer: "A Judicial Review is a two-step process. First, we must apply for 'Leave' (permission) from a Federal Court judge to have your case heard. We submit written arguments proving the officer made an error. If the judge grants Leave, we proceed to a full oral hearing."
  },
  {
    question: "Do I have to physically go to court for the hearing?",
    answer: "No, you generally do not need to attend the Federal Court hearing. Our experienced litigation lawyers will appear in court on your behalf to present oral arguments to the judge and answer any of their legal questions."
  },
  {
    question: "What happens if the Department of Justice agrees with our arguments?",
    answer: "This is a common and favorable outcome! If our written arguments are strong enough, the Department of Justice (lawyers representing IRCC) may offer to settle. They will agree to quash the refusal and send your application back to a new officer without needing a court hearing."
  },
  {
    question: "How long does the entire Judicial Review process take?",
    answer: "The timeline can vary greatly depending on the Federal Court's schedule and whether the Department of Justice decides to settle. On average, the process from filing the initial application to receiving a final decision can take anywhere from 6 to 12 months."
  },
  {
    question: "Why do I need a lawyer for this? Can't an immigration consultant do it?",
    answer: "By law, immigration consultants are not permitted to represent clients in the Federal Court of Canada. Only a licensed lawyer can file a Judicial Review and litigate your case before a federal judge. It requires highly specialized legal knowledge and advocacy skills."
  }
];

export const metadata = {
  title: 'Judicial Review Lawyer in BC | Federal Court Appeals | Gurna Law',
  description: 'Was your Canadian visa or PR refused unfairly? Gurna Law Corporation provides expert Federal Court litigation and Judicial Review services across BC to challenge unfair IRCC decisions.',
  canonical: 'https://www.gurnalaw.ca/services/judicial-reviews',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'Judicial Review Lawyer in BC | Federal Court Appeals | Gurna Law',
    description: 'Was your Canadian visa or PR refused unfairly? Gurna Law Corporation provides expert Federal Court litigation and Judicial Review services across BC to challenge unfair IRCC decisions.',
    url: 'https://www.gurnalaw.ca/services/judicial-reviews',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function JudicialReviewsService() {
  return (
    <>
      <InnerBanner
        type="service"
        serviceName="Judicial Reviews"
        title="Immigration Judicial Reviews"
        subtitle="Challenge Unfair Visa Refusals With Expert Federal Court Representation in British Columbia."
        image="/images/banner/VisaRefusalLawyer.png" // You might want to change this image to a courthouse or gavel for this specific page
      />
      
      <Introduction
        subtitle="Federal Court Litigation"
        title="Overturning Unfair Immigration Decisions"
        details={[
            "Receiving a refusal letter from Immigration, Refugees and Citizenship Canada (IRCC) can be devastating, especially when you know you met all the requirements. Unfortunately, visa officers can make mistakes. They may ignore critical evidence, apply the law incorrectly, or make decisions that are fundamentally unreasonable and procedurally unfair.",
            "If your application has been unjustly denied, a Judicial Review in the Federal Court of Canada may be your best option. At Gurna Law Corporation, we have the specialized litigation experience required to take IRCC to court. We meticulously analyze the officer's reasoning, build compelling legal arguments, and fight aggressively to have your refusal overturned so your application can be processed fairly."
        ]}
      />
      
      <WhyChoose
        content={whyChooseFeatures}
        title="Why Trust Us With Your Federal Court Case?"
        subtitle="Strategic Legal Advocacy"
        description="Litigating in the Federal Court requires a different skill set than simply filing a visa application. We bring tenacity, strict attention to legal detail, and persuasive advocacy to every Judicial Review we handle."
      />
      
      <DynamicListSection
        type="service"
        name="Judicial Reviews"
        locations={LOCATIONS}
        subtitle="Serving Across British Columbia"
        title="Areas Served by Gurna Law Corporation"
        description="We provide expert Judicial Review and Federal Court litigation services to clients across multiple locations in British Columbia, ensuring your right to a fair immigration process is protected no matter where you reside."
      />
      
      <FAQS
        content={faqs}
        title="Federal Court & Judicial Reviews – Frequently Asked Questions"
        subtitle="FAQ – Challenging Refusals"
        description="Understanding the Federal Court process can be intimidating. We have compiled clear, straightforward answers to the most common questions regarding Judicial Reviews to help you understand your legal options."
      />
      <Testimonials />
      <FooterCTA type="service" serviceName="Judicial Reviews" />
    </>
  );
}