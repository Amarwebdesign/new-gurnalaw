import Image from "next/image";
import Container from "@/components/Layout/Container";
import BtnCall from "@/components/Layout/Btns/BtnCall";
import Btn from "@/components/Layout/Btns/Btn";

export default function Hero() {

  return (
    <div className="relative z-30 text-white banner-section bg-black">
        <div className='banner-video absolute after:bg-black after:absolute after:top-0 after:h-full after:left-0 after:w-full after:z-10 after:opacity-50 w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'>
            <video width="600" height="400" className='w-full z-10 absolute top-0 h-full left-0 object-cover' playsInline autoPlay muted loop>
                <source src="/videos/banner-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className='banner-text relative z-20 w-full'>
                <Container>
                    <div className="law-hero-area flex items-center justify-between">
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
                            <h1 className="mb-5 font-semibold text-yellow">Immigration Lawyer In Canada</h1>
                            <h2 className="law-hero__content-title mb-5 font-bold">Gurna Law Corporation</h2>
                            <p className="mb-5">
                            Let an Immigration Lawyer in Canada handle your case with experience and knowledge.
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
