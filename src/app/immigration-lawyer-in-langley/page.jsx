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
    title: "Dedicated to the Langley Community",
    desc: "As a law firm serving Langley and the Fraser Valley, we offer highly specialized Canadian immigration knowledge to help local individuals, families, and businesses thrive.",
    icon: <GraduationCap className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Error-Free Application Processing",
    desc: "We know that a single mistake can derail your future. Our legal professionals meticulously assemble and review your IRCC applications to ensure absolute accuracy and compliance.",
    icon: <FileText className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Strong Representation in Your Corner",
    desc: "From overcoming sudden visa refusals to navigating complex hearings, we stand firmly by your side, providing aggressive and effective legal representation when you need it most.",
    icon: <Scale className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Clear Communication, Zero Guesswork",
    desc: "We strip away the confusing legal jargon. You will receive consistent updates and straightforward advice so you always know the exact status of your immigration case.",
    icon: <ShieldCheck className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Settling into the Fraser Valley",
    desc: "Our commitment extends beyond your visa approval. We offer strategic advice to help you establish your new life, find local opportunities, and smoothly transition into the Langley community.",
    icon: <Compass className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Custom-Built Legal Pathways",
    desc: "Every immigrant's journey is distinct. We take the time to deeply understand your background and engineer a customized legal strategy designed for your long-term success in Canada.",
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
    question: "What immigration services do you offer to people in Langley?",
    answer: "We provide a full suite of Canadian immigration services for Langley residents. This includes managing Express Entry profiles, handling spousal and family sponsorships, securing work permits, and mounting robust appeals for refused applications."
  },
  {
    question: "How can I arrange an immigration consultation in Langley?",
    answer: "Reaching us is easy. You can call our office directly or fill out our online contact form. Our dedicated team will promptly set up a consultation to discuss your Canadian immigration goals and timeline."
  },
  {
    question: "Can your lawyers help if my Canadian visa was denied?",
    answer: "Yes, we specialize in overturning negative decisions. We will dissect the visa officer's refusal notes, correct the underlying issues, and mount a strong appeal or reapplication on your behalf."
  },
  {
    question: "What should I prepare for my first meeting with you?",
    answer: "To give you the best possible advice from day one, please bring your current passport, any past immigration correspondence from IRCC, refusal letters, and details of your work or study history."
  },
  {
    question: "Is my personal information kept private?",
    answer: "Absolutely. We are bound by the strict ethical rules of the Law Society of British Columbia. Every detail you share with our legal team is kept strictly confidential and secure."
  },
  {
    question: "Can you help me bring my family to live with me in Langley?",
    answer: "Family reunification is a cornerstone of what we do. We expertly navigate the complex paperwork for spousal, common-law, and parental sponsorships so you can be together in the Fraser Valley sooner."
  },
  {
    question: "Do you handle deportation or removal orders?",
    answer: "Yes. If you are facing a removal order, you need immediate legal intervention. We provide aggressive defense strategies and represent clients at immigration hearings to fight for their right to stay in Canada."
  },
  {
    question: "Can you assist with study or work permits for the Fraser Valley?",
    answer: "Certainly. Whether you are looking to study at a local educational institution or have a job offer from a business in Langley, we ensure your temporary resident applications are flawless and processed efficiently."
  },
  {
    question: "How long does the Canadian immigration process take?",
    answer: "Processing times vary widely depending on the type of application and IRCC's current volume. During our consultation, we will give you a realistic estimate and work diligently to avoid any internal delays on our end."
  },
  {
    question: "My situation is quite complicated. Can you still represent me?",
    answer: "We welcome complex cases. Whether you are dealing with previous refusals, medical issues, or criminal inadmissibility, our experienced lawyers know how to craft creative legal solutions to overcome these barriers."
  }
];

export const metadata = {
  title: 'Top Immigration Lawyer in Langley | Trusted Legal Counsel',
  description: 'Need a reliable immigration lawyer in Langley, BC? Gurna Law Corporation offers expert legal guidance for visas, permanent residency, and appeals. Contact us today!',
  canonical: 'https://www.gurnalaw.ca/immigration-lawyer-in-langley',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'Top Immigration Lawyer in Langley | Trusted Legal Counsel',
    description: 'Need a reliable immigration lawyer in Langley, BC? Gurna Law Corporation offers expert legal guidance for visas, permanent residency, and appeals. Contact us today!',
    url: 'https://www.gurnalaw.ca/immigration-lawyer-in-langley',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function ImmigrationLawyerLangley() {
  return (
    <>
      <InnerBanner
        type="location"
        locationName="Langley"
        title="Immigration Lawyer In Langley"
        subtitle="Achieve Your Immigration Goals With Proven Legal Guidance in Langley, BC."
        image="/images/banner/VisaRefusalLawyer.png"
      />
      
      <Introduction
        subtitle="Gurna Law Corporation"
        title="Your Strategic Immigration Partners in Langley"
        details={[
            "Langley offers a unique blend of growing economic opportunities and community-focused living, making it an ideal destination for newcomers. However, Canada’s immigration system is notoriously strict. Without the right legal guidance, navigating the intricate web of IRCC requirements can lead to unnecessary delays or heartbreaking refusals.",
            "That is where we come in. Serving the Langley community and the broader Fraser Valley, our legal team brings extensive experience in Canadian immigration law and litigation. Whether you need assistance securing a temporary work permit, applying for permanent residency, or challenging an unjust refusal in federal court, we provide the robust, personalized advocacy you need to confidently secure your future in Canada."
        ]}
      />
      
      <WhyChoose
        content={whyChooseFeatures}
        title="How We Advocate for Our Langley Clients"
        subtitle="Why Choose Gurna Law Corporation in Langley"
        description="Don't leave your Canadian future to chance. We provide our clients in Langley with proactive, top-tier legal representation, untangling complex immigration laws to deliver clear, actionable pathways to success."
      />
      
      <DynamicListSection
        type="location"
        name="Langley"
        practiceAreas={PRACTICE_AREAS}
        subtitle="Langley Immigration Practice"
        title="Comprehensive Legal Services in Langley"
        description="Discover the wide spectrum of immigration legal services we offer to our Langley clients, from straightforward visa processing to highly specialized appellate advocacy."
      />
      
      <FAQS
        content={faqs}
        title="Langley Immigration Law – Frequently Asked Questions"
        subtitle="FAQ – Fraser Valley Legal Support"
        description="Review our clear, straightforward answers to the questions we hear most often from clients in Langley. We want you to feel informed and empowered as you begin your immigration journey."
      />
      <Testimonials />
      <FooterCTA type="location" locationName="Langley" />
    </>
  );
}