import Container from "@/components/Layout/Container";
import HeroInnerPage from "@/components/Layout/HeroInnerPage";

export const metadata = {
  title: 'Media - Gurna Law Corporation | Fast & Trusted Help',
  description: 'Need an Immigration Lawyer in Surrey, BC, Canada? We can help! Get expert guidance for visas, work permits & citizenship. Get consultations!',
  canonical: 'https://www.gurnalaw.ca/media',
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Top Immigration Lawyer in Surrey | Fast & Trusted Help',
    description: 'Need an Immigration Lawyer in Surrey, BC, Canada? We can help! Get expert guidance for visas, work permits & citizenship. Get consultations!',
    url: 'https://www.gurnalaw.ca/media',
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function Media() {
  return (
    <>
      <HeroInnerPage
        title="Media"
        content="Empower Your Canadian Dream With Our Immigration Services."
        backgroundImageUrl='/images/banner/media.webp'
      />

      <section className="">
        <Container ContainerClass="">
          <div className="lg:grid grid-cols-2 pt-[120px] pb-[120px] ">
            <div className="mt-10 lg:mt-0 ">
              <div className="flex justify-around  ">
                <iframe className="w-[570px] h-[320px] border-8 border-[#fedb04]" src="https://www.youtube.com/embed/-yzjehkhTZQ?si=jo39sezRPs2wbfPm" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
          </div>
        </Container>
      </section>
    </>
  );
}