import Date from "./Date";
import Image from "next/image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  slug,
}) {
  const imageSrc = coverImage?.node?.sourceUrl || "/images/amar-web-desinger-post.webp";

  return (
    <article className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-xl">
      <Link href={`/${slug}`} className="relative block h-60 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </Link>

      <div className="p-6">
        <div className="mb-2 text-sm font-bold uppercase tracking-wider text-[#C8102E]">
          <Date dateString={date} />
        </div>

        <h3 className="mb-4 text-xl font-bold leading-tight text-[#1A2530] transition-colors group-hover:text-[#C8102E]">
          <Link
            href={`/${slug}`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </h3>

        <Link
          href={`/${slug}`}
          className="inline-flex items-center text-sm font-bold text-[#1A2530] transition-colors group-hover:text-[#C8102E]"
        >
          Read Full Article
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 h-4 w-4"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </Link>
      </div>
    </article>
  );
}
