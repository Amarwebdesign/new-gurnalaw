
import Hero from "@/components/Pages/Home/Hero";
import About from "@/components/Pages/Home/About";
import Expertise from "@/components/Pages/Home/Expertise";
import LegalServices from "@/components/Pages/Home/LegalServices";
import Testimonials from "@/components/Testimonials";
import FAQS from "@/components/FAQS";


const faqs = [
  {
    question: "What immigration services does Gurna Law Corporation offer?",
    answer: "Gurna Law Corporation specializes in a range of immigration services, including visa applications, family sponsorship, and deportation defense.",
  },
  {
    question: "How can I schedule an immigration consultation?",
    answer: "To schedule an immigration consultation, please contact our office in Surrey by phone or email. Our team will assist you in setting up an appointment.",
  },
  {
    question: "Can Gurna Law Corporation assist with visa refusals?",
    answer: "Yes, our experienced immigration lawyers handle visa refusal cases. We assess the reasons, formulate appeal strategies, and represent clients in the appeals process.",
  },
  {
    question: "What documents are needed for an immigration consultation?",
    answer: "For an immigration consultation, bring relevant documents such as passports, visa history, and any immigration-related paperwork to help us assess your case accurately.",
  },
  {
    question: "How does Gurna Law Corporation ensure confidentiality during immigration cases?",
    answer: "Client confidentiality is a top priority. We adhere to strict ethical standards and legal practices to safeguard your information throughout the immigration process. For more detailed information or to schedule a consultation, please feel free to contact Gurna Law Corporation.",
  },
  {
    question: "How does Gurna Law Corporation approach family sponsorship cases?",
    answer: "Our approach to family sponsorship involves thorough case analysis, strategic planning, and meticulous documentation to facilitate successful reunification with your loved ones in Canada.",
  },
  {
    question: "What sets Gurna Law Corporation's deportation defense apart?",
    answer: "Our deportation defense strategies are tailored to each case, leveraging our legal expertise to protect your rights and explore avenues for relief, ensuring the best possible outcome.",
  },
  {
    question: "Can Gurna Law Corporation help with work or study visas?",
    answer: "Absolutely. Our immigration lawyers assist with various visas, including work and study visas. We navigate the application process, ensuring accuracy and compliance with regulations.",
  },
  {
    question: "How long does the immigration process typically take with Gurna Law Corporation?",
    answer: "The duration varies based on the type of immigration service. We strive for efficiency and keep clients informed throughout the process, providing realistic timelines for each case.",
  },
  {
    question: "What if I have additional questions not covered here?",
    answer: "Feel free to reach out to Gurna Law Corporation for any additional inquiries. Our team is here to provide personalized assistance and address any concerns you may have about your immigration matters.",
  },
];





export const metadata = {
  title: 'Immigration Lawyer in Canada | Gurna Law Corporation',
  description: 'Gurna Law Corporation is offering services of Canadian immigration. These services include immigration law, visa refusal, & citizenship.',
  canonical: 'https://www.gurnalaw.ca',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'Immigration Lawyer in Canada | Gurna Law Corporation',
    description: 'Gurna Law Corporation is offering services of Canadian immigration. These services include immigration law, visa refusal, & citizenship.',
    url: 'https://www.gurnalaw.ca',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Expertise />
    <LegalServices />
    <Testimonials />
    <FAQS 
        content={faqs}
        title="Your Legal Questions Answered"
        subtitle="FAQ"
        description="Clear answers to common immigration concerns handled by Gurna Law."
    />
    </>
  );
}
