import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import HeroInnerPage from "@/components/Layout/HeroInnerPage";

import FaqItem from '@/components/Layout/Faq/Faqitem';
import Container from "@/components/Layout/Container";
import SectionHeading from "@/components/Layout/SectionHeading";
import Btn from "@/components/Layout/Btns/Btn";
import Layer from "@/components/Home/Imagrationlayer/Layer";
import Canidianimg from "@/components/Home/Imagrationlayer/Canidianimg";
import ImmigrationVancouver from "@/components/Home/Imagrationlayer/ImmigrationVancouver";
export default function Index({ preview }) {
  return (
    <Layout preview={preview}>
            <Head>
            <title>Top Immigration Lawyer in Vancouver | Fast & Trusted Help</title>
            <meta name="description" content="Need an Immigration Lawyer in Vancouver, BC, Canada? We can help! Get expert guidance for visas, work permits & citizenship. Book a consultation today!" />
            <link rel="canonical" href="https://www.gurnalaw.ca/immigration-lawyer-in-vancouver" />
            <meta property="og:site_name" content="Gurna Law Corporation - Canadian immigration lawyer in BC" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Top Immigration Lawyer in Vancouver | Fast & Trusted Help" />
            <meta property="og:description" content="Need an Immigration Lawyer in Vancouver, BC, Canada? We can help! Get expert guidance for visas, work permits & citizenship. Book a consultation today!" />
            <meta property="og:url" content="https://www.gurnalaw.ca/immigration-lawyer-in-vancouver" />
            <meta property="og:image" content="/images/saravpreet-singh-gurna-law-corporation-2.png" />
            </Head>

        <HeroInnerPage
        title="Immigration Lawyer in Vancouver"
        backgroundImageUrl="/images/banner/immigration-lawyer-vancouver.webp"
        content=""
        />
     
       <ImmigrationVancouver/>
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
                            description="Your Immigration Questions Answered – Visas, Work Permits, Family Sponsorships, and More. Get Trusted Legal Advice in Vancouver Today!"
                        />
                        <div className='mt-5'>
                            <Btn link="/contact" title="get a quote" />
                        </div>
                    </div>
                </div>
                <div id="tab-accordion" className="col-span-2 faq-accordion" itemScope="" itemType="https://schema.org/FAQPage">
                <FaqItem
                    question="Do I need an immigration lawyer in Vancouver or can I apply on my own?"
                    answer="While you can apply independently, an immigration lawyer in Vancouver helps avoid costly mistakes, improves application accuracy, and increases approval chances for complex cases."
                />
                <FaqItem
                    question="What types of Canadian immigration pathways do you handle in Vancouver?"
                    answer="We handle Express Entry, provincial nominee programs, family sponsorships, work permits, study permits, humanitarian applications, and citizenship matters for Vancouver clients."
                />
                <FaqItem
                    question="Can an immigration lawyer help if I am out of status in Canada?"
                    answer="Yes. Our Vancouver immigration lawyer assists clients who are out of status by exploring restoration, humanitarian relief, or other legal pathways available under Canadian law."
                />
                <FaqItem
                    question="Do you represent clients dealing with deportation or removal orders?"
                    answer="Yes. Gurna Law Corporation represents clients facing removal orders, inadmissibility issues, and enforcement actions, providing strong legal defense and strategic options."
                />
                <FaqItem
                    question="Can you help employers in Vancouver with LMIA applications?"
                    answer="Yes. We assist Vancouver employers with LMIA applications, compliance requirements, and hiring foreign workers while meeting all federal immigration standards."
                />
                <FaqItem
                    question="What makes immigration cases in Vancouver unique?"
                    answer="Vancouver immigration cases often involve high application volumes and strict scrutiny. Our local experience helps clients navigate regional trends and IRCC expectations effectively."
                />
                <FaqItem
                    question="Do you assist international students transitioning to permanent residency?"
                    answer="Yes. We guide international students in Vancouver from study permits to post-graduation work permits and permanent residency pathways suited to their profiles."
                />
                <FaqItem
                    question="How early should I contact an immigration lawyer before applying?"
                    answer="It is best to consult an immigration lawyer early in the process to plan your strategy, identify risks, and choose the most suitable immigration pathway."
                />
                <FaqItem
                    question="Can you help if my immigration situation is urgent or time-sensitive?"
                    answer="Yes. We handle urgent immigration matters such as expiring permits, deadlines, and emergency filings, providing prompt legal support when timing is critical."
                />
                <FaqItem
                    question="What should I expect during my first consultation with a Vancouver immigration lawyer?"
                    answer="During your consultation, we assess your eligibility, explain available options, outline risks, and provide a clear legal roadmap tailored to your immigration goals."
                />

                </div>
            </div>
        </div>
    </Container>
     </section>
 
       
    </Layout>
  );
}

