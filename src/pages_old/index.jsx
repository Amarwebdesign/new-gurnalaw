import Head from "next/head";
import Layout from "@/components/Layout/Layout";
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

export default function Home() {

  return (
    <Layout>
    <Head>
    <title>Immigration Lawyer in Canada | Gurna Law Corporation</title>
        <meta name="description" content="Gurna Law Corporation is offering services of Canadian immigration. These services include immigration law, visa refusal, &amp; citizenship." />
        <link rel="canonical" href="https://www.gurnalaw.ca" />
        <meta property="og:site_name" content="Gurna Law Corporation - Canadian immigration lawyer in BC" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Immigration Lawyer in Canada | Gurna Law Corporation" />
        <meta property="og:description" content="Gurna Law Corporation is offering services of Canadian immigration. These services include immigration law, visa refusal, &amp; citizenship." />
        <meta property="og:url" content="https://www.gurnalaw.ca" />
        <meta property="og:image" content="/images/saravpreet-singh-gurna-law-corporation-2.png" />
    </Head>
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
      <CTAarea/>
      <Services/>
      <LegalServices/>
      {/* <MoreServices/> */}
      <CTAarea/>
      <Faq/>
</Layout>
  );
}