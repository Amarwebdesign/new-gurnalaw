import Link from "next/link";

export default function Btn({
  link,
  href,
  title,
  text,
  btnclass,
}) {
  const resolvedHref = href ?? link ?? "#";
  const resolvedTitle = text ?? title ?? "";

  return (
    <Link href={resolvedHref} className={`btn ${btnclass ?? ""}`}>
      <span>{resolvedTitle}</span>
      <svg
        className="btn-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        aria-hidden="true"
      >
        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
      </svg>
    </Link>
  );
}
