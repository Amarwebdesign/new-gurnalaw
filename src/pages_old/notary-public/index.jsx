import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout/Layout";
import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import Btn from "@/components/Layout/Btns/Btn";
import BtnContact from "@/components/Layout/Btns/BtnContact";
import Container from "@/components/Layout/Container";
import SectionHeading from "@/components/Layout/SectionHeading";
import ImageAnimated from "@/components/Layout/ImageAnimated";
import ImageAnimated2 from "@/components/Layout/ImageAnimated2";
import MoreServiceItem from '@/components/Home/MoreServices/MoreServiceItem';
import LegalSlideItem from "@/components/Home/LegalServices/LegalSlideItem";
import FaqItem from '@/components/Layout/Faq/Faqitem';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';

export default function NotaryPublic() {
  const Year=new Date();
    const CurrentYear = Year.getFullYear();
    const experience=CurrentYear-2011;
  return (
    <Layout>
        <Head>
            <title>Notary Public in Surrey BC - Gurna law Corporation</title>
            <meta name="description" content="ur experienced notary upholds the highest standards of professionalism, offering services such as document notarization, certification of copies, and assistance with real estate transactions." />
            <link rel="canonical" href="https://www.gurnalaw.ca/notary-public" />
            <meta property="og:site_name" content="Gurna Law Corporation - Canadian immigration lawyer in BC" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Notary Public in Surrey BC - Gurna law Corporation" />
            <meta property="og:description" content="ur experienced notary upholds the highest standards of professionalism, offering services such as document notarization, certification of copies, and assistance with real estate transactions." />
            <meta property="og:url" content="https://www.gurnalaw.ca/notary-public" />
            <meta property="og:image" content="/images/saravpreet-singh-gurna-law-corporation-2.png" />
        </Head>
        <HeroInnerPage
            title="Notary Public
            "backgroundImageUrl='/images/banner/nortryy.jpg'
            content="Immigration Lawyer In Canada."
            />
         <section className="section law-about-area">
          <Container>
              <div className="lg:grid grid-cols-2 gap-[100px] items-center">
                  <div className=" relative">
                      <div className="grid grid-cols-2 gap-5" >
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
                                      alt="Notary public in Surrey BC"
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
                                      alt="Notary in Surrey
                                      "
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
                      minititlecolor="text-yellow" minititle="Gurna Law Corporation"
                      title="Notary Public
                      .
                      "
                      description="At Gurna Law, our Notary Public services in Surrey ensure accurate and reliable document notarization. Our experienced notary upholds the highest standards of professionalism, offering services such as document notarization, certification of copies, and assistance with real estate transactions. Located conveniently in Surrey, we prioritize efficiency and accessibility, ensuring your essential legal documents receive meticulous attention and meet all required standards.

                      "
                      />
                      <div className="mt-10 grid grid-cols-2 gap-3 items-center">
                          <Btn link="bc-pnp-points-calculator-canada" title="BG PNP Calculator" btnclassName="btn-secondary"/>
                          <BtnContact link="contact" title="Get A Free Estimate"/>
                      </div>                    
                  </div>
              </div>
          </Container>
      </section>

      <section className="section section-services bg-white">
            <Container>
                <SectionHeading
                align="text-center"
                minititlecolor="text-yellow" minititle="Gurna Law Corporation
                "
                title="How A Canadian Lawyer Can Assist You.
                "
                description="A notary public lawyer in Canada is your legal ally, ensuring the authenticity of documents through precise notarization. Beyond this, they provide invaluable legal guidance, clarifying the implications of your paperwork. Whether certifying copies or offering insights, these professionals prioritize precision and clarity. Moreover, their commitment to confidentiality establishes a trustful environment, safeguarding your privacy throughout the notarization process. Engage a notary public lawyer for thorough legal support and assurance in handling your important documents."
                />
                <div className="mt-16">   
                    
                        <MoreServiceItem
                            image="/images/1.png"
                            title="Business Documents
                            "
                            description="Gurna Law's Surrey Notary Public ensures precise notarization for your business documents, providing efficient and legally sound services for smooth transactions.

                            "
                        />
                        <MoreServiceItem
                            image="/images/2.png"
                            title="Personal Agreements
                            "
                            description="Gurna Law's Surrey Notary Public offers precise notarization for personal agreements, ensuring legality and accuracy in every essential document you entrust.

                            "
                        />
                        <MoreServiceItem
                            image="/images/3.png"
                            title="Privacy Matters
                            "
                            description="Gurna Law's Surrey Notary Public ensures privacy matters with precise notarization, upholding legal standards for confidential and secure document handling.

                            "
                        />
                        
                </div>	
            </Container >
        </section> 
         

        <section className="section bg-[#f0f0f0]">
		<div className=" max-w-[900px] m-auto">
		
		</div>
		<div className="legal-services-slider mt-[100px]">
		<Swiper
			modules={[Navigation]}
			spaceBetween={20}
			navigation
			loop={true}
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			>
			<SwiperSlide className="hway group">
				<LegalSlideItem
				image="/images/imagritionlayer-1.webp"
				title="Document Notarization
                "
				description="A notary public lawyer in Canada plays a crucial role in the accurate and legal notarization of documents. From personal agreements to business contracts, they ensure proper execution and authentication.
                "/>
			</SwiperSlide>
			<SwiperSlide className="group">				
				<LegalSlideItem
					image="/images/imagritionlayer-2.webp"
					title="Legal Consultation
                    "

                   description="Beyond notarization, these lawyers offer valuable legal advice. They can help you understand the implications of the documents you're notarizing, providing clarity on legal matters.
                   "/>

                </SwiperSlide>
			<SwiperSlide className="group" > 
				<LegalSlideItem
				image="/images/imagritionlayer-3.png"
				title="Certification Of Copies

                "
				description="Need certified copies of important documents? A notary public lawyer can provide this service, adding an extra layer of authenticity to crucial paperwork.

                "
				/>
			</SwiperSlide>

            <SwiperSlide className="group">
				<LegalSlideItem
				image="/images/imagritionlayer-4.webp"
				title="Privacy And Confidentiality


                "
				description="Engaging a notary public lawyer ensures privacy and confidentiality in handling sensitive documents. They adhere to legal standards, safeguarding your personal and business information throughout the notarization process.


                "
				/>
			</SwiperSlide>

            
			</Swiper>
			</div>
		</section>


        <section className="bg-black py-32">
        <Container>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
                    <div className='sm:max-w-sm'>
                        <div className=" sticky top-[150px] text-white">
                            <SectionHeading
                            minititlecolor="text-yellow" minititle="Immigration Lawyer

                            "
                            title="FAQs"
                            description="Your Legal Queries Answered – Immigration, Citizenship, Notary Services, And More. Discover Expert Guidance Today!
                            "
                            />
                            <div className='mt-5'>
                                <Btn link="/contact" title="get a quote" />
                            </div>
                        </div>
                    </div>
                    <div id="tab-accordion" className="col-span-2 faq-accordion" itemScope="" itemType="https://schema.org/FAQPage">
                      <FaqItem
                      question="What services does a notary public at Gurna Law Corporation offer?"
                      answer="Our notary public provides services such as document notarization, certification of copies, and assistance with real estate transactions."
                      />
                      <FaqItem
                      question="Why should I use a notary public for my documents?"
                      answer="A notary public ensures the legality and authenticity of your documents, making them legally recognized and credible.

                      "
                      />
                      <FaqItem
                      question="Can Gurna Law Corporation assist with business document notarization?"
                      answer="Yes, our notary public services extend to business documents, ensuring accuracy and legality for various transactions.

                      "
                      />
                      <FaqItem
                      question="How can I schedule a notary public appointment at Gurna Law Corporation?"
                      answer="To schedule an appointment, contact our Surrey office by phone or email, and our team will assist you in setting up a convenient time.

                      "
                      />
                      <FaqItem
                      question="What documents are typically notarized by Gurna Law Corporation's notary public?"
                      answer="Our notary public can notarize a wide range of documents, including contracts, agreements, affidavits, and real estate documents."
                      />
                      <FaqItem
                      question="Can Gurna Law Corporation certify copies of important documents?"
                      answer="Yes, our notary public can certify true copies of important documents, providing an additional layer of authenticity for legal purposes."
                      />
                      <FaqItem
                      question="How does Gurna Law Corporation ensure confidentiality during notarization?"
                      answer="Client confidentiality is a top priority. Our notary public adheres to strict ethical standards and legal practices to safeguard your information.

                      "
                      />
                      <FaqItem
                      question="What is the turnaround time for notarization services at Gurna Law Corporation?"
                      answer="The turnaround time varies based on the complexity and volume of documents, but we strive for efficiency to meet your timelines.

                      "
                      />
                      <FaqItem
                      question="Can Gurna Law Corporation notarize documents for international use?"
                      answer="Yes, our notary public can notarize documents for international use, ensuring they meet the necessary standards and requirements.

                      "
                      />
                      <FaqItem
                      question="How much does it cost for notary public services at Gurna Law Corporation?"
                      answer="Our notary public services are competitively priced. For specific cost details, please contact our office, and our team will provide you with the relevant information."
                      />
                    </div>
                </div>
            </div>
        </Container>
    </section>
    </Layout>
  );
}