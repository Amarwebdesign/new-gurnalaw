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
    title: "Trauma-Informed Legal Care",
    desc: "We understand that discussing past persecution is deeply traumatic. Our legal team provides a safe, compassionate environment to help you articulate your story clearly and effectively for the tribunal.",
    icon: <ShieldCheck className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Expert BOC Form Preparation",
    desc: "Your Basis of Claim (BOC) form is the foundation of your case. We meticulously draft this critical document to ensure there are no inconsistencies that could damage your credibility later.",
    icon: <FileText className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Robust Evidence Gathering",
    desc: "A successful claim requires proof. We actively assist in gathering powerful corroborating evidence, including detailed National Documentation Packages (NDPs), country condition reports, and expert medical or psychological evaluations.",
    icon: <Compass className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Intensive Hearing Preparation",
    desc: "Testifying before the Refugee Protection Division (RPD) is intimidating. We conduct rigorous mock hearings to prepare you for the aggressive cross-examination you may face from the tribunal member or Minister's Counsel.",
    icon: <Users className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Skilled RAD Appeals",
    desc: "If your initial claim is refused, the fight isn't over. We possess the highly specialized appellate skills required to challenge legal and factual errors at the Refugee Appeal Division (RAD).",
    icon: <Gavel className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Urgent Deadline Management",
    desc: "Refugee law has some of the strictest deadlines in Canadian immigration. From the 15-day limit to submit an inland BOC to urgent appeal filings, we ensure your rights are never forfeited due to a missed date.",
    icon: <Clock className="w-8 h-8 text-[#C8102E]" />
  }
];

const faqs = [
  {
    question: "Who is eligible to make a refugee claim in Canada?",
    answer: "To be granted asylum, you must prove you are either a 'Convention Refugee' (facing persecution based on race, religion, political opinion, nationality, or membership in a particular social group) or a 'Person in Need of Protection' (facing a personalized risk to your life, or risk of cruel and unusual treatment or punishment)."
  },
  {
    question: "What is the Basis of Claim (BOC) form?",
    answer: "The BOC is the most important document in your refugee claim. It is where you detail exactly who you are, why you are claiming refugee protection, and what happened to you in your home country. Any inconsistencies between your BOC and your oral testimony can result in a refusal based on credibility."
  },
  {
    question: "Can I work in Canada while waiting for my refugee hearing?",
    answer: "Yes. Once your refugee claim is deemed eligible to be referred to the Immigration and Refugee Board (IRB), and you have completed your medical exam, we can help you apply for an open work permit so you can support yourself financially while awaiting your hearing."
  },
  {
    question: "What happens at the Refugee Protection Division (RPD) hearing?",
    answer: "Your RPD hearing is a private, formal proceeding where an IRB Member will ask you detailed questions about your BOC and your fear of returning home. We will be there with you to make legal objections, ask clarifying questions, and deliver final legal submissions summarizing why you deserve protection."
  },
  {
    question: "My refugee claim was rejected. What are my options?",
    answer: "If the RPD refuses your claim, you generally have the right to appeal to the Refugee Appeal Division (RAD). You have only 15 days from receiving the written reasons to file a Notice of Appeal, making immediate legal action crucial."
  },
  {
    question: "How is a RAD appeal different from the initial RPD hearing?",
    answer: "Unlike the RPD, a RAD appeal is typically a paper-based process. There is rarely an oral hearing. Instead, we submit a detailed legal memorandum arguing that the RPD Member made an error in law, in fact, or a mixed error of both. You generally cannot submit new evidence to the RAD unless it meets very strict criteria."
  },
  {
    question: "What if I am not eligible to appeal to the RAD?",
    answer: "Certain claimants (such as those who entered via the Safe Third Country Agreement or have a claim deemed 'manifestly unfounded') cannot appeal to the RAD. In these cases, we must immediately apply for a Judicial Review at the Federal Court of Canada."
  },
  {
    question: "What is a Pre-Removal Risk Assessment (PRRA)?",
    answer: "If your refugee claim and appeals have failed, and you are facing imminent removal from Canada, a PRRA is often your last line of defense. It assesses whether sending you back *now* would put your life in danger due to new risks that arose after your original hearing."
  },
  {
    question: "Can my family back home be included in my refugee claim?",
    answer: "If you are recognized as a Protected Person in Canada, you can include your immediate family members (spouse and dependent children) in your application for Permanent Residence, even if they are still overseas. We assist with this concurrent processing to reunite your family safely."
  },
  {
    question: "Will the government provide an interpreter for my hearing?",
    answer: "Yes, the IRB provides professional interpreters for your RPD hearing at no cost to you. However, it is vital to have an experienced lawyer present who can monitor the translation and object if the interpreter mischaracterizes your testimony."
  }
];

