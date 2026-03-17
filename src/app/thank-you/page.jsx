import HeroInnerPage from "@/components/Layout/HeroInnerPage";

export const metadata = {
  title: 'Thank You! - Gurna Law Corporation',
  description: 'Thank you for contacting Gurna Law Corporation. We appreciate your interest and will get back to you soon.',
};

export default function ThankYou() {
  return (
    <>
      <HeroInnerPage
        title="Thank You!"
        content="We appreciate your inquiry and will be in touch soon."
        backgroundImageUrl='/images/banner/screen.webp'
      />
    </>
  );
}