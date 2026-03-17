export default function MediaCol({
    src
}) {
    return (
        <div className="flex justify-around  ">
            <iframe className="w-[570px] h-[320px] border-8 border-[#fedb04]" src={src} frameorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}
