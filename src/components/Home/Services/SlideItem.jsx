import Image from "next/image";
import Link from "next/link";
import ImageAnimated2 from "@/components/Layout/ImageAnimated2";
export default function SliderItem({
    image,
    title,
    description,
    link
}) {
    return (
    <div className="group/s mb-[100px]">
        <Link href={link} className="bg-[#101010] relative">
            <div className="absolute top-0 right-0 bottom-0 left-0 grid grid-cols-6">
                <div className="bg-white origin-bottom scale-y-0 group-hover/s:scale-y-100 group-hover/s:delay-[.5s] delay-0 transition-all duration-[.3s]"></div>
                <div className="bg-white origin-bottom scale-y-0 group-hover/s:scale-y-100 group-hover/s:delay-[.4s] delay-[.1s] transition-all duration-[.3s]"></div>
                <div className="bg-white origin-bottom scale-y-0 group-hover/s:scale-y-100 group-hover/s:delay-[.3s] delay-[.2s] transition-all duration-[.3s]"></div>
                <div className="bg-white origin-bottom scale-y-0 group-hover/s:scale-y-100 group-hover/s:delay-[.2s] delay-[.3s] transition-all duration-[.3s]"></div>
                <div className="bg-white origin-bottom scale-y-0 group-hover/s:scale-y-100 group-hover/s:delay-[.1s] delay-[.4s] transition-all duration-[.3s]"></div>
                <div className="bg-white origin-bottom scale-y-0 group-hover/s:scale-y-100 group-hover/s:delay-0 delay-[.5s] transition-all duration-[.3s]"></div>
            </div>
            <div className="relative">
                <ImageAnimated2 alt={title} src={image} width={800} height={550} priority="true" className=""/>
            </div>
            <div className="relative py-[20px] px-[25px] text-white">
                <div className="text-[24px] lg:text-[30px] leading-[1.3] font-bold  mb-[25px]">
                    <div className="relative">
                        <div className="text-[#101010] absolute top-0 right-0 bottom-0 left-0 origin-top scale-y-0 group-hover/s:scale-y-100 transition-all duration-[.3s] group-hover/s:delay-[.5s] delay-0">{title}</div>
                        <div className="text-yellow origin-bottom group-hover/s:scale-y-0 transition-all duration-[.3s] group-hover:delay-[.5s] delay-0">{title}</div>
                    </div>
                </div>
                <div className="mb-[35px]">
                    <div className="relative min-h-[150px]">
                        <div className="text-[#535353] absolute top-0 right-0 bottom-0 left-0 origin-top scale-y-0 group-hover/s:scale-y-100 transition-all duration-[.3s] group-hover/s:delay-[.5s] delay-0">{description}</div>
                        <div className="origin-bottom group-hover/s:scale-y-0 transition-all duration-[.3s] group-hover/s:delay-[.5s] delay-0">{description}</div>
                    </div>
                </div>
                <div className="flex items-center justify-start gap-[8px]">
                    <div className="font-bold ">
                        <div className="relative">
                            <div className="text-yellow absolute top-0 right-0 bottom-0 left-0 origin-top scale-y-0 group-hover/s:scale-y-100 transition-all duration-[.3s] group-hover/s:delay-[.5s] delay-0">Learn More About {title}</div>
                            <div className="origin-bottom group-hover/s:scale-y-0 transition-all duration-[.3s] group-hover/s:delay-[.5s] delay-0">Learn More About {title}</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative">
                            <div className="absolute top-0 right-0 bottom-0 left-0 origin-bottom scale-y-0 group-hover/s:scale-y-100 transition-all duration-[.3s] group-hover/s:delay-[.5s] delay-0">
                                <Image className="brightness-0" src="/images/portfolio-arrow.svg" alt="Best Immigration Lawyer For Citizenship
                                 " width={16} height={12} />
                            </div>
                            <div className="origin-top group-hover/s:scale-y-0 transition-all duration-[.3s] group-hover/s:delay-[.5s] delay-0">
                                <Image className="" src="/images/portfolio-arrow.svg" alt="Best Immigration Lawyer BC" width={16} height={12} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  );
}