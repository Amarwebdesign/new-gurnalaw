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
    title: "Urgent Detention Response",
    desc: "When detained by CBSA, your first review happens within 48 hours. We provide rapid legal intervention to ensure you have strong representation from the very first hearing.",
    icon: <Clock className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Strategic Release Plans",
    desc: "Securing release requires a flawless plan. We work quickly to identify suitable bondspersons (guarantors) and propose strict but manageable conditions to satisfy the ID Member that you are not a flight risk.",
    icon: <ShieldCheck className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Aggressive Admissibility Defense",
    desc: "If you are facing allegations of criminality, misrepresentation, or medical inadmissibility, we aggressively cross-examine CBSA officers and challenge their evidence to protect your status in Canada.",
    icon: <Gavel className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Meticulous Evidence Preparation",
    desc: "We dive deep into the facts. Whether proving your identity, demonstrating rehabilitation, or disproving a security threat, we compile the necessary documents and expert reports to build a formidable defense.",
    icon: <FileText className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Expertise in IRPA Regulations",
    desc: "ID hearings are governed by complex sections of the Immigration and Refugee Protection Act (IRPA). Our lawyers possess the specialized statutory knowledge needed to hold the government accountable.",
    icon: <Scale className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Pathways to Appeals",
    desc: "If an ID hearing results in a removal order, the fight isn't over. We immediately evaluate your eligibility to appeal to the Immigration Appeal Division (IAD) or seek a Judicial Review at the Federal Court.",
    icon: <AlertCircle className="w-8 h-8 text-[#C8102E]" />
  }
];

const faqs = [
  {
    question: "What is an Immigration Division (ID) Hearing?",
    answer: "The Immigration Division (ID) of the Immigration and Refugee Board conducts two main types of hearings: Detention Reviews (to decide if a person detained by CBSA should be released) and Admissibility Hearings (to determine if a person is legally allowed to enter or remain in Canada)."
  },
  {
    question: "Why would CBSA detain someone?",
    answer: "The Canada Border Services Agency (CBSA) can detain foreign nationals or permanent residents for three main reasons: they believe the person is a 'flight risk' (unlikely to appear for removal), they pose a danger to the public, or their identity has not been adequately established."
  },
  {
    question: "What are the timelines for a Detention Review?",
    answer: "The timelines are extremely fast. By law, the ID must hold your first detention review within 48 hours of you being detained. If you are not released, the next review is in 7 days, and subsequent reviews occur every 30 days thereafter. Immediate legal representation is crucial."
  },
  {
    question: "What is a 'Release Plan' and why do I need one?",
    answer: "To win a detention review, you cannot simply ask to be let out. We must present a concrete 'Release Plan' to the ID. This usually involves proposing a bondsperson who pledges money, establishing a verified address, and agreeing to strict conditions like curfews or regular reporting to CBSA."
  },
  {
    question: "What happens at an Admissibility Hearing?",
    answer: "In an Admissibility Hearing, the Minister’s Counsel (CBSA) argues that you have violated immigration law and should be deported. We act as your defense counsel, presenting evidence, questioning witnesses, and making legal arguments to prove you are admissible and should be allowed to stay."
  },
  {
    question: "What makes someone 'inadmissible' to Canada?",
    answer: "Common grounds for inadmissibility include criminal convictions (both inside and outside Canada), misrepresentation (lying or withholding information on an application), security risks, human rights violations, medical inadmissibility, and failing to comply with IRPA conditions."
  },
  {
    question: "Can Permanent Residents be subjected to ID Hearings?",
    answer: "Yes. While Permanent Residents have more rights than foreign nationals, they can still be detained or ordered to appear at an Admissibility Hearing—most commonly for serious criminality or prolonged absence from Canada (residency obligation violations)."
  },
  {
    question: "If I lose my Admissibility Hearing, am I deported immediately?",
    answer: "If the ID issues a removal order, you may have the right to appeal the decision to the Immigration Appeal Division (IAD) within a strict timeframe. If you have no right to appeal to the IAD, we can immediately file for a Judicial Review at the Federal Court to halt the removal."
  },
  {
    question: "Who can act as a bondsperson for my release?",
    answer: "A bondsperson (or guarantor) must be a Canadian citizen or Permanent Resident, be over 18, have a clean criminal record, and possess the financial means to pledge the required bond amount. The ID must find them trustworthy to ensure you follow your release conditions."
  },
  {
    question: "Do I really need a lawyer for a 48-hour detention review?",
    answer: "Absolutely. The 48-hour review sets the tone for your entire case. Without a lawyer to cross-examine the CBSA officer and present a viable release plan, you are highly likely to be kept in detention. Having experienced counsel from day one drastically improves your chances of release."
  }
];

