import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import FaqItem from '@/components/Layout/Faq/Faqitem';
import Container from "@/components/Layout/Container";
import SectionHeading from "@/components/Layout/SectionHeading";
import Btn from "@/components/Layout/Btns/Btn";
import Layer from "@/components/Home/Imagrationlayer/Layer";

export const metadata = {
  title: 'Top Immigration Lawyer in Vancouver | Fast & Trusted Help',
  description: 'Need an Immigration Lawyer in Vancouver, BC, Canada? We can help! Get expert guidance for visas, work permits & citizenship. Get consultations!',
  canonical: 'https://www.gurnalaw.ca/immigration-lawyer-in-vancouver',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'Top Immigration Lawyer in Vancouver | Fast & Trusted Help',
    description: 'Need an Immigration Lawyer in Vancouver, BC, Canada? We can help! Get expert guidance for visas, work permits & citizenship. Get consultations!',
    url: 'https://www.gurnalaw.ca/immigration-lawyer-in-vancouver',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function ImmigrationLawyerVancouver() {
  return (
    <>
      <HeroInnerPage
        title="Immigration Lawyer In Vancouver"
        backgroundImageUrl='/images/banner/VisaRefusalLawyer.png'
        content="Empower Your Canadian Dream With Our Immigration Services."
      />

      <Layer />

      <section className="bg-black py-32">
        <Container ContainerClass="">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
              <div className='sm:max-w-sm'>
                <div className=" sticky top-[150px] text-white">
                  <SectionHeading
                    align="text-left"
                    minititlecolor="text-yellow"
                    minititle="Immigration Lawyer"
                    title="FAQs"
                    description="Your Legal Queries Answered – Immigration, Citizenship, Notary Services, and More. Discover Expert Guidance Today!"
                  />
                  <div className='mt-5'>
                    <Btn link="/contact" title="get a quote" btnclass="btn-secondary" />
                  </div>
                </div>
              </div>
              <div id="tab-accordion" className="col-span-2 faq-accordion" itemScope itemType="https://schema.org/FAQPage">
                <FaqItem
                  question="What immigration services does Gurna Law Corporation offer in Vancouver?"
                  answer="Gurna Law Corporation specializes in a range of immigration services in Vancouver, including visa applications, family sponsorship, and deportation defense."
                />
                <FaqItem
                  question="How can I schedule an immigration consultation in Vancouver?"
                  answer="To schedule an immigration consultation, please contact our office by phone or email. Our team will assist you in setting up an appointment."
                />
                <FaqItem
                  question="Can Gurna Law Corporation assist with visa refusals?"
                  answer="Yes, our experienced immigration lawyers handle visa refusal cases. We assess the reasons, formulate appeal strategies, and represent clients in the appeals process."
                />
                <FaqItem
                  question="What documents are needed for an immigration consultation?"
                  answer="For an immigration consultation, bring relevant documents such as passports, visa history, and any immigration-related paperwork to help us assess your case accurately."
                />
                <FaqItem
                  question="How does Gurna Law Corporation ensure confidentiality during immigration cases?"
                  answer="Client confidentiality is a top priority. We adhere to strict ethical standards and legal practices to safeguard your information throughout the immigration process."
                />
                <FaqItem
                  question="How does Gurna Law Corporation approach family sponsorship cases?"
                  answer="Our approach to family sponsorship involves thorough case analysis, strategic planning, and meticulous documentation to facilitate successful reunification with your loved ones in Canada."
                />
                <FaqItem
                  question="What sets Gurna Law Corporation's deportation defense apart?"
                  answer="Our deportation defense strategies are tailored to each case, leveraging our legal expertise to protect your rights and explore avenues for relief."
                />
                <FaqItem
                  question="Can Gurna Law Corporation help with work or study visas?"
                  answer="Absolutely. Our immigration lawyers assist with various visas, including work and study visas. We navigate the application process, ensuring accuracy and compliance with regulations."
                />
                <FaqItem
                  question="How long does the immigration process typically take with Gurna Law Corporation?"
                  answer="The duration varies based on the type of immigration service. We strive for efficiency and keep clients informed throughout the process."
                />
                <FaqItem
                  question="What if I have additional questions not covered here?"
                  answer="Feel free to reach out to Gurna Law Corporation for any additional inquiries. Our team is here to provide personalized assistance."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}