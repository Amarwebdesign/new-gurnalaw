import InnerBanner from "@/components/InnerBanner";
import Link from "next/link";

export default function LegalPage({
  title,
  subtitle,
  label = "Legal Information",
  updatedAt,
  sections,
}) {
  return (
    <>
      <InnerBanner
        title={title}
        subtitle={subtitle}
        image="/images/banner/PracticeAreas.png"
      />

      <section className="bg-[#F8F6F1] py-12 md:py-16">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:px-8">
          <div className="rounded-[28px] border border-[#E7E2D9] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] md:p-10">
            <div className="border-b border-[#E7E2D9] pb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8102E]">
                {label}
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-[#1A2530] md:text-4xl">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                {subtitle}
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {sections.map((section, index) => (
                <div
                  key={section.title}
                  className="rounded-[24px] border border-[#ECE7DE] bg-[#FCFBF8] p-5 md:p-7"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8102E] text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <h2 className="text-xl font-semibold text-[#1A2530] md:text-2xl">
                      {section.title}
                    </h2>
                  </div>

                  <div className="mt-5 space-y-4 text-[15px] leading-8 text-slate-700 md:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="rounded-[24px] border border-[#E7E2D9] bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8102E]">
                Document Details
              </p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
                <div>
                  <p className="font-semibold text-[#1A2530]">Last Updated</p>
                  <p>{updatedAt}</p>
                </div>
                <div>
                  <p className="font-semibold text-[#1A2530]">Applies To</p>
                  <p>Website visitors, prospective clients, and client communications with Gurna Law Corporation.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-[#E7E2D9] bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8102E]">
                Questions?
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#1A2530]">
                Contact Gurna Law Corporation
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                If you need clarification about any legal notice, policy, or document on this website,
                contact our office directly.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href="tel:+16042613171"
                  className="flex w-full items-center justify-center rounded-full bg-[#C8102E] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#a00d24]"
                >
                  Call +1 604 261 3171
                </a>
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-full border border-[#1A2530]/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#1A2530] transition hover:border-[#C8102E] hover:text-[#C8102E]"
                >
                  Contact Page
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
