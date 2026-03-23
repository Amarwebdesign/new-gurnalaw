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
    title: "Legally Binding Affidavits",
    desc: "We meticulously draft and administer oaths for your affidavits, ensuring your sworn statements hold up to strict legal scrutiny in court or administrative proceedings.",
    icon: <Gavel className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Certified True Copies",
    desc: "When you cannot submit original documents, we rapidly authenticate copies of your passports, degrees, and vital records to satisfy government and corporate requirements.",
    icon: <FileText className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Statutory Declarations",
    desc: "We oversee your formal declarations regarding identity, marital status, or lost documents, making sure they comply with the Canada Evidence Act and provincial laws.",
    icon: <ShieldCheck className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "International Apostilles",
    desc: "If your paperwork is heading overseas, we guide you through the complex apostille and legalization process so your documents are officially recognized abroad.",
    icon: <Compass className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Travel Consent Letters",
    desc: "We prepare and formally witness travel consent letters for minors, preventing unexpected delays or denials from border security agents when a child travels without both parents.",
    icon: <FileSignature className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Prompt & Efficient Appointments",
    desc: "We know your time is incredibly valuable. We offer streamlined, highly organized appointments to get your paperwork witnessed, stamped, and finalized without the wait.",
    icon: <Clock className="w-8 h-8 text-[#C8102E]" />
  }
];

const faqs = [
  {
    question: "What exactly does a Notary Public do in BC?",
    answer: "As lawyers and Notaries Public, we act as official, impartial witnesses to the signing of legal documents. We verify your identity, ensure you understand the document you are signing, and administer oaths to prevent fraud and establish legal authenticity."
  },
  {
    question: "What type of identification do I need to bring?",
    answer: "You must bring at least two pieces of valid identification. One must be a government-issued photo ID (like a Passport or BC Driver's License), and the second can be a credit card, CareCard, or another official document with your name."
  },
  {
    question: "Can you certify a true copy of my original documents?",
    answer: "Yes, absolutely. We frequently authenticate copies of original documents such as university degrees, birth certificates, and passports. You must bring the original document with you so we can visually compare it before applying our official seal."
  },
  {
    question: "What is a Statutory Declaration?",
    answer: "A Statutory Declaration is a formal, written statement of facts that you sign and declare to be true under oath. We commonly administer these for lost passports, common-law union declarations, and name change applications."
  },
  {
    question: "Do you help with Letters of Invitation for Canadian visitor visas?",
    answer: "We certainly do. If you are inviting a family member or friend to visit Canada, we will help you draft a legally sound Letter of Invitation and officially notarize it to strengthen their temporary resident visa application."
  },
  {
    question: "Can you notarize a document that is in another language?",
    answer: "We can witness your signature on a foreign language document, but we cannot certify the accuracy of its contents if we do not speak the language. We will add a disclaimer to our seal stating that we are only verifying your identity and signature."
  },
  {
    question: "What is an apostille and do you provide it?",
    answer: "An apostille is an international certification that authenticates the origin of a public document. While we cannot issue the apostille ourselves (that is done by the provincial or federal government), we will notarize your document and guide you exactly on how to get it apostilled for international use."
  },
  {
    question: "I need a travel consent letter for my child. Can you draft it?",
    answer: "Yes, this is a very common request. We draft and formally witness travel consent letters to ensure that border authorities have the legal proof they need when a minor travels outside of Canada with only one parent or another adult."
  },
  {
    question: "Do I need to make an appointment for a notarization?",
    answer: "While we do our best to accommodate urgent walk-ins, we highly recommend calling or emailing us to book an appointment. This ensures we have a lawyer available to review your specific documents without keeping you waiting."
  },
  {
    question: "Can you give me legal advice during a notary appointment?",
    answer: "A standard notarization simply verifies your identity and signature. However, because we are fully licensed lawyers, we can absolutely provide in-depth legal advice regarding the contents and implications of your document if you request a legal consultation prior to signing."
  }
];

export const metadata = {
  title: 'Notary Public in BC | Affidavits & Certified Copies | Gurna Law',
  description: 'Need a Notary Public in British Columbia? Gurna Law Corporation offers fast, reliable notarization for affidavits, certified true copies, and statutory declarations.',
  canonical: 'https://www.gurnalaw.ca/services/notary-public',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'Notary Public in BC | Affidavits & Certified Copies | Gurna Law',
    description: 'Need a Notary Public in British Columbia? Gurna Law Corporation offers fast, reliable notarization for affidavits, certified true copies, and statutory declarations.',
    url: 'https://www.gurnalaw.ca/services/notary-public',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function NotaryPublicService() {
  return (
    <>
      <InnerBanner
        type="service"
        serviceName="Notary Public"
        title="Notary Public"
        subtitle="Fast, Reliable Authentication and Notarization for All Your Essential Legal Documents."
        image="/images/banner/VisaRefusalLawyer.png" 
      />
      
      <Introduction
        subtitle="Official Legal Authentication"
        title="Secure Your Documents With Confidence"
        details={[
            "In today’s fast-paced world, proving the authenticity of your signature and the legitimacy of your documents is more critical than ever. Whether you are finalizing a real estate transaction overseas, sponsoring a family member for immigration, or declaring lost identification, institutions demand ironclad proof. Without an official notary seal, your paperwork can be instantly rejected, causing immense stress and costly delays.",
            "At Gurna Law Corporation, our lawyers serve as trusted, impartial Notaries Public for the province of British Columbia. We provide a seamless, highly professional environment to execute your most important paperwork. From swearing complex affidavits and statutory declarations to certifying true copies of vital records, we ensure your documents are legally binding and instantly recognized by government agencies, courts, and financial institutions worldwide."
        ]}
      />
      
      <WhyChoose
        content={whyChooseFeatures}
        title="How We Support Your Legal Needs"
        subtitle="Trusted Authentication"
        description="We bring accuracy and legal authority to every signature we witness. Discover how our meticulous approach to notarization protects you from fraud and bureaucratic rejection."
      />
      
      <DynamicListSection
        type="service"
        name="Notary Public"
        locations={LOCATIONS}
        subtitle="Serving Across British Columbia"
        title="Areas Served by Gurna Law Corporation"
        description="We provide accessible, professional Notary Public support to individuals and businesses across multiple locations in British Columbia."
      />
      
      <FAQS
        content={faqs}
        title="Notary Public – Frequently Asked Questions"
        subtitle="FAQ – Document Authentication"
        description="Understanding what to bring and what to expect makes the process much smoother. Read our clear answers to the most common questions regarding notarization and document authentication."
      />
      <Testimonials />
      <FooterCTA type="service" serviceName="Notary Public" />
    </>
  );
}