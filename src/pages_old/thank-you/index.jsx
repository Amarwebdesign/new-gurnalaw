import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import HeroInnerPage from "@/components/Layout/HeroInnerPage";

export default function ThankYou({ preview }) {
  return (
    <Layout preview={preview}>
        <Head>
            <title>Thank You! - Gurna Law Corporation </title>
            <meta name="description" content="Amardeep Singh Chahal CEO of AMR Softec, Expert Web Designer, Frontend Developer &amp; eCommerce Website Developer in India. Call +91-9888940088." />
        </Head>
        <HeroInnerPage
            title="Thanks you for your interest."
            content="Your requirement is received and we will contact you soon!"
            backgroundImageUrl='/images/inner-page-banner.webp'
        />
    </Layout>
  );
}