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
    title: "Navigating Residency Rules",
    desc: "Calculating your exact physical presence in Canada can be incredibly confusing, especially with frequent travel. We precisely calculate your eligible days to ensure you meet the strict 1095-day requirement.",
    icon: <Clock className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Tackling Residency Questionnaires",
    desc: "If IRCC doubts your physical presence, they will issue a complex Residency Questionnaire (RQ). We meticulously compile the massive amount of financial, employment, and personal evidence required to satisfy their audit.",
    icon: <FileText className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Overcoming Past Criminality",
    desc: "A past criminal charge can bring your application to a sudden halt. We analyze your background to determine if you are eligible to apply, or if we need to secure criminal rehabilitation first.",
    icon: <ShieldCheck className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Federal Court Interventions",
    desc: "If your citizenship application has been stalled in processing for an unreasonable amount of time, we can file a Writ of Mandamus in the Federal Court to legally force IRCC to make a final decision.",
    icon: <Gavel className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Dual Citizenship Guidance",
    desc: "We provide clear, actionable advice on how acquiring a Canadian passport will interact with your current nationality, helping you navigate the complexities of holding dual citizenship.",
    icon: <Compass className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Flawless Application Assembly",
    desc: "A single missing tax document or unsigned form can cause months of delays. We perfectly assemble your application from day one, giving IRCC exactly what they need for a swift approval.",
    icon: <Award className="w-8 h-8 text-[#C8102E]" />
  }
];

const faqs = [
  {
    question: "What are the basic requirements to apply for Canadian citizenship?",
    answer: "You must be a Permanent Resident, have lived in Canada for at least 1,095 days out of the 5 years right before you apply, have filed your taxes for at least 3 of those years, pass a citizenship test, and prove your language skills in English or French."
  },
  {
    question: "Does my time as a temporary resident (student or worker) count towards my citizenship?",
    answer: "Yes! Every day you spent in Canada as a temporary resident or protected person within the 5-year eligibility period counts as a half-day, up to a maximum of 365 days. We will help you calculate this accurately to apply as soon as possible."
  },
  {
    question: "What is a Residency Questionnaire (RQ)?",
    answer: "An RQ is an intense audit by IRCC. If they suspect you do not meet the physical presence requirements, they will ask for a mountain of proof (bank statements, lease agreements, employment records) to verify your time in Canada. We highly recommend legal counsel to navigate an RQ."
  },
  {
    question: "Can I apply for citizenship if I have a criminal record?",
    answer: "It depends heavily on the type of offense, where it occurred, and the timeline. Time spent serving a term of imprisonment, on parole, or on probation in Canada does not count as time lived in Canada. You must speak with our lawyers before applying to prevent a refusal or potential PR revocation."
  },
  {
    question: "Does Canada allow dual citizenship?",
    answer: "Yes, Canada fully permits dual or multiple citizenships. However, you must verify the laws of your home country, as some nations will automatically revoke your original citizenship the moment you swear the Canadian oath."
  },
  {
    question: "My application has been processing for years. What can I do?",
    answer: "If your application has exceeded normal processing times without a valid reason, we can file a 'Writ of Mandamus' in the Federal Court. This is a powerful legal tool that asks a federal judge to compel IRCC to finalize your application immediately."
  },
  {
    question: "What happens if my Canadian citizenship application is refused?",
    answer: "If IRCC refuses your citizenship application, you have the right to challenge that decision in the Federal Court of Canada. However, you have an incredibly strict deadline of 30 days to file the appeal, so immediate legal action is required."
  },
  {
    question: "Do children need to meet the 1095-day physical presence requirement?",
    answer: "No. If a minor (under 18) is applying for citizenship at the same time as a parent, or if they already have a Canadian parent, they do not need to meet the strict physical presence requirement."
  },
  {
    question: "What happens during the citizenship interview and test?",
    answer: "Applicants between 18 and 54 must pass a written test on Canadian history, geography, and rights. You will also have a brief interview with an IRCC official to verify your application details, original documents, and your language abilities."
  },
  {
    question: "Why should I hire a lawyer instead of applying on my own?",
    answer: "While the application seems straightforward, minor discrepancies in your travel history or tax filings can trigger a grueling Residency Questionnaire or a refusal. We provide absolute peace of mind by ensuring your application is flawless, legally sound, and optimized for the fastest possible processing."
  }
];

export const metadata = {
  title: 'Citizenship Lawyer in BC | Canadian Citizenship | Gurna Law',
  description: 'Ready to become a Canadian citizen? Gurna Law Corporation provides expert legal guidance for citizenship applications, residency questionnaires, and appeals across BC.',
  canonical: 'https://www.gurnalaw.ca/services/citizenship',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'Citizenship Lawyer in BC | Canadian Citizenship | Gurna Law',
    description: 'Ready to become a Canadian citizen? Gurna Law Corporation provides expert legal guidance for citizenship applications, residency questionnaires, and appeals across BC.',
    url: 'https://www.gurnalaw.ca/services/citizenship',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function CitizenshipService() {
  return (
    <div className="font-['Inter']">
      <InnerBanner
        type="service"
        serviceName="Citizenship"
        title="Canadian Citizenship Lawyer"
        subtitle="Achieve Your Ultimate Goal With Flawless Legal Guidance to Secure Your Canadian Passport."
        image="/images/banner/VisaRefusalLawyer.png" 
      />
      
      <Introduction
        subtitle="The Final Step in Your Journey"
        title="Securing Your Future as a Canadian"
        details={[
            "Taking the Oath of Citizenship is the ultimate milestone in your Canadian immigration journey. Earning your Canadian passport gives you the right to vote, run for political office, and travel the globe with one of the most powerful passports in the world. It provides the absolute security that you can never be deported, cementing your permanent home in British Columbia.",
            "While applying for citizenship may seem like a straightforward paperwork exercise, it is heavily scrutinized by Immigration, Refugees and Citizenship Canada (IRCC). Discrepancies in your travel dates, complicated tax histories, or past legal issues can trigger severe delays or complex Residency Questionnaires. At Gurna Law Corporation, we remove the stress from this monumental step. We calculate your physical presence with total precision, tackle administrative roadblocks, and ensure your path to the citizenship ceremony is as smooth and rapid as possible."
        ]}
      />
      
      <WhyChoose
        content={whyChooseFeatures}
        title="Why Partner With Us for Your Citizenship?"
        subtitle="Strategic Legal Advocacy"
        description="Securing your Canadian passport requires meticulous attention to detail. Discover how our dedicated legal team simplifies the process and fiercely protects your eligibility from start to finish."
      />
      
      <DynamicListSection
        type="service"
        name="Citizenship"
        locations={LOCATIONS}
        subtitle="Serving Across British Columbia"
        title="Areas Served by Gurna Law Corporation"
        description="We provide expert Canadian citizenship application and litigation support to individuals and families across multiple locations in British Columbia."
      />
      
      <FAQS
        content={faqs}
        title="Canadian Citizenship – Frequently Asked Questions"
        subtitle="FAQ – Your Path to the Passport"
        description="The path to citizenship comes with many detailed rules and timelines. We have compiled clear, straightforward answers to the most common questions to help you prepare for this final, exciting step."
      />
      <Testimonials />
      <FooterCTA type="service" serviceName="Citizenship" />
    </div>
  );
}