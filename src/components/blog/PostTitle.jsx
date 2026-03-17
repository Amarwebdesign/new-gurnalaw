export default function PostTitle({ children }) {
  return (
    <h1
      className="lg:text-[50px] text-[24px] font-semibold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
