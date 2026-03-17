import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import Services from "@/components/Home/Services";
import LegalServices from "@/components/Home/LegalServices";
import MoreServices from "@/components/Home/MoreServices";
export default function Index({ preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Practice Areas - Gurna Law Corporation | Fast & Trusted Help</title>
        <meta name="description" content="Need an Immigration Lawyer in Surrey, BC, Canada? We can help! Get expert guidance for visas, work permits &amp; citizenship. Get consultations!" />
        <link rel="canonical" href="https://www.gurnalaw.ca/immigration-lawyer" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Top Immigration Lawyer in Surrey | Fast & Trusted Help" />
        <meta property="og:description" content="Need an Immigration Lawyer in Surrey, BC, Canada? We can help! Get expert guidance for visas, work permits &amp; citizenship. Get consultations!" />
        <meta property="og:url" content="https://www.gurnalaw.ca/immigration-lawyer" />
        <meta property="og:site_name" content="Gurna Law Corporation - Canadian immigration lawyer in BC" />
        <meta property="og:image" content="/images/saravpreet-singh-gurna-law-corporation-2.png" />
      </Head>
      <HeroInnerPage
        title="Practice Areas"
        backgroundImageUrl='/images/banner/PracticeAreas.png'
        content="Empower Your Canadian Dream With Our Immigration Services."
         />
     
      <Services/>
      <LegalServices/>
      <MoreServices/>
    </Layout>
  );
}
