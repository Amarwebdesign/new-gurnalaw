
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
    title: "Expert Immigration Knowledge in Surrey",
    desc: "Gurna Law Corporation offers in-depth knowledge of Canadian immigration laws, providing strategic legal guidance tailored for individuals and families in Surrey and surrounding areas.",
    icon: <GraduationCap className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Accurate Application & Documentation Support",
    desc: "Immigration applications can be complex. Gurna Law Corporation ensures that all forms are completed accurately and that supporting documentation meets legal requirements, reducing the risk of delays or refusals.",
    icon: <FileText className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Strong Legal Representation",
    desc: "Gurna Law Corporation provides professional representation for clients in Surrey, including handling visa refusals, appeals, and complex immigration matters before relevant authorities.",
    icon: <Scale className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Clarity & Peace of Mind",
    desc: "Immigration processes can be stressful. Gurna Law Corporation delivers clear legal direction, timely updates, and structured case handling to ensure confidence at every stage.",
    icon: <ShieldCheck className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Guidance for Settling in Surrey, Canada",
    desc: "Beyond legal services, Gurna Law Corporation provides practical insights for starting a new life in Surrey, including settlement guidance, local opportunities, and long-term planning.",
    icon: <Compass className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Personalized Legal Strategies",
    desc: "Every immigration case is unique. Gurna Law Corporation develops customized legal strategies based on individual circumstances to improve the chances of successful outcomes.",
    icon: <Users className="w-8 h-8 text-[#C8102E]" />
  }
];
const PRACTICE_AREAS = [
  { name: 'Judicial Reviews', slug: 'judicial-reviews', icon: <Gavel className="w-6 h-6 text-[#E5B55E]" /> },
  { name: 'Immigration Appeals', slug: 'immigration-appeals', icon: <AlertCircle className="w-6 h-6 text-[#E5B55E]" /> },
  { name: 'IRCC Applications', slug: 'ircc-applications', icon: <FileText className="w-6 h-6 text-[#E5B55E]" /> },
  { name: 'Refugee Claims and Appeals', slug: 'refugee-claims', icon: <ShieldCheck className="w-6 h-6 text-[#E5B55E]" /> },
  { name: 'ID Hearings', slug: 'id-hearings', icon: <Building2 className="w-6 h-6 text-[#E5B55E]" /> },
  { name: 'Visa Refusal', slug: 'visa-refusal', icon: <FileSignature className="w-6 h-6 text-[#E5B55E]" /> },
  { name: 'Citizenship Lawyer', slug: 'citizenship', icon: <Award className="w-6 h-6 text-[#E5B55E]" /> },
  { name: 'Notary Public', slug: 'notary-public', icon: <Scale className="w-6 h-6 text-[#E5B55E]" /> }
];
const faqs = [
  {
    question: "What immigration services do you offer in Surrey, BC?",
    answer: "We specialize in a comprehensive range of Canadian immigration services right here in Surrey. Our expertise includes Express Entry, family sponsorship, judicial reviews, and visa appeals, specifically tailored to help our local Surrey community and surrounding areas."
  },
  {
    question: "How can I schedule an immigration consultation with your Surrey office?",
    answer: "Booking with us is easy! To schedule your immigration consultation, you can call or email our Surrey law office directly. Our dedicated team will happily assist you in setting up an appointment at a time that works best for you."
  },
  {
    question: "Can your Surrey immigration lawyers help me with a visa refusal?",
    answer: "Yes, we certainly can. Our experienced Surrey immigration lawyers regularly handle complex visa refusal cases. We will sit down with you to carefully assess the reasons for your refusal, formulate a strong appeal strategy, and passionately represent you throughout the entire appeals process."
  },
  {
    question: "What documents should I bring to my immigration consultation?",
    answer: "To help us evaluate your case as accurately as possible, we ask that you bring any relevant documents to your consultation. This typically includes your passport, visa history, and any previous immigration-related paperwork you have received."
  },
  {
    question: "How do you ensure my confidentiality during my immigration case?",
    answer: "Your confidentiality is our absolute top priority. We adhere to the strictest legal and ethical standards in British Columbia to completely safeguard your personal information throughout your entire immigration journey with us."
  },
  {
    question: "How do your lawyers handle Canadian family sponsorship cases?",
    answer: "We know how important family is. Our approach to family sponsorship in Surrey involves a thorough analysis of your unique case, strategic planning, and meticulous documentation. We do everything in our power to facilitate a successful reunification with your loved ones here in Canada."
  },
  {
    question: "Why should I choose your Surrey law firm for my deportation defense?",
    answer: "We take deportation defense very seriously. Our defense strategies are highly tailored to your specific situation. We leverage our deep legal expertise to fiercely protect your rights, explore every available avenue for relief, and work tirelessly to ensure the best possible outcome for you."
  },
  {
    question: "Can you help me apply for a Canadian work or study visa?",
    answer: "Absolutely! We assist countless clients in Surrey and abroad with securing various visas, including work permits and study visas. We will personally guide you through the complex application process, ensuring total accuracy and strict compliance with Canadian immigration regulations."
  },
  {
    question: "How long will my immigration process take?",
    answer: "The timeline really depends on the specific type of immigration application. However, we always strive for maximum efficiency. We promise to keep you fully informed at every step of the process and will provide you with realistic, honest timelines for your specific case from day one."
  },
  {
    question: "What if I have more questions about my immigration matter in Surrey?",
    answer: "Please feel free to reach out to us directly! Our Surrey legal team is always here to provide you with personalized assistance and happily address any other concerns or questions you might have about your immigration goals."
  }
];
export const metadata = {
  title: 'Top Immigration Lawyer in Surrey | Fast & Trusted Help',
  description: 'Need an Immigration Lawyer in Surrey, BC, Canada? We can help! Get expert guidance for visas, work permits & citizenship. Get consultations!',
  canonical: 'https://www.gurnalaw.ca/immigration-lawyer-in-surrey',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'Top Immigration Lawyer in Surrey | Fast & Trusted Help',
    description: 'Need an Immigration Lawyer in Surrey, BC, Canada? We can help! Get expert guidance for visas, work permits & citizenship. Get consultations!',
    url: 'https://www.gurnalaw.ca/immigration-lawyer-in-surrey',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function ImmigrationLawyerSurrey() {
  return (
    <>
  
      <InnerBanner
        type="location"
        locationName="Surrey"
        title="Immigration Lawyer In Surrey"
        subtitle="Empower Your Canadian Dream With Our Immigration Services in Surrey, BC."
        image="/images/banner/VisaRefusalLawyer.png"
        />
        <Introduction
        subtitle="Gurna Law Corporation"
        title="Expert Immigration Lawyers in Surrey"
        details={[
            "As a land of opportunity, Canada is a popular destination for many seeking to start a new life. However, the immigration process can be challenging, with many rules and regulations to navigate, even the slightest mistake can negatively impact your application.",
            "Fortunately, hiring an experienced immigration lawyer in Canada can make all the difference. As a law firm based out of Surrey, we are well-versed in the complexities of immigration law and can provide the guidance and support you need to achieve your goals. With our help, you can emigrate from any country to Canada, without stress or hassle. we have over ten years of international litigation experience to draw from.",
        ]}
        />
        <WhyChoose
            content={whyChooseFeatures}
            title="How an Immigration Lawyer in Surrey Can Assist You"
            subtitle="Why Choose Gurna Law Corporation"
            description="Canadian immigration laws can be complex and difficult to navigate without professional guidance. Gurna Law Corporation provides strategic legal assistance for individuals and families in Surrey, ensuring compliance with immigration regulations while maximizing the chances of successful outcomes."
        />
        <DynamicListSection
        type="location"
        name="Surrey"
        practiceAreas={PRACTICE_AREAS}
        subtitle="Surrey Immigration Services"
        title="Immigration Legal Services in Surrey"
        description="Explore comprehensive immigration legal services offered by Gurna Law Corporation in Surrey, including applications, appeals, and strategic legal representation."
        />
      <FAQS
        content={faqs}
        title="Immigration Lawyer in Surrey – Frequently Asked Questions"
        subtitle="FAQ – Surrey Immigration Services"
        description="Find clear, reliable answers to common immigration questions handled by Gurna Law Corporation in Surrey. Each response is designed to help individuals and families understand legal processes, requirements, and available options."
        />
        <Testimonials />
    <FooterCTA type="location" locationName="Surrey" />
    </>
  );
}