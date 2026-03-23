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
    title: "Deeply Rooted in Richmond",
    desc: "We understand the diverse, multicultural fabric of Richmond. Our legal team provides tailored Canadian immigration strategies that respect your unique background and community ties.",
    icon: <GraduationCap className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Precision in Every Application",
    desc: "IRCC leaves no room for error. We meticulously prepare, cross-check, and submit your documentation to ensure total compliance, preventing frustrating delays and safeguarding your future.",
    icon: <FileText className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Vigorous Legal Advocacy",
    desc: "Whether you are facing a sudden visa denial or a complex admissibility issue at a port of entry like YVR, our lawyers provide the aggressive, strategic representation you need to protect your status.",
    icon: <Scale className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Honest, Transparent Guidance",
    desc: "Immigration law is incredibly complex, but your experience with us won't be. We translate complicated legal statutes into clear, actionable advice so you always know where your case stands.",
    icon: <ShieldCheck className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Seamless Settlement Support",
    desc: "Our commitment to you extends past your visa approval. We offer practical guidance to help you integrate into Richmond's dynamic local economy and establish a strong foundation in Canada.",
    icon: <Compass className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Strategies Designed for Your Life",
    desc: "There is no 'one size fits all' in immigration. We take a holistic look at your personal, familial, and professional goals to build a custom legal roadmap designed specifically for you.",
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
    question: "What Canadian immigration services do you provide in Richmond?",
    answer: "We offer a comprehensive range of legal services for Richmond residents, including permanent residency pathways, family and spousal sponsorships, business immigration, and complex federal court appeals."
  },
  {
    question: "How do I schedule an immigration consultation in Richmond?",
    answer: "Getting expert legal advice is simple. You can reach out via phone or email, and our team will quickly set up a consultation to discuss your specific immigration challenges and outline the best path forward."
  },
  {
    question: "My application was refused. Can your lawyers help me appeal?",
    answer: "Absolutely. We routinely handle difficult refusal cases. We will aggressively analyze the visa officer's decision, identify the legal errors or factual gaps, and build a compelling case for an appeal or reconsideration."
  },
  {
    question: "Can you assist with border and port of entry issues at YVR?",
    answer: "Yes. Given Richmond's proximity to the Vancouver International Airport (YVR), we frequently advise clients on CBSA matters, including inadmissibility flags, detained travelers, and complex entry requirements."
  },
  {
    question: "Is the information I share with your firm kept confidential?",
    answer: "Without question. As legal professionals regulated by the Law Society of British Columbia, every detail you share with us is protected by strict solicitor-client privilege and remains entirely private."
  },
  {
    question: "How can I sponsor my spouse or family members to join me in Richmond?",
    answer: "Reuniting families is a deeply rewarding part of our practice. We meticulously prepare Spousal, Common-Law, and Parental Sponsorship applications to ensure they meet all IRCC criteria for a smooth approval."
  },
  {
    question: "I am facing a deportation order. What are my options?",
    answer: "If you are facing removal, time is critical. We provide urgent legal intervention, representing you at Immigration and Refugee Board hearings and utilizing every available legal mechanism to keep you in Canada."
  },
  {
    question: "Do you help local Richmond businesses hire foreign workers?",
    answer: "Yes, we work closely with Richmond employers to navigate the Labour Market Impact Assessment (LMIA) process and secure temporary work permits for the essential international talent they need to grow."
  },
  {
    question: "How long will my permanent residency application take?",
    answer: "Processing times vary significantly based on the specific immigration stream and IRCC's current backlog. During our consultation, we will provide you with realistic timelines and ensure your file is perfect to avoid any self-inflicted delays."
  },
  {
    question: "My background includes a criminal record. Can I still immigrate?",
    answer: "Criminal inadmissibility is a serious hurdle, but it is not always a permanent block. Our senior legal team can help you apply for Criminal Rehabilitation or a Temporary Resident Permit (TRP) to legally overcome these past issues."
  }
];

export const metadata = {
  title: 'Expert Immigration Lawyer in Richmond | Gurna Law Corporation',
  description: 'Need an experienced immigration lawyer in Richmond, BC? We provide strategic legal representation for visas, PR, business immigration, and appeals. Book today!',
  canonical: 'https://www.gurnalaw.ca/immigration-lawyer-in-richmond',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'Expert Immigration Lawyer in Richmond | Gurna Law Corporation',
    description: 'Need an experienced immigration lawyer in Richmond, BC? We provide strategic legal representation for visas, PR, business immigration, and appeals. Book today!',
    url: 'https://www.gurnalaw.ca/immigration-lawyer-in-richmond',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function ImmigrationLawyerRichmond() {
  return (
    <>
      <InnerBanner
        type="location"
        locationName="Richmond"
        title="Immigration Lawyer In Richmond"
        subtitle="Navigate Canadian Immigration With Confidence and Expert Legal Counsel in Richmond, BC."
        image="/images/banner/VisaRefusalLawyer.png"
      />
      
      <Introduction
        subtitle="Gurna Law Corporation"
        title="Your Strategic Immigration Advocates in Richmond"
        details={[
            "Richmond is renowned for its vibrant multiculturalism and booming local economy, making it a premier destination for newcomers and global talent. However, Canada’s immigration policies are strict, and the application process is notoriously unforgiving. A single missing document or misunderstood question can result in devastating delays or outright refusals.",
            "That is exactly why you need an experienced legal advocate on your side. Serving the diverse community of Richmond, our firm brings years of highly specialized Canadian immigration and litigation expertise to the table. Whether you are navigating a complex spousal sponsorship, dealing with a port of entry issue at YVR, or fighting an unjust visa denial in federal court, we provide the meticulous, aggressive representation required to secure your future in British Columbia."
        ]}
      />
      
      <WhyChoose
        content={whyChooseFeatures}
        title="How We Protect Your Status and Your Future"
        subtitle="Why Choose Gurna Law Corporation in Richmond"
        description="Navigating the shifting landscape of Canadian immigration law requires more than just filling out forms; it requires strategy. We provide our Richmond clients with elite, proactive legal counsel designed to conquer bureaucratic hurdles and deliver tangible results."
      />
      
      <DynamicListSection
        type="location"
        name="Richmond"
        practiceAreas={PRACTICE_AREAS}
        subtitle="Richmond Immigration Practice"
        title="Comprehensive Legal Services in Richmond"
        description="Explore the extensive range of Canadian immigration services we offer to our Richmond clients, spanning from standard permanent residency filings to highly complex litigation and appeals."
      />
      
      <FAQS
        content={faqs}
        title="Richmond Immigration Law – Frequently Asked Questions"
        subtitle="FAQ – Expert Legal Support"
        description="Read through our comprehensive answers to the most common immigration questions we receive from clients in Richmond. We are committed to providing you with the clarity you need to move forward confidently."
      />
      <Testimonials />
      <FooterCTA type="location" locationName="Richmond" />
    </>
  );
}