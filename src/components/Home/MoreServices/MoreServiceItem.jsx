import Image from "next/image";
import Link from "next/link";
export default function MoreServiceItem({
    image,
    title,
    description
}) {
    return (
        <div className="mb-[50px] group flex items-center justify-between">
            <div className="w-[300px] hidden xl:flex">
                <div className="group/img relative hway">
                    <div className="absolute h-full w-0 group-[.hway-active]/img:w-full bg-[#fbb033] transition-all duration-[.5s]"></div>
                    <div className="absolute h-full w-0 group-[.hway-active]/img:w-full bg-white transition-all duration-[.5s] group-[.hway-active]/img:delay-[.25s]"></div>
                    <Image className="origin-left scale-x-0 group-[.hway-active]/img:scale-x-100 transition-all duration-[.5s] group-[.hway-active]/img:delay-[.5s]" src={image} alt="" width={136} height={95}/>
                </div>
            </div>
            <div className="flex-1 relative flex items-center justify-between pb-[50px] border-b-[1px] border-b-[#e6edf7]">
                <div className="max-w-[1000px] pr-5 text-center xl:text-left">
                    <div className="group-hover:text-[#fbb033] text-blue text-[18px] lg:text-[24px] font-bold mb-[10px] xl:mb-[20px]">{title}</div>
                    <div className="">{description}</div>
                </div>
                <div className="hidden xl:flex">
                    <Image className="rotate-[-45deg] group-hover:rotate-0 group-hover:brightness-100 transition-all duration-[.5s]" src="/images/arrow-30x30.svg" alt="" width={30} height={30}/>
                </div>
            </div>
        </div>
  );
}