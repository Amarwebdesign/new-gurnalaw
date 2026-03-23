import FooterCTA from "@/components/FooterCTA";
import InnerBanner from "@/components/InnerBanner";

export const metadata = {
  title: 'Thank You! - Gurna Law Corporation',
  description: 'Thank you for contacting Gurna Law Corporation. We appreciate your interest and will get back to you soon.',
};

export default function ThankYou() {
  return (
    <>
      <InnerBanner
                    type="service"
                    serviceName="Thanks"
                    title="Thank You!"
                    subtitle="We appreciate your inquiry and will be in touch soon."
                    image="/images/banner/screen.webp" 
                  />
                  <FooterCTA/>
    </>
  );
}