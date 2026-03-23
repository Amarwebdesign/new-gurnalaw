import Image from "next/image";
import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import Btn from "@/components/Layout/Btns/Btn";
import BtnContact from "@/components/Layout/Btns/BtnContact";
import Container from "@/components/Layout/Container";
import SectionHeading from "@/components/Layout/SectionHeading";
import ImageAnimated from "@/components/Layout/ImageAnimated";
import ImageAnimated2 from "@/components/Layout/ImageAnimated2";
import Testimonail from "@/components/Testimonials";

export const metadata = {
  title: 'About - Immigration Lawyer in Surrey | Fast & Trusted Help',
  description: 'Need an Immigration Lawyer in Surrey, BC, Canada? We can help! Get expert guidance for visas, work permits & citizenship. Get consultations!',
  canonical: 'https://www.gurnalaw.ca/immigration-lawyer',
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'About - Immigration Lawyer in Surrey | Fast & Trusted Help',
    description: 'Need an Immigration Lawyer in Surrey, BC, Canada? We can help! Get expert guidance for visas, work permits & citizenship. Get consultations!',
    url: 'https://www.gurnalaw.ca/immigration-lawyer',
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function About() {
  const Year = new Date();
  const CurrentYear = Year.getFullYear();
  const experience = CurrentYear - 2011;
  return (
    <>
      <HeroInnerPage
        title="About-us"
        content=""
        backgroundImageUrl='/images/inner-page-banner.webp'/>
     

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
                      alt="Immigration Lawyer in Surry"
                      classname="rounded-md"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="h-[450px]">
                    <ImageAnimated
                      width="1080"
                      height="450"
                      src="/images/about.jpeg"
                      alt="Immigration Lawyer in Surry"
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
                minititlecolor="text-yellow" minititle="Gurna Law Corporation"
                title="Who We Are"
                description="Gurna Law Corporation is an esteemed name in the field of Canadian immigration and refugee law. At Gurna Law Corporation, under qualified barrister-level expertise, you can get lawyered up and avail yourself of the whole range of services to steer your application, be it first-time entry, study visa, work permit, permanent residency, an appeal to the IRB or judicial review by the Federal Court of Canada. At our core, we hold your trust in high regard and prioritize your well-being. As a rule, we make a steadfast commitment to refrain from offering false guarantees or pledges. Instead, we let our results speak for themselves: there are cases aplenty where we steered to success even those applicants who had lost all hope after rejections at multiple levels."
              />
              <div className="mt-10 grid grid-cols-2 gap-3 items-center">
                <Btn link="bc-pnp-points-calculator-canada" title="BG PNP Calculator" btnclass="btn-secondary"/>
                <BtnContact link="contact" title="Get A Free Estimate" btnclass="btn-primary"/>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Testimonail/>
      <section className="section law-about-area">
        <Container ContainerClass="">
          <div className="lg:grid grid-cols-2 gap-[100px] items-center">
            <div className="mt-5 lg:mt-0">
              <SectionHeading
                align="text-left"
                minititlecolor="text-yellow" minititle="Gurna Law Corporation"
                title="How We Work"
                description="Under the leadership of barrister and solicitor, Saravpreet Singh, Gurna Law Corporation has handled cases across a wide spectrum of categories, seeing them through the entire gamut of processes mandated by the IRCC (immigration, refugees and citizenship, Canada). what lends a unique touch to Saravpreet Singh’s skill-set is a vast body of work spanning continents. During a very productive decade of legal practice in the High Courts and the Supreme Court of India, he accomplished success in civil and criminal matters, particularly in the northern belt of Punjab, Haryana, Chandigarh and Delhi—areas known for contributing significant numbers of skilled immigrants to Canada year after year. This cross-cultural oeuvre and multi-systemic understanding makes Singh competent across territories and jurisdictions. He has hands-on experience of dealing with start-up visas, intra-company transfers, owner-operator work permits, LMIA application processing, and many more business and corporate immigration matters. His passion for court work has motivated him to take on complicated judicial review matters, with a high degree of success. Having been a star on the academic firmament during his years at the internationally prestigious Delhi School of Economics, Saravpreet is an accomplished writer and award-winning speaker on the debating circuit, skills that serve him well to this day as they shine through his legal drafting and case presentation in court."
              />
              <div className="mt-10 grid grid-cols-2 gap-3 items-center">
                <Btn link="bc-pnp-points-calculator-canada" title="BG PNP Calculator" btnclass="btn-secondary"/>
                <BtnContact link="contact" title="Get A Free Estimate" btnclass="btn-primary"/>
              </div>
            </div>
            <div className=" relative">
              <ImageAnimated2
                width="768"
                height="1024"
                src="/images/about-second-section.jpg"
                alt="Citizenship Application Lawyer"
                classname="rounded-md"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}