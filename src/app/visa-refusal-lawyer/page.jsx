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
    title: "In-Depth GCMS Analysis",
    desc: "A standard refusal letter tells you almost nothing. We immediately order and decode the visa officer's internal GCMS notes to uncover the exact, hidden reasons why your application was denied.",
    icon: <FileText className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Strategic Reapplications",
    desc: "Blindly reapplying usually leads to a second refusal. We meticulously address every concern the officer had, building a vastly stronger application backed by targeted evidence and legal submissions.",
    icon: <ShieldCheck className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Reconsideration Requests",
    desc: "If the officer made an obvious factual error or ignored evidence that was clearly provided, we can draft a formal Request for Reconsideration to have the decision overturned without needing to reapply.",
    icon: <FileSignature className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Federal Court Escalation",
    desc: "When an IRCC officer's decision is unreasonable or procedurally unfair, we have the litigation expertise to escalate your case to the Federal Court of Canada for a Judicial Review.",
    icon: <Gavel className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Preventing Misrepresentation",
    desc: "Submitting the wrong documents after a refusal can trigger a 5-year ban for misrepresentation. We carefully review your entire immigration history to ensure total consistency and legal compliance.",
    icon: <AlertCircle className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Honest Viability Assessments",
    desc: "We will not waste your time or money. We provide a frank, transparent assessment of your chances of overturning the refusal so you can make an informed decision on how to move forward.",
    icon: <Scale className="w-8 h-8 text-[#C8102E]" />
  }
];

const faqs = [
  {
    question: "My Canadian visa was refused. What should I do first?",
    answer: "Do not immediately reapply. The first step is to contact a lawyer to order your GCMS (Global Case Management System) notes. These notes contain the visa officer's detailed, internal reasoning for the refusal, which is essential for determining your next legal steps."
  },
  {
    question: "Can a visa refusal be appealed?",
    answer: "Most temporary visas (visitor, study, work permits) and Express Entry applications do not have a formal 'right of appeal'. Instead, your options are typically to submit a Request for Reconsideration, file a completely new, strengthened application, or challenge the decision in Federal Court via Judicial Review."
  },
  {
    question: "What is a Request for Reconsideration?",
    answer: "A Request for Reconsideration is a formal legal letter sent to IRCC asking the visa officer to reopen and review their decision. This is highly effective if we can prove the officer made a clear administrative error or ignored evidence that was included in your original application."
  },
  {
    question: "If I was refused once, will I be automatically refused again?",
    answer: "No, a prior refusal does not mean you are permanently banned from Canada. However, subsequent applications will be scrutinized much more heavily. You must directly address the reasons for the previous denial with strong, new evidence."
  },
  {
    question: "My study permit was refused because they didn't believe I would leave Canada. How do we fix this?",
    answer: "This is the most common refusal ground. We counter this by building a comprehensive portfolio of your 'ties to your home country.' This includes family connections, property ownership, job offers awaiting your return, and a highly detailed study plan explaining exactly how this Canadian degree advances your career back home."
  },
  {
    question: "How long does it take to get GCMS notes?",
    answer: "Under the Access to Information and Privacy (ATIP) Act, IRCC legally has 30 days to process the request for GCMS notes, though delays can sometimes occur. We initiate this request immediately to get your strategy moving as fast as possible."
  },
  {
    question: "Can I use an immigration consultant for a Judicial Review?",
    answer: "No. If your refusal requires a Judicial Review at the Federal Court, only a licensed Canadian lawyer is legally permitted to represent you. Consultants cannot litigate cases before federal judges."
  },
  {
    question: "What happens if I received a Procedural Fairness Letter (PFL)?",
    answer: "A PFL is not a refusal yet—it is a final warning. It means the officer has serious concerns (often regarding misrepresentation or criminality) and is giving you a strict deadline to respond. You must hire a lawyer immediately to draft a robust, legally sound response to prevent an outright refusal and a potential 5-year ban."
  },
  {
    question: "Is it better to reapply or go to Federal Court?",
    answer: "It entirely depends on the facts of your case. If your original application was weak or missing documents, reapplying is usually faster and cheaper. If your application was perfect and the officer’s decision was legally unreasonable, a Judicial Review is often the only way to force a fair assessment."
  },
  {
    question: "How can your law firm help me overturn my visa refusal?",
    answer: "We take the guesswork out of the process. We diagnose the exact cause of the refusal, develop a targeted legal strategy, draft comprehensive legal submission letters, and perfectly assemble your new application or court filings to maximize your chances of approval."
  }
];

export const metadata = {
  title: 'Visa Refusal Lawyer in Surrey BC | Overturn IRCC Denials | Gurna Law',
  description: 'Was your Canadian visa, study permit, or PR refused? Gurna Law Corporation provides expert legal strategies to overcome IRCC refusals, including GCMS analysis and reapplications.',
  canonical: 'https://www.gurnalaw.ca/services/visa-refusal',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'Visa Refusal Lawyer in Surrey BC | Overturn IRCC Denials | Gurna Law',
    description: 'Was your Canadian visa, study permit, or PR refused? Gurna Law Corporation provides expert legal strategies to overcome IRCC refusals, including GCMS analysis and reapplications.',
    url: 'https://www.gurnalaw.ca/services/visa-refusal',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function VisaRefusalService() {
  return (
    <>
      <InnerBanner
        type="service"
        serviceName="Visa Refusals"
        title="Visa Refusal Lawyer"
        subtitle="Turn a Refusal Into an Approval With Strategic Legal Intervention and Reapplications."
        image="/images/banner/VisaRefusalLawyer.png" 
      />
      
      <Introduction
        subtitle="Overcoming IRCC Denials"
        title="A Refusal Is Not the End of Your Canadian Dream"
        details={[
            "Opening a letter from Immigration, Refugees and Citizenship Canada (IRCC) only to find your visa, study permit, or permanent residency application has been refused is heartbreaking. The generic refusal letters provided by the government offer very little explanation, leaving you confused, frustrated, and unsure of what went wrong. However, it is crucial to understand that a refusal does not mean your journey to Canada is over.",
            "The worst thing you can do after a refusal is panic and blindly reapply. At Gurna Law Corporation, we take a tactical, evidence-based approach to overturning negative decisions. We start by uncovering the visa officer’s hidden internal notes to find the exact root of the problem. From there, we build a formidable legal strategy—whether that involves drafting a formal Request for Reconsideration, assembling a flawless reapplication with overwhelming new evidence, or escalating the matter to the Federal Court. We are here to clear your path forward."
        ]}
      />
      
      <WhyChoose
        content={whyChooseFeatures}
        title="How We Attack a Visa Refusal"
        subtitle="Strategic Legal Solutions"
        description="Overcoming a denial requires precision, not guesswork. Discover how our targeted legal interventions dismantle the officer's concerns and put your application back on track for success."
      />
      
      <DynamicListSection
        type="service"
        name="Visa Refusals"
        locations={LOCATIONS}
        subtitle="Serving Across British Columbia"
        title="Areas Served by Gurna Law Corporation"
        description="We provide highly effective legal strategies for clients facing visa refusals across multiple locations in British Columbia, ensuring you have the expert advocacy needed to overcome IRCC hurdles."
      />
      
      <FAQS
        content={faqs}
        title="Canadian Visa Refusals – Frequently Asked Questions"
        subtitle="FAQ – Your Next Steps"
        description="A refusal generates a lot of questions. We have compiled clear, actionable answers to help you understand your legal options, timelines, and the best way to move forward after an IRCC denial."
      />
      <Testimonials />
      <FooterCTA type="service" serviceName="Visa Refusals" />
    </>
  );
}