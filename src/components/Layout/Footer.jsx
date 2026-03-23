import Link from "next/link";
import FooterCTA from "@/components/Layout/FooterCTA";
import Image from "next/image";

const practiceAreas = [
  { name: "Immigration Appeals", href: "/immigration-appeals" },
  { name: "Judicial Reviews", href: "/judicial-reviews" },
  { name: "Citizenship Lawyer", href: "/citizenship-lawyer" },
  { name: "Visa Refusal Lawyer", href: "/visa-refusal-lawyer" },
  { name: "Notary Public", href: "/notary-public" },
];

const locations = [
  { name: "Surrey", href: "/immigration-lawyer-in-surrey" },
  { name: "Abbotsford", href: "/immigration-lawyer-in-abbotsford" },
  { name: "Vancouver", href: "/immigration-lawyer-in-vancouver" },
  { name: "Burnaby", href: "/immigration-lawyer-in-burnaby" },
  { name: "Langley", href: "/immigration-lawyer-in-langley" },
  { name: "Richmond", href: "/immigration-lawyer-in-richmond" },
];
const legalAreas = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Retainer Agreement", href: "/retainer-agreement" },
];

export default function Footer() {
  return (
    <>
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-[#C8102E] via-[#8B0015] to-[#2B0E14]">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="max-w-2xl text-center lg:text-left">
              <p className="text-white/80 uppercase tracking-widest font-bold text-xs mb-4">Need Legal Advice?</p>
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-sans font-bold text-white leading-tight mb-6">
                Contact us to better understand your case and move forward with confidence.
              </h2>
              <p className="text-white/90 text-lg font-light leading-relaxed">
                Trust us to illuminate your path forward with clarity and confidence, whether your matter involves immigration, citizenship, appeals, or notarial support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 w-full lg:w-auto justify-center">
              <Link href="contact"  className="bg-white text-[#1A2530] px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors text-center"
              >Contact Us</Link>
              <Link href="tel:+16042613171" className="bg-transparent border border-white/40 text-white px-10 py-4 rounded-full font-bold tracking-wider text-sm hover:bg-white/10 transition-colors text-center"
              >+1-604-261-3171</Link>
            </div>

          </div>
        </div>
      </section>

      <FooterCTA />
      <footer className="bg-[#111820] text-gray-400 py-16 border-t border-gray-800">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[rgba(200,16,46,0.18)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[rgba(27,86,139,0.16)] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.35fr,0.85fr,0.85fr,1fr]">
            <div>
              <div className="w-[190px]">
                <Image height={30} width={200} src='images/svg/logo-white.svg' className='object-contain filter brightness-0 invert w-full' alt='Gurna Law Coroporation'/>
              </div>
              <p className="mt-6 text-sm leading-relaxed mb-6">
                At Gurna Law Corporation, the turnover rate is quick, the processing smooth, the consultation candid, and the fee reasonable.
              </p>
            </div>

            <div>
              <h4 className="text-white font-serif font-bold text-lg mb-6">Practice Areas</h4>
              <ul className="mt-6 space-y-3">
                {practiceAreas.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-[#C8102E] transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif font-bold text-lg mb-6">Locations</h4>
              <ul className="mt-6 space-y-3">
                {locations.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-[#C8102E] transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
              <div>
              <h4 className="text-white font-serif font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-3 text-sm">
                {legalAreas.map((item) => (
                <li key={item.href}><Link href={item.href} className="hover:text-[#C8102E] transition-colors">{item.name}</Link></li>
                ))}
              </ul>
            </div>
          </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} Gurna Law. All rights reserved.</p>
            <p className="mt-4 md:mt-0 text-gray-500">
              Design & Developed by AMR Softec.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
