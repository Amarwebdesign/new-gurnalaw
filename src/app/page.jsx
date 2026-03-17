import Hero from "@/components/Layout/Hero";
import AboutArea from "@/components/Layout/AboutArea";
import Testimonail from "@/components/Testimonials";
import BannerService from "@/components/Layout/BannerService";
import CTAarea from "@/components/Layout/CTAarea";
import Services from "@/components/Home/Services";
import LegalServices from "@/components/Home/LegalServices";
// import MoreServices from "@/components/Home/MoreServices";
import Faq from "@/components/Layout/Faq";
// import LatestNews from "@/components/blog/LatestNews";

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
      <Hero/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 banner-service-column">
          <BannerService link="immigration-lawyer" title="Immigration Lawyer" bsclass="btn-white" />
          <BannerService link="visa-refusal-lawyer" title="Visa Refusal Lawyer" bsclass="btn-white" />
          <BannerService link="citizenship-lawyer" title="Citizenship Lawyer" bsclass="btn-white" />
          <BannerService link="notary-public" title="Notary Public" bsclass="btn-white" />
          <BannerService link="contact" title="Request A Quote" bsclass="btn-contact" />
      </div>
      {/* <LatestNews/> */}
      <AboutArea/>
      <Testimonail/>
      <CTAarea link="" title=""/>
      <Services/>
      <LegalServices/>
      {/* <MoreServices/> */}
      <CTAarea link="" title=""/>
      <Faq/>
    </>
  );
}