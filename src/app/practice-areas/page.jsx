import FooterCTA from "@/components/FooterCTA";
import InnerBanner from "@/components/InnerBanner";
import LegalServices from "@/components/Pages/Home/LegalServices";

export const metadata = {
  title: 'Practice Areas - Gurna Law Corporation | Fast & Trusted Help',
  description: 'Need an Immigration Lawyer in Surrey, BC, Canada? We can help! Get expert guidance for visas, work permits & citizenship. Get consultations!',
  canonical: 'https://www.gurnalaw.ca/practice-areas',
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Top Immigration Lawyer in Surrey | Fast & Trusted Help',
    description: 'Need an Immigration Lawyer in Surrey, BC, Canada? We can help! Get expert guidance for visas, work permits & citizenship. Get consultations!',
    url: 'https://www.gurnalaw.ca/practice-areas',
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function PracticeAreas() {
  return (
    <>
      <InnerBanner
        title="Practice Areas"
        subtitle="Empower your Canadian dream with our immigration services."
        image="/images/banner/PracticeAreas.png"
      />

      <LegalServices />
      <FooterCTA/>
    </>
  );
}
