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
    title: "Specialized IAD Expertise",
    desc: "Appeals are heard by the Immigration Appeal Division (IAD). Our lawyers have extensive experience navigating this specific tribunal, knowing exactly what tribunal members look for in a successful case.",
    icon: <Gavel className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Thorough Evidence Preparation",
    desc: "Unlike a Judicial Review, you can introduce new evidence at the IAD. We work tirelessly with you to gather compelling documents, photos, and records that directly address the reasons for your initial refusal.",
    icon: <FileText className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Mastering Alternative Dispute Resolution",
    desc: "Many appeals can be won without a formal hearing through Alternative Dispute Resolution (ADR). We are skilled negotiators who will advocate to the Minister's Counsel to settle your case early.",
    icon: <Users className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Comprehensive Witness Coaching",
    desc: "Testimony can make or break an appeal. We spend hours preparing you and your witnesses, conducting mock hearings so you feel confident and ready to answer difficult questions under cross-examination.",
    icon: <GraduationCap className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Humanitarian & Compassionate Advocacy",
    desc: "Even if the original decision was legally correct, the IAD can grant relief based on Humanitarian and Compassionate (H&C) grounds. We are adept at telling your unique story to invoke this equitable relief.",
    icon: <ShieldCheck className="w-8 h-8 text-[#C8102E]" />
  },
  {
    title: "Strict Deadline Management",
    desc: "You generally only have 30 days to file a Notice of Appeal. We act urgently to secure your rights, ensuring all preliminary filings are drafted impeccably and submitted on time.",
    icon: <Clock className="w-8 h-8 text-[#C8102E]" />
  }
];

const faqs = [
  {
    question: "What is an Immigration Appeal and how is it different from a Judicial Review?",
    answer: "An Immigration Appeal takes place at the Immigration Appeal Division (IAD). Unlike a Judicial Review (which only looks for legal errors), the IAD conducts a 'hearing de novo'. This means we can present new evidence, call witnesses, and ask the judge to make a brand-new decision based on the facts and Humanitarian and Compassionate grounds."
  },
  {
    question: "What types of immigration refusals can we appeal to the IAD?",
    answer: "The IAD hears specific types of cases: refused family class sponsorships (like spousal or parent applications), removal orders issued against Permanent Residents, and decisions where a Permanent Resident has lost their status for failing to meet residency obligations."
  },
  {
    question: "My visitor visa or study permit was denied. Can I appeal to the IAD?",
    answer: "No. Decisions for temporary visas (visitor, study, or work permits) and Express Entry applications do not have a right of appeal to the IAD. To challenge these, our firm would file a Judicial Review at the Federal Court instead."
  },
  {
    question: "How long do I have to file my appeal?",
    answer: "The deadline is extremely strict. For most IAD cases, you have only 30 days from the day you receive the written reasons for the refusal to file your Notice of Appeal. If you miss this window, you may lose your right to appeal permanently."
  },
  {
    question: "What is Alternative Dispute Resolution (ADR)?",
    answer: "ADR is an informal meeting scheduled before a full hearing. It involves you, our legal team, a Dispute Resolution Officer, and the Minister’s Counsel. If we present strong enough evidence, we can convince the Minister to concede the appeal right there, saving you months of waiting and the stress of a formal trial."
  },
  {
    question: "Do I have to testify at my immigration appeal hearing?",
    answer: "Yes, in most formal IAD hearings, your testimony is a crucial piece of evidence. You will be asked questions by our lawyers, the Minister's Counsel, and the deciding Member. We will thoroughly prepare you for this process so there are no surprises."
  },
  {
    question: "Can I bring family members to testify for me?",
    answer: "Absolutely. Witnesses who can corroborate your story—such as family members, friends, or employers—are incredibly valuable. We will help identify the best witnesses for your case and prepare them for the hearing."
  },
  {
    question: "My spouse's sponsorship was refused because they didn't believe our marriage was genuine. Can we win an appeal?",
    answer: "Yes, this is a very common scenario. An appeal gives us the opportunity to present new, updated evidence of your relationship (new photos, shared finances, communication logs) and allows you both to testify under oath to prove the genuineness of your marriage."
  },
  {
    question: "What happens if we win the appeal?",
    answer: "If the IAD allows your appeal, the original refusal is overturned. In a sponsorship case, IRCC will resume processing the application. In a removal order case, you will be allowed to remain in Canada and keep your Permanent Resident status."
  },
  {
    question: "How long does the IAD appeal process take?",
    answer: "Wait times at the IAD fluctuate. It can take anywhere from 6 to 18 months to get a hearing date, though cases resolved through ADR finish much faster. We use this waiting period strategically to build an overwhelmingly strong evidentiary record for you."
  }
];

