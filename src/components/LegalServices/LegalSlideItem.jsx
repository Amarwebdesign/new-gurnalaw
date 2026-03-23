import Image from "next/image";
import Link from "next/link";
export default function LegalServiceItem({
    image,
    title,
    description,
    link
}) {
    return (
        <div className="swiper-slide">
            <div className="absolute top-0 right-0 bottom-0 left-0 lg:grid grid-cols-2 gap-0">
                <div></div>
                <div className="relative">
                    <div className="absolute top-0 right-0 h-full w-0 group-[.swiper-slide-active]:w-full bg-yellow transition-all duration-[.5s]"></div>
                    <div className="absolute top-0 right-0 h-full w-0 group-[.swiper-slide-active]:w-full bg-white transition-all duration-[.5s] group-[.swiper-slide-active]:delay-[.25s]"></div>
                    <Image className="lg:absolute top-0 right-0 w-full h-full object-cover object-center origin-right scale-x-0 group-[.swiper-slide-active]:scale-x-100 transition-all duration-[.5s] group-[.swiper-slide-active]:delay-[.5s]" src={image} alt="" width={1057} height={740}/>
                </div>
            </div>
            <div className="relative max-w-screen-xl mx-auto px-4 pt-[200px] pb-[70px] lg:py-[150px]">
                <div className="lg:w-[65%] relative lg:border-l-[10px] lg:border-l-[#fbb033]">
                    <div className="absolute top-0 right-0 bottom-0 left-0 origin-right scale-x-0 group-[.swiper-slide-active]:scale-x-100 bg-yellow transition-all duration-[.5s]"></div>
                    <div className="absolute top-0 right-0 bottom-0 left-0 lg:left-[15px] origin-right scale-x-0 group-[.swiper-slide-active]:scale-x-[1.02] bg-white transition-all duration-[.5s] group-[.swiper-slide-active]:delay-[.25s]"></div>
                    <div className="relative p-[15px] lg:p-[50px] opacity-0 skew-x-[-30deg] group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:skew-x-0 transition-all duration-[.5s] group-[.swiper-slide-active]:delay-[.5s] ">
                        <h2 className="text-[25px] lg:text-[55px] lg:leading-[65px] font-bold mb-[30px]">
                            <div className="">{title}</div>
                        </h2>
                        <div className="">
                            <div className="">{description}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}