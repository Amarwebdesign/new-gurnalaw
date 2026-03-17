import Image from "next/image";
import Container from "@/components/Layout/Container";
import BtnCall from "@/components/Layout/Btns/BtnCall";
import Btn from "@/components/Layout/Btns/Btn";
export default function HeroInnerPage({
    title,
    subtitle = "",
    content,
    backgroundImageUrl
}) {
  return (
    // /images/inner-page-banner.webp
    <div className="relative z-30 text-white inner-banner-section bg-black before:bg-black/60 before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0"  style={{
        backgroundImage: `url(${backgroundImageUrl})`
      }}>
        <div className='relative z-20 w-full'>
            <Container>
                <div className="min-h-[70vh] flex items-center justify-between pt-[150px] pb-[50px]">
                    <div className="law-hero-info max-w-[650px] xl:max-w-[850px]">
                        {/* <div className="law-hero__imgs mb-8 flex items-center gap-4">
                            <div className=" w-[66px]">
                                <Image src="/images/law-1.png" alt="Immigration Lawyer In Surrey" priority={true} width={100} height={100} className="w-full" />
                            </div>
                            <div data-aos-delay="200" className=" w-[66px]">
                                <Image src="/images/law-2.png" alt="Immigration Lawyer In Surrey" priority={true} width={100} height={100} className="w-full" />
                            </div>
                            <div data-aos-delay="400" className=" w-[66px]">
                                <Image src="/images/law-3.png" alt="Immigration Lawyer In Surrey" priority={true} width={100} height={100} className="w-full" />
                            </div>
                        </div> */}
                        <div className="law-hero__content">
                            <h1 className="mb-5 font-bold text-[30px] lg:text-[50px]">{title}</h1>
                            <p className="mb-50">
                            {subtitle || content}
                            </p>
                            <div className="mt-5 hidden md:block">
                                <BtnCall link="tel:+16042613171" title="+1-604-261-3171" />
                            </div>
                            <div className="mt-5 md:hidden">
                                <Btn link="/bc-pnp-points-calculator-canada" title="BC PNP Calculator" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="banner-bc-pnp-calculator-btn">
                <div className="btn-animated-cirlce-img">
                    <Image src="/images/bc-pnp-cal-img.svg" priority="true" alt="BC PNP Calculator" width={250} height={250} />
                </div>
                <a title="" className="btn-animated" href="/bc-pnp-points-calculator-canada">BC PNP <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-trend-up" className="svg-inline--fa fa-arrow-trend-up " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"></path></svg>Calculator<span></span></a>
            </div>
        </div>
    </div>
  );
}
