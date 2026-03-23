import Image from "next/image";
import Link from "next/link";

const serviceCards = [
  {
    title: "Immigration Lawyer in Canada",
    description:
      "Our experienced Immigration Lawyers in Canada guide you through the complex immigration process, ensuring a smooth transition to your new life.",
    href: "/immigration-lawyer-in-surrey",
    image: "/images/home/immigration-lawyer-in-canada.jpg",
  },
  {
    title: "Visa Refusal Lawyer in Canada",
    description:
      "Facing visa refusals? Our Visa Refusal Lawyers specialize in challenging decisions, providing strategic solutions to overcome obstacles and maximize your chances of approval.",
    href: "/visa-refusal-lawyer",
    image: "/images/home/visa-refusal-lawyer-in-canada.jpg",
  },
  {
    title: "Citizenship Lawyer in Canada",
    description:
      "Achieve your dream of Canadian citizenship with our dedicated Citizenship Lawyers and tailored guidance through the process.",
    href: "/citizenship-lawyer",
    image: "/images/home/citizenship-lawyer-in-canada.jpg",
  },
  {
    title: "Notary Public in Surrey",
    description:
      "Need notarial services? Our Notary Public services ensure the authenticity of your documents with professionalism and reliability.",
    href: "/notary-public",
    image: "/images/home/notary-public-services-near-me.jpg",
  },
];

const legalServices = [
  {
    title: "Judicial Review",
    description:
      "Gurna Law Corporation offers individualized legal counsel and advice for applications, appeals, and reviews by the Federal Court of Canada.",
  },
  {
    title: "Sponsorship Appeals",
    description:
      "When a genuine relationship application runs into trouble, we help present your case clearly and strongly at the appeal stage.",
  },
  {
    title: "Admissibility Hearings",
    description:
      "We represent permanent and temporary residents facing inadmissibility issues and prepare a strong defence tailored to the case.",
  },
  {
    title: "Citizenship and PR Applications",
    description:
      "We help clients apply for citizenship or permanent residency across Express Entry, provincial programs, and other pathways.",
  },
];

const testimonials = [
  {
    name: "Lokesh Kumar (LK)",
    quote:
      "From a voluntary departure order to a work permit approval, my journey with Gurna Law Corporation was extraordinary.",
  },
  {
    name: "Harman Sohi",
    quote:
      "After multiple refusals in the past, I approached Gurna Law Corporation and my tourist visa was approved in only a few days.",
  },
  {
    name: "Amir Zeb",
    quote:
      "The refusal decision was set aside after judicial review. They are always approachable, and Mr. Saravpreet Singh is particularly knowledgeable.",
  },
];

const faqs = [
  {
    question: "What areas of law does Gurna Law Corporation specialize in?",
    answer:
      "Gurna Law Corporation specializes in immigration law, notary public services, and citizenship law, offering services from applications to appeals and deportation defence.",
  },
  {
    question: "How can I schedule a consultation with Gurna Law Corporation?",
    answer:
      "You can schedule a consultation by contacting the Surrey office by phone or email, and the team will assist you in setting a convenient time.",
  },
  {
    question: "What sets Gurna Law Corporation apart from other law firms?",
    answer:
      "The firm combines a client-centric approach, expert legal guidance, and over a decade of international litigation experience.",
  },
  {
    question: "What if my visa application has been refused?",
    answer:
      "The firm can assess refusal reasons, build a strong appeal strategy, and represent you in efforts to overturn the decision.",
  },
];

const locations = [
  "Surrey",
  "Abbotsford",
  "Vancouver",
  "Burnaby",
  "Coquitlam",
  "Langley",
  "Richmond",
];