export const metadata = {
  title: 'ID Hearings & Detention Review Lawyer BC | Gurna Law',
  description: 'Facing a CBSA detention or Admissibility Hearing? Gurna Law Corporation provides urgent, aggressive legal defense at the Immigration Division (ID) across BC.',
  canonical: 'https://www.gurnalaw.ca/services/id-hearings',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'ID Hearings & Detention Review Lawyer BC | Gurna Law',
    description: 'Facing a CBSA detention or Admissibility Hearing? Gurna Law Corporation provides urgent, aggressive legal defense at the Immigration Division (ID) across BC.',
    url: 'https://www.gurnalaw.ca/services/id-hearings',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function IDHearingsService() {
  return (
    <>
      <InnerBanner
        type="service"
        serviceName="ID Hearings"
        title="Immigration Division Hearings"
        subtitle="Urgent Legal Defense for Detention Reviews and Admissibility Hearings in BC."
        image="/images/banner/VisaRefusalLawyer.png"
      />
      
      <Introduction
        subtitle="Immigration and Refugee Board (IRB)"
        title="Aggressive Defense Against CBSA Actions"
        details={[
            "Being detained by the Canada Border Services Agency (CBSA) or receiving a Notice to Appear for an Admissibility Hearing is one of the most frightening experiences an immigrant can face. The Immigration Division (ID) is the tribunal where these high-stakes matters are decided. Whether the government alleges you are a flight risk, a danger to the public, or inadmissible due to criminality or misrepresentation, your freedom and your right to remain in Canada are directly on the line.",
            "In these situations, time is your greatest enemy. By law, your first detention review must occur within 48 hours. You need an advocate who can step in immediately. At Gurna Law Corporation, we provide urgent, strategic intervention. We know how to cross-examine CBSA officers, dismantle weak government allegations, and build ironclad release plans to secure your freedom. If you are facing an admissibility hearing, we will fiercely defend your rights and fight to prevent a removal order from being issued."
        ]}
      />
      
      <WhyChoose
        content={whyChooseFeatures}
        title="Why You Need Us at the Immigration Division"
        subtitle="Rapid Response & Strategic Litigation"
        description="Facing CBSA requires specialized tribunal litigation skills. Discover how our aggressive defense strategies and expertly crafted release plans can protect your freedom and your status in Canada."
      />
      
      <DynamicListSection
        type="service"
        name="ID Hearings and Detention Reviews"
        locations={LOCATIONS}
        subtitle="Serving Across British Columbia"
        title="Areas Served by Gurna Law Corporation"
        description="We provide urgent legal representation for Immigration Division hearings, detention reviews, and admissibility cases to clients across multiple locations in British Columbia."
      />
      
      <FAQS
        content={faqs}
        title="ID Hearings & Detention Reviews – Frequently Asked Questions"
        subtitle="FAQ – Defending Your Freedom"
        description="When dealing with CBSA detentions and admissibility allegations, understanding your rights is critical. Read our clear answers to the most urgent questions regarding Immigration Division proceedings."
      />
      <Testimonials />
      <FooterCTA type="service" serviceName="ID Hearings" />
    </>
  );
}