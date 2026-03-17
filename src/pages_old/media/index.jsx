import Head from "next/head";
import Header from "@/components/Layout/Header";
import Layout from "@/components/Layout/Layout";
import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import Container from "@/components/Layout/Container";


export default function Index({ preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Media - Gurna Law Corporation | Fast & Trusted Help</title>
        <meta name="description" content="Need an Immigration Lawyer in Surrey, BC, Canada? We can help! Get expert guidance for visas, work permits &amp; citizenship. Get consultations!" />
        <link rel="canonical" href="https://www.gurnalaw.ca/media" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Top Immigration Lawyer in Surrey | Fast & Trusted Help" />
        <meta property="og:description" content="Need an Immigration Lawyer in Surrey, BC, Canada? We can help! Get expert guidance for visas, work permits &amp; citizenship. Get consultations!" />
        <meta property="og:url" content="https://www.gurnalaw.ca/media" />
        <meta property="og:site_name" content="Gurna Law Corporation - Canadian immigration lawyer in BC" />
        <meta property="og:image" content="/images/saravpreet-singh-gurna-law-corporation-2.png" />
      </Head>
      <Header />
      <HeroInnerPage
        title="Media"
        content="Empower Your Canadian Dream With Our Immigration Services."
        backgroundImageUrl='/images/banner/media.webp'
/>

      <section className="">
        <Container>
          <div className="lg:grid grid-cols-2 pt-[120px] pb-[120px] ">
            <div className="mt-10 lg:mt-0 ">
              <div className="flex justify-around  ">
                <iframe className="w-[570px] h-[320px] border-8 border-[#fedb04]" src="https://www.youtube.com/embed/-yzjehkhTZQ?si=jo39sezRPs2wbfPm" frameorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
            <div className="flex justify-around pb-[20px]">
              <iframe className="w-[570px] h-[320px] border-8 border-[#fedb04]" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D459268313037554" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <div className="flex justify-around pb-[20px]">
              <iframe className="w-[570px] h-[320px] border-8 border-[#fedb04]" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D883366392723559" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <div className="flex justify-around pb-[20px]">
              <iframe className="w-[570px] h-[320px] border-8 border-[#fedb04]" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D459268313037554" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="flex justify-around pb-[20px]">
              <iframe className="w-[570px] h-[320px] border-8 border-[#fedb04]" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D883500549376135" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="flex justify-around pb-[20px]">
              <iframe className="w-[570px] h-[320px] border-8 border-[#fedb04]" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D220170740805802" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="flex justify-around pb-[20px]">
              <iframe className="w-[570px] h-[320px] border-8 border-[#fedb04]" src="https://www.youtube.com/embed/6L2ypvkaTOw?si=KB0S8ocOks-0KNRI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="flex justify-around pb-[20px]">
              <iframe className="w-[570px] h-[320px] border-8 border-[#fedb04]" src="https://www.youtube.com/embed/ylHwfAPNyPs?si=1iZoW3iLB91YZEHq" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe >
            </div>
          </div>
        </Container>
      </section>
  
      
    </Layout>
  );
}