export const metadata = {
  title: 'Immigration Lawyer in Canada | Gurna Law Corporation',
  description: 'Gurna Law Corporation is offering services of Canadian immigration. These services include immigration law, visa refusal, & citizenship.',
  canonical: 'https://www.gurnalaw.ca',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'Immigration Lawyer in Canada | Gurna Law Corporation',
    description: 'Gurna Law Corporation is offering services of Canadian immigration. These services include immigration law, visa refusal, & citizenship.',
    url: 'https://www.gurnalaw.ca',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#f7f3ee]">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#f7f3ee_100%)]">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[rgba(200,16,46,0.14)] blur-3xl" />
        <div className="absolute right-0 top-12 h-72 w-72 rounded-full bg-[rgba(27,86,139,0.12)] blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.02fr,0.98fr] lg:px-8 lg:pb-24 lg:pt-20">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-[rgba(200,16,46,0.15)] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8102E] shadow-[0_12px_35px_rgba(15,23,42,0.05)]">
              Immigration Lawyer In Canada
            </span>
            <h1 className="mt-6 text-[44px] font-semibold leading-[0.96] tracking-[-0.03em] text-[#0f172a] md:text-[68px] lg:text-[84px]">
              Gurna Law Corporation
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Let an Immigration Lawyer in Canada handle your case with experience and knowledge.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#C8102E,#8f0e20)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_45px_rgba(200,16,46,0.26)] transition hover:-translate-y-0.5"
              >
                Request A Quote
              </Link>
              <Link
                href="/bc-pnp-points-calculator-canada"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 transition hover:border-[#C8102E] hover:text-[#C8102E]"
              >
                BC PNP Calculator
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-white/80 bg-white/90 p-5 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
                <div className="text-3xl font-bold text-[#C8102E]">10+</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">Years of international litigation experience.</p>
              </div>
              <div className="rounded-[24px] border border-white/80 bg-white/90 p-5 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
                <div className="text-3xl font-bold text-[#1b568b]">BC</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">Serving clients from Surrey across British Columbia.</p>
              </div>
              <div className="rounded-[24px] border border-white/80 bg-white/90 p-5 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
                <div className="text-3xl font-bold text-[#fbb033]">1:1</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">Focused legal guidance for immigration and refugee matters.</p>
              </div>
            </div>

            <div className="mt-10 space-y-3">
              {[
                "Barrister-level expertise in Canadian immigration and refugee law",
                "Guidance for applications, work permits, PR, appeals, and Federal Court reviews",
                "Professional support with immigration, citizenship, visa refusal, and notary services",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/75 bg-white/75 px-4 py-4 shadow-[0_14px_35px_rgba(15,23,42,0.05)]"
                >
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#C8102E] text-xs font-bold text-white">
                    ✓
                  </span>
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="grid gap-4 sm:grid-cols-[0.78fr,1fr]">
              <div className="rounded-[28px] border border-white/70 bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                <Image
                  src="/images/home/about-img.webp"
                  alt="Immigration Lawyer in Canada"
                  width={500}
                  height={700}
                  className="h-full w-full rounded-[22px] object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="rounded-[28px] bg-[#0f172a] p-4 text-white shadow-[0_28px_70px_rgba(15,23,42,0.18)]">
                  <Image
                    src="/images/home/saravpreet-singh-gurna-law-canada-immigration-lawyer-in-surrey.webp"
                    alt="Saravpreet Singh Gurna"
                    width={700}
                    height={860}
                    className="h-[360px] w-full rounded-[22px] object-cover object-top"
                  />
                  <div className="mt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#fbb033]">
                      Saravpreet Singh Gurna
                    </p>
                    <p className="mt-3 text-lg leading-8 text-slate-200">
                      Gurna Law Corporation is an esteemed name in the field of Canadian immigration and refugee law.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-white/70 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Office
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      Unit 208-8028, 128th St., Surrey, BC, V3W4E9
                    </p>
                  </div>
                  <div className="rounded-[24px] bg-[linear-gradient(135deg,#1b568b,#0f172a)] p-5 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                      Call Today
                    </div>
                    <a href="tel:+16042613171" className="mt-3 block text-xl font-semibold">
                      +1-604-261-3171
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 rounded-[32px] border border-white/75 bg-white/92 p-4 shadow-[0_26px_70px_rgba(15,23,42,0.08)] md:grid-cols-2 lg:grid-cols-5 lg:p-5">
            <Link href="/immigration-lawyer-in-surrey" className="rounded-[22px] border border-slate-200 bg-white px-5 py-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-slate-900 transition hover:border-[#C8102E] hover:text-[#C8102E]">
              Immigration Lawyer
            </Link>
            <Link href="/visa-refusal-lawyer" className="rounded-[22px] border border-slate-200 bg-white px-5 py-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-slate-900 transition hover:border-[#C8102E] hover:text-[#C8102E]">
              Visa Refusal Lawyer
            </Link>
            <Link href="/citizenship-lawyer" className="rounded-[22px] border border-slate-200 bg-white px-5 py-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-slate-900 transition hover:border-[#C8102E] hover:text-[#C8102E]">
              Citizenship Lawyer
            </Link>
            <Link href="/notary-public" className="rounded-[22px] border border-slate-200 bg-white px-5 py-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-slate-900 transition hover:border-[#C8102E] hover:text-[#C8102E]">
              Notary Public
            </Link>
            <Link href="/contact" className="rounded-[22px] bg-[linear-gradient(135deg,#fbb033,#f59e0b)] px-5 py-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-black shadow-[0_16px_35px_rgba(245,158,11,0.20)] transition hover:-translate-y-0.5">
              Request A Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfaf7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.92fr,1.08fr] lg:items-center">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8102E]">
                About The Firm
              </span>
              <h2 className="mt-4 text-[36px] font-semibold leading-tight text-[#0f172a] md:text-[52px]">
                Immigration Lawyer In Canada
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Gurna Law Corporation is an esteemed name in the field of Canadian immigration and refugee law. At Gurna Law Corporation, under qualified barrister-level expertise, you can get lawyered up and avail yourself of the whole range of services to steer your application, be it first-time entry, study visa, work permit, permanent residency, an appeal or review by the Federal Court of Canada.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/practice-areas" className="inline-flex items-center justify-center rounded-full bg-[#1b568b] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_45px_rgba(27,86,139,0.22)] transition hover:-translate-y-0.5">
                  Our Services
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 transition hover:border-[#C8102E] hover:text-[#C8102E]">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/80 bg-white p-4 shadow-[0_22px_55px_rgba(15,23,42,0.06)]">
                <Image
                  src="/images/home/about-img.webp"
                  alt="About Gurna Law"
                  width={700}
                  height={850}
                  className="h-[380px] w-full rounded-[22px] object-cover"
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="rounded-[28px] border border-white/80 bg-white p-4 shadow-[0_22px_55px_rgba(15,23,42,0.06)]">
                  <Image
                    src="/images/home/saravpreet-singh-gurna-law-canada-immigration-lawyer-in-surrey.webp"
                    alt="Saravpreet Singh Gurna Lawyer"
                    width={700}
                    height={850}
                    className="h-[250px] w-full rounded-[22px] object-cover object-top"
                  />
                </div>
                <div className="rounded-[28px] bg-[#0f172a] p-6 text-white shadow-[0_22px_55px_rgba(15,23,42,0.12)]">
                  <div className="text-4xl font-bold text-[#fbb033]">15+</div>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/70">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8102E]">
                Core Services
              </span>
              <h2 className="mt-4 text-[36px] font-semibold leading-tight text-[#0f172a] md:text-[52px]">
                Gurna Law Corporation Provides Service
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                With a wide range of services to assist people in navigating the difficulties of the immigration processes, Gurna Law Corporation is a well-known name in the field of Canadian immigration and refugee law.
              </p>
            </div>
            <Link href="/practice-areas" className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 transition hover:text-[#C8102E]">
              View Practice Areas
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {serviceCards.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-[#fffdfb] shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-1"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={500}
                  className="h-52 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-[24px] font-semibold leading-tight text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                  <Link href={item.href} className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[#C8102E]">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1120] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.92fr,1.08fr]">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#fbb033]">
                What Legal Services Do We Offer
              </span>
              <h2 className="mt-4 text-[36px] font-semibold leading-tight md:text-[52px]">
                Practical legal guidance without false guarantees.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                At our core, we hold your trust in high regard and prioritize your well-being. As a result, we make a steadfast commitment to refrain from offering false guarantees or pledges.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                {locations.map((location) => (
                  <span
                    key={location}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {legalServices.map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-[26px] border p-6 ${
                    index === 0
                      ? "border-[rgba(251,176,51,0.25)] bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.03)_100%)]"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8102E]">
                Testimonials
              </span>
              <h2 className="mt-4 text-[36px] font-semibold leading-tight text-[#0f172a] md:text-[52px]">
                What Our Client Says?
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Explore the journeys of satisfied clients and see how strategic legal representation changed the outcome of their cases.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C8102E]">
                  Client Review
                </div>
                <p className="mt-5 text-base leading-8 text-slate-700">"{item.quote}"</p>
                <div className="mt-6 border-t border-slate-100 pt-4 text-sm font-semibold text-slate-900">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
            <div className="max-w-xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8102E]">
                FAQs
              </span>
              <h2 className="mt-4 text-[36px] font-semibold leading-tight text-[#0f172a] md:text-[52px]">
                Your Legal Queries Answered
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Immigration, citizenship, notary services, and more. Discover expert guidance today.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#C8102E,#8f0e20)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_45px_rgba(200,16,46,0.24)] transition hover:-translate-y-0.5"
                >
                  Get A Quote
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[24px] border border-slate-200 bg-[#fbfbfb] p-5 shadow-[0_14px_35px_rgba(15,23,42,0.04)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-900">
                    {item.question}
                    <span className="text-[#C8102E] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
