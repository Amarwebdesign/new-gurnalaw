

import Image from "next/image";
export default function ImageAnimated2({
    src,
    width,
    height,
    alt,
    classname
}) {
    return (
    <div className={`group/img hway relative w-[${width}px] h-[${height}px] ${classname} overflow-hidden`}>
        <div className="absolute h-full w-0 group-[.hway-active]/img:w-full bg-blue opacity-50 transition-all duration-[.5s]"></div>
        <div className="absolute h-full w-0 group-[.hway-active]/img:w-full bg-blue opacity-50 transition-all duration-[.5s] group-[.hway-active]/img:delay-[.25s]"></div>
        <Image className={`w-full origin-left scale-x-0 group-[.hway-active]/img:scale-x-100 transition-all duration-[.5s] group-[.hway-active]/img:delay-[.5s]`} src={src} width={width} height={height} alt={alt}/>
    </div>
    );
};