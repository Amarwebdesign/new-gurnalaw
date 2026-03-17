import Image from "next/image";
import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import Btn from "@/components/Layout/Btns/Btn";
import BtnContact from "@/components/Layout/Btns/BtnContact";
import Container from "@/components/Layout/Container";
import SectionHeading from "@/components/Layout/SectionHeading";
import ImageAnimated from "@/components/Layout/ImageAnimated";
import ImageAnimated2 from "@/components/Layout/ImageAnimated2";
import FaqItem from '@/components/Layout/Faq/Faqitem';
import CitizenshipCarousel from "@/components/Citizenship/CitizenshipCarousel";

export const metadata = {
  title: 'Citizenship Lawyer in Surrey BC Canada | Fast & Trusted Help',
  description: 'Need an Immigration Lawyer in Surrey, BC, Canada? We can help! Get expert guidance for visas, work permits & citizenship. Get consultations!',
  canonical: 'https://www.gurnalaw.ca/citizenship-lawyer',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'Citizenship Lawyer in Surrey BC Canada | Fast & Trusted Help',
    description: 'Need an Immigration Lawyer in Surrey, BC, Canada? We can help! Get expert guidance for visas, work permits & citizenship. Get consultations!',
    url: 'https://www.gurnalaw.ca/citizenship-lawyer',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function Citizenship() {
  const Year = new Date();
  const CurrentYear = Year.getFullYear();
  const experience = CurrentYear - 2011;

  return (
    <>
      <HeroInnerPage
        title="Citizenship Lawyer"
        backgroundImageUrl='/images/banner/CitizenshipLawyer.png'
        content="Immigration Lawyer In Canada."
      />
      <section className="section law-about-area">
        <Container ContainerClass="">
          <div className="lg:grid grid-cols-2 gap-[100px] items-center">
            <div className=" relative">
              <div className="grid grid-cols-2 gap-5">
                <div className="col-md-6">
                  <div className="law-about-left-title mt-[60px] mb-[20px] bg-blue text-white flex items-center gap-3">
                    <div className="flex items-center w-16 h-16">
                      <svg className="w-full h-auto" id="Layer_1" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path fill="#fff" d="m19 39-8 12 20-6.67v17.67h2v-17.67l20 6.67-8-12 13-10.61-4.95-.7 3.54-7.78-7.78 3.53-.71-4.95-9.1 10.51 2-22-5 5-4-10-4 10-5-5 2 22-9.1-10.51-.71 4.95-7.78-3.53 3.54 7.78-4.95.7z"/></svg>
                    </div>
                    <div className="font-bold text-lg">Expertise in Immigration Law</div>
                  </div>
                  <div className="">
                    <ImageAnimated2
                      width="285"
                      height="440"
                      src="/images/home/about-img.webp"
                      alt="Citizenship Lawyer Canada"
                      classname="rounded-md"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="h-[450px]">
                    <ImageAnimated
                      width="1080"
                      height="450"
                      src="/images/immgration.png"
                      alt="Top Immigration Lawyers in Canada"
                      classname="rounded-md"
                    />
                  </div>
                  <div className="experience-circle w-[150px] h-[150px] md:w-[250px] md:h-[250px] relative">
                    <div className="animated-cirlce-img">
                      <Image src="/images/banner/experience-circle.svg" alt="Immigration Lawyer In Surrey" width={250} height={250} className="w-full" />
                    </div>
                    <div className="text-center font-bold h-[150px] md:h-[250px] flex items-center relative">
                      <div className="text-center w-full">
                        <div className="text-[20px] md:text-[70px] leading-tight text-yellow">{experience}+</div>
                        <div className="text-[20px]">Years Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 lg:mt-0">
              <SectionHeading
                align="text-left"
                minititlecolor="text-yellow"
                minititle="Gurna Law Corporation"
                title="Realize Your Canadian Dream With Our Citizenship Law Expertise."
                description="Our skilled lawyers specialize in guiding you through the intricacies of the citizenship application process, ensuring a seamless experience. With a client-focused approach, we prioritize your goals, providing comprehensive support to make your dream of Canadian citizenship a reality. Trust us to navigate the legal landscape and empower your journey with confidence."
              />
              <div className="mt-10 grid grid-cols-2 gap-3 items-center">
                <Btn link="bc-pnp-points-calculator-canada" title="BG PNP Calculator" btnclass="btn-secondary"/>
                <BtnContact link="contact" title="Get A Free Estimate" btnclass="btn-primary"/>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-[#f0f0f0]">
        <div className=" max-w-[900px] m-auto">
          <SectionHeading
            align="text-center"
            minititlecolor="text-yellow"
            minititle="Gurna Law Corporation"
            title="How A Canadian Citizenship Lawyer Can Assist You."
            description="Navigating the intricacies of Canadian citizenship can be daunting, but a skilled citizenship lawyer can make the process seamless. From ensuring accurate documentation to representing your interests, they provide invaluable support. Whether you're applying for citizenship, facing challenges, or seeking legal guidance, a Canadian citizenship lawyer is your ally, maximizing your chances of success and empowering your journey toward becoming a Canadian citizen."
          />
        </div>
        <CitizenshipCarousel />
      </section>

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
                  question="What services does a citizenship lawyer at Gurna Law Corporation provide?"
                  answer="Our citizenship lawyers specialize in guiding clients through the Canadian citizenship application process, offering comprehensive legal support."
                />
                <FaqItem
                  question="Why should I hire a citizenship lawyer for my application?"
                  answer="A citizenship lawyer ensures your application is accurate, complete, and compliant, increasing the likelihood of a successful outcome."
                />
                <FaqItem
                  question="What documents are required for a consultation with a Gurna Law Corporation citizenship lawyer?"
                  answer="Bring relevant documents, including your passport, residency history, and other supporting paperwork for a thorough case assessment."
                />
                <FaqItem
                  question="Can Gurna Law Corporation assist with complex citizenship cases?"
                  answer="Yes, our experienced citizenship lawyers handle a range of cases, including those with complexities, ensuring tailored strategies for success."
                />
                <FaqItem
                  question="How does Gurna Law Corporation approach the citizenship application process?"
                  answer="Client confidentiality is a top priority. We adhere to strict ethical standards and legal practices to safeguard your information throughout the immigration process.\n\nFor more detailed information or to schedule a consultation, please feel free to contact Gurna Law Corporation."
                />
                <FaqItem
                  question="What if my citizenship application is denied? Can Gurna Law Corporation assist with appeals?"
                  answer="Absolutely. Our lawyers assess the reasons for denial, formulate effective appeal strategies, and represent clients during the appeals process for the best possible outcome."
                />
                <FaqItem
                  question="How long does the citizenship application process typically take with Gurna Law Corporation?"
                  answer="The duration varies, but our team works efficiently to keep clients informed throughout the process, providing realistic timelines for each case."
                />
                <FaqItem
                  question="Can Gurna Law Corporation assist with dual citizenship applications?"
                  answer="Yes, our citizenship lawyers provide guidance on dual citizenship matters, ensuring compliance with Canadian laws and regulations."
                />
                <FaqItem
                  question="What is the success rate of Gurna Law Corporation in citizenship applications?"
                  answer="We have a substantial success rate, attributed to our meticulous approach and legal expertise in handling diverse citizenship cases."
                />
                <FaqItem
                  question="How can I schedule a consultation with a Gurna Law Corporation citizenship lawyer?"
                  answer="To schedule a consultation, contact our Surrey office by phone or email. Our team will assist you in setting up an appointment to discuss your citizenship goals and concerns."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}