import Link from "next/link";
import Image from "next/image";
import FooterContact from "@/components/FooterContact";

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
  { name: "Legal Disclaimer", href: "/disclaimer" },
  { name: "Retainer Agreement", href: "/retainer-agreement" },
];

export default function Footer() {
  return (
    <>
      
      <FooterContact />
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
              <h4 className="text-white font-bold text-lg mb-6">Practice Areas</h4>
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
              <h4 className="text-white font-bold text-lg mb-6">Locations</h4>
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
              <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
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