export const metadata = {
  title: 'Immigration Appeal Lawyer in BC | IAD Hearings | Gurna Law',
  description: 'Was your family sponsorship refused or PR status revoked? Gurna Law Corporation provides expert legal representation for Immigration Appeals at the IAD across BC.',
  canonical: 'https://www.gurnalaw.ca/services/immigration-appeals',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'Immigration Appeal Lawyer in BC | IAD Hearings | Gurna Law',
    description: 'Was your family sponsorship refused or PR status revoked? Gurna Law Corporation provides expert legal representation for Immigration Appeals at the IAD across BC.',
    url: 'https://www.gurnalaw.ca/services/immigration-appeals',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function ImmigrationAppealsService() {
  return (
    <>
      <InnerBanner
        type="service"
        serviceName="Immigration Appeals"
        title="Immigration Appeals at the IAD"
        subtitle="Overcome Refusals and Protect Your Family With Strong Advocacy at the Immigration Appeal Division."
        image="/images/banner/VisaRefusalLawyer.png"
      />
      
      <Introduction
        subtitle="Immigration Appeal Division (IAD)"
        title="Your Second Chance to Prove Your Case"
        details={[
            "Having a family sponsorship rejected or facing the loss of your Permanent Resident status is a deeply distressing experience. When Immigration, Refugees and Citizenship Canada (IRCC) issues a refusal on these critical applications, it can feel like your life has been put on hold. However, a refusal is not always the final word.",
            "If you have the right to appeal to the Immigration Appeal Division (IAD), you have a powerful opportunity to set the record straight. Unlike a Judicial Review, an IAD appeal is your chance to present new evidence, call witnesses, and testify in person. At Gurna Law Corporation, we provide meticulous preparation and fearless advocacy. We know how to build a comprehensive case, navigate Alternative Dispute Resolution, and fight for your future in front of the tribunal."
        ]}
      />
      
      <WhyChoose
        content={whyChooseFeatures}
        title="Why Partner With Us for Your Appeal?"
        subtitle="Dedicated Tribunal Advocacy"
        description="Winning an appeal requires more than just filling out forms; it demands strategic litigation, deep evidentiary analysis, and persuasive storytelling. We guide you through every step of the IAD process to maximize your chances of success."
      />
      
      <DynamicListSection
        type="service"
        name="Immigration Appeals"
        locations={LOCATIONS}
        subtitle="Serving Across British Columbia"
        title="Areas Served by Gurna Law Corporation"
        description="We provide expert representation for Immigration Appeals and IAD hearings to clients across multiple locations in British Columbia, ensuring your family's future is aggressively defended."
      />
      
      <FAQS
        content={faqs}
        title="Immigration Appeals (IAD) – Frequently Asked Questions"
        subtitle="FAQ – Overcoming Refusals"
        description="The tribunal process can be complex. We have provided clear answers to the most common questions regarding Immigration Appeals to help you understand your rights, deadlines, and legal options."
      />
      <Testimonials />
      <FooterCTA type="service" serviceName="Immigration Appeals" />
    </>
  );
}