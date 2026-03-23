export default function Tags({ tags }) {
  return (
    <div className="mt-12 border-t border-[#E7E2D9] pt-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8102E]">
        Tagged
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {tags.edges.map((tag, index) => (
          <span
            key={index}
            className="rounded-full border border-[#E7E2D9] bg-[#F8F6F1] px-4 py-2 text-sm text-[#1A2530]"
          >
            {tag.node.name}
          </span>
        ))}
      </div>
    </div>
  );
}