export const metadata = {
  title: 'Refugee Claims & Appeals Lawyer in BC | Asylum Law | Gurna Law',
  description: 'Seeking asylum in Canada? Gurna Law Corporation provides expert legal representation for Refugee Claims, RPD hearings, and RAD appeals across British Columbia.',
  canonical: 'https://www.gurnalaw.ca/services/refugee-claims',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'Refugee Claims & Appeals Lawyer in BC | Asylum Law | Gurna Law',
    description: 'Seeking asylum in Canada? Gurna Law Corporation provides expert legal representation for Refugee Claims, RPD hearings, and RAD appeals across British Columbia.',
    url: 'https://www.gurnalaw.ca/services/refugee-claims',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function RefugeeClaimsService() {
  return (
    <>
      <InnerBanner
        type="service"
        serviceName="Refugee Claims"
        title="Refugee Claims & Appeals"
        subtitle="Compassionate Legal Support and Fierce Advocacy for Those Seeking Asylum in Canada."
        image="/images/banner/VisaRefusalLawyer.png"
      />
      
      <Introduction
        subtitle="Immigration and Refugee Board of Canada"
        title="Protecting Your Rights and Your Future"
        details={[
            "Canada has a proud tradition of offering a safe haven to those fleeing persecution, war, and violence. However, the process of claiming asylum is rigorous, legally complex, and emotionally taxing. To be granted protection, you must prove to the Immigration and Refugee Board (IRB) that you have a well-founded fear of persecution based on race, religion, political opinion, nationality, or membership in a particular social group, or that you face a personalized risk to your life.",
            "At Gurna Law Corporation, we understand that the stakes of a refugee claim are literally life and death. We approach every case with deep empathy and relentless legal rigor. From meticulously drafting your Basis of Claim (BOC) and gathering critical country condition evidence to preparing you for your oral hearing, we stand by your side. If your claim has been unjustly refused, we bring extensive appellate experience to fight for your safety at the Refugee Appeal Division (RAD) or the Federal Court."
        ]}
      />
      
      <WhyChoose
        content={whyChooseFeatures}
        title="Why Trust Us With Your Asylum Claim?"
        subtitle="Fierce Advocacy When It Matters Most"
        description="A successful refugee claim requires far more than just filling out forms; it requires building an airtight narrative backed by objective evidence. Discover how our dedicated legal team protects your rights throughout the entire asylum process."
      />
      
      <DynamicListSection
        type="service"
        name="Refugee Claims and Appeals"
        locations={LOCATIONS}
        subtitle="Serving Across British Columbia"
        title="Areas Served by Gurna Law Corporation"
        description="We provide expert legal representation for asylum seekers and refugee claimants across multiple locations in British Columbia, ensuring you have a strong advocate in your corner."
      />
      
      <FAQS
        content={faqs}
        title="Refugee Claims & RAD Appeals – Frequently Asked Questions"
        subtitle="FAQ – The Asylum Process"
        description="The refugee system can be intimidating and confusing. We have provided clear, honest answers to the most common questions regarding asylum claims, RPD hearings, and the appeals process."
      />
      <Testimonials />
      <FooterCTA type="service" serviceName="Refugee Claims" />
    </>
  );
}