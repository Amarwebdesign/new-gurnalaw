import HeroInnerPage from "@/components/Layout/HeroInnerPage";

export const metadata = {
  title: 'Notary Public in Surrey BC - Gurna Law Corporation',
  description: 'Need a Notary Public in Surrey, BC? Gurna Law Corporation provides professional notary services.',
  canonical: 'https://www.gurnalaw.ca/notary-public',
  openGraph: {
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    locale: 'en_US',
    type: 'website',
    title: 'Notary Public in Surrey BC - Gurna Law Corporation',
    description: 'Need a Notary Public in Surrey, BC? Gurna Law Corporation provides professional notary services.',
    url: 'https://www.gurnalaw.ca/notary-public',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function NotaryPublic() {
  return (
    <>
      <HeroInnerPage
        title="Notary Public"
        backgroundImageUrl='/images/banner/notary.png'
        content="Professional Notary Services in Surrey, BC"
      />
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Notary Public Services</h2>
          <p className="text-lg text-gray-600 mb-4">
            Gurna Law Corporation provides professional notary public services in Surrey, BC. Our experienced notaries can assist you with document authentication, certification, and other notarial acts.
          </p>
          <p className="text-lg text-gray-600">
            Contact us today to learn more about how we can help you with your notary needs.
          </p>
        </div>
      </div>
    </>
  );
}