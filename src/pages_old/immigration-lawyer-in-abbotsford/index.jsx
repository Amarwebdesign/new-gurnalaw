import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import HeroInnerPage from "@/components/Layout/HeroInnerPage";

import FaqItem from '@/components/Layout/Faq/Faqitem';
import Container from "@/components/Layout/Container";
import SectionHeading from "@/components/Layout/SectionHeading";
import Btn from "@/components/Layout/Btns/Btn";
import Layer from "@/components/Home/Imagrationlayer/Layer";
import Canidianimg from "@/components/Home/Imagrationlayer/Canidianimg";
export default function Index({ preview }) {
  return (
    <Layout preview={preview}>
            <Head>
            <title>Top Immigration Lawyer in Abbotsford | Fast & Trusted Help</title>
            <meta name="description" content="Need an Immigration Lawyer in Abbotsford, BC, Canada? We can help! Get expert guidance for visas, work permits & citizenship. Book a consultation today!" />
            <link rel="canonical" href="https://www.gurnalaw.ca/immigration-lawyer-in-abbotsford" />
            <meta property="og:site_name" content="Gurna Law Corporation - Canadian immigration lawyer in BC" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Top Immigration Lawyer in Abbotsford | Fast & Trusted Help" />
            <meta property="og:description" content="Need an Immigration Lawyer in Abbotsford, BC, Canada? We can help! Get expert guidance for visas, work permits & citizenship. Book a consultation today!" />
            <meta property="og:url" content="https://www.gurnalaw.ca/immigration-lawyer-in-abbotsford" />
            <meta property="og:image" content="/images/saravpreet-singh-gurna-law-corporation-2.png" />
            </Head>
            <HeroInnerPage
            title="Immigration Lawyer in Abbotsford"
            backgroundImageUrl="/images/banner/VisaRefusalLawyer.png"
            content="Empower Your Canadian Dream With Our Immigration Services."
            />

       <Layer/>
       <Canidianimg/>

      <section className="bg-black py-32">
    <Container>
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
                <div className='sm:max-w-sm'>
                    <div className="sticky top-[150px] text-white">
                        <SectionHeading
                            minititlecolor="text-yellow"
                            minititle="Immigration Lawyer"
                            title="FAQs"
                            description="Your Immigration Questions Answered – Visas, Work Permits, Family Sponsorships, and More. Get Trusted Legal Advice in Abbotsford Today!"
                        />
                        <div className='mt-5'>
                            <Btn link="/contact" title="get a quote" />
                        </div>
                    </div>
                </div>
                <div id="tab-accordion" className="col-span-2 faq-accordion" itemScope="" itemType="https://schema.org/FAQPage">
                    <FaqItem
                        question="What immigration services does Gurna Law Corporation offer in Abbotsford?"
                        answer="Gurna Law Corporation provides a full range of immigration services in Abbotsford, including visa applications, permanent residency, family sponsorships, citizenship, and deportation defense."
                    />
                    <FaqItem
                        question="How can I schedule an immigration consultation in Abbotsford?"
                        answer="To schedule a consultation with our Abbotsford immigration lawyer, contact Gurna Law Corporation by phone or email. Our team will help you set up an appointment that fits your schedule."
                    />
                    <FaqItem
                        question="Can Gurna Law Corporation assist with visa refusals or appeals?"
                        answer="Yes. We handle visa refusal and appeal cases for clients in Abbotsford and across BC. Our lawyers analyze refusal reasons, prepare strong appeal submissions, and represent clients throughout the process."
                    />
                    <FaqItem
                        question="What documents should I bring for an immigration consultation?"
                        answer="Please bring your passport, visa or permit copies, previous immigration correspondence, and any supporting documents related to your case. These help us provide accurate and efficient legal advice."
                    />
                    <FaqItem
                        question="How does Gurna Law Corporation maintain client confidentiality?"
                        answer="Confidentiality is a top priority at Gurna Law Corporation. All client information is handled with strict legal and ethical standards to ensure your privacy is protected during every step of your immigration process."
                    />
                    <FaqItem
                        question="Does Gurna Law Corporation assist with family sponsorship cases?"
                        answer="Yes. We help clients in Abbotsford reunite with their families through well-prepared family sponsorship applications, ensuring all requirements are met for a smooth approval process."
                    />
                    <FaqItem
                        question="What sets Gurna Law Corporation’s immigration services apart in Abbotsford?"
                        answer="Our Abbotsford immigration lawyer offers personalized service, deep legal knowledge, and a results-focused approach that prioritizes your immigration success and peace of mind."
                    />
                    <FaqItem
                        question="Can Gurna Law Corporation help with work or study permits?"
                        answer="Absolutely. We assist with various permits, including work, study, and visitor visas. Our lawyers ensure your applications are complete, compliant, and well-documented to maximize approval chances."
                    />
                    <FaqItem
                        question="How long does the immigration process usually take?"
                        answer="Processing times vary based on your application type. We keep clients updated throughout the process and provide realistic timelines based on current IRCC processing standards."
                    />
                    <FaqItem
                        question="What if I have more questions about immigration in Abbotsford?"
                        answer="You can reach out to Gurna Law Corporation anytime. Our Abbotsford immigration team is ready to answer your questions and guide you through every stage of your immigration journey."
                    />
                </div>
            </div>
        </div>
    </Container>
     </section>
 
       
    </Layout>
  );
}

