export default function SectionHeading({
  align,
  minititle,
  title,
  description,
  minititlecolor
}) {
  return (
    <div className={align}>
        <div className={`font-bold ${minititlecolor}`}>{minititle}</div>
        <h2 className='lg:text-[50px] text-[24px] font-bold'>{title}</h2>
        <p className='mt-5 text-[18px] lg:text-[20px]'>{description}</p>
    </div>
  );
}