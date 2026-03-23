import InnerBanner from "@/components/InnerBanner";

export const metadata = {
  title: 'Contact - Immigration Lawyer in Canada | Gurna Law Corporation',
  description: 'Gurna Law Corporation is offering services of Canadian immigration. These services include immigration law, visa refusal, & citizenship.',
  canonical: 'https://www.gurnalaw.ca/contact',
  openGraph: {
    siteName: 'Contact - Immigration Lawyer in Canada | Gurna Law Corporation',
    locale: 'en_US',
    type: 'website',
    title: 'Immigration Lawyer in Canada | Gurna Law Corporation',
    description: 'Gurna Law Corporation is offering services of Canadian immigration. These services include immigration law, visa refusal, & citizenship.',
    url: 'https://www.gurnalaw.ca/contact',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export default function Contact() {
  return (
    <>
      <InnerBanner
        title="Contact Us"
        subtitle="Contact us to better understand your case"
        image="/images/banner/screen.webp"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="bg-white rounded-xl shadow-[0_8px_48px_#eee] group">
              <div className="rounded-lg p-6 text-center shrink-0">
                <div className="inline-flex items-center justify-center rounded-full">
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
                    data-lucide="map-pin"
                    className="lucide lucide-map-pin h-12 w-12 text-gray-800"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3 className="md:text-2xl text-3xl font-bold text-gray-800 mb-2 mt-6">Office:</h3>
                <p className="md:text-base font-medium text-slate-500 mb-6"><a href="https://maps.app.goo.gl/s5qhBkSjNRNWvWA38">
                  Unit 208–8028, 128th St., Surrey, BC, V3W4E9
                </a>
                </p>
                <a href="#" className="relative font-medium text-primary">
                  <span className="absolute start-0 -bottom-0.5 w-0 h-0.5 group-hover:w-10/12 bg-primary transition-all duration-500"></span>
                  Find Us
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
                    data-lucide="move-right"
                    className="lucide lucide-move-right h-4 w-auto inline-block ms-2"
                  >
                    <path d="M18 8L22 12L18 16"></path>
                    <path d="M2 12H22"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-[0_8px_48px_#eee] group">
              <div className="rounded-lg p-6 text-center shrink-0">
                <div className="inline-flex items-center justify-center rounded-full">
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
                    data-lucide="alert-circle"
                    className="lucide lucide-alert-circle h-12 w-12 text-gray-800" >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" x2="12" y1="8" y2="12"></line>
                    <line x1="12" x2="12.01" y1="16" y2="16"></line>
                  </svg>
                </div>
                <h3 className="md:text-2xl text-xl font-bold text-gray-800 mb-2 mt-6">Working Time:</h3>
                <p className="md:text-base font-medium text-slate-500 mb-6">
                  Monday – Saturday<br/>
                  10am – 6pm<br/>
                  Sunday Closed
                </p>
                <a href="#" className="relative font-medium text-primary">
                  <span className="absolute start-0 -bottom-0.5 w-0 h-0.5 group-hover:w-10/12 bg-primary transition-all duration-500"></span>
                  Reach Us
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
                    data-lucide="move-right"
                    className="lucide lucide-move-right h-4 w-auto inline-block ms-2"
                  >
                    <path d="M18 8L22 12L18 16"></path>
                    <path d="M2 12H22"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-[0_8px_48px_#eee] group">
              <div className="rounded-lg p-6 text-center shrink-0">
                <div className="inline-flex items-center justify-center rounded-full">
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
                    data-lucide="smartphone"
                    className="lucide lucide-smartphone h-12 w-12 text-gray-800"
                  >
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                </div>
                <h3 className="md:text-2xl text-xl font-bold text-gray-800 mb-2 mt-6">Phone:</h3>
                <p className="md:text-base font-medium text-slate-500 mb-6"><a href="tel:+1-604-261-3171">+1-604-261-3171</a>
                </p>

                <a href="#" className="relative font-medium text-primary">
                  <span className="absolute start-0 -bottom-0.5 w-0 h-0.5 group-hover:w-10/12 bg-primary transition-all duration-500"></span>
                  Call Us
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
                    data-lucide="move-right"
                    className="lucide lucide-move-right h-4 w-auto inline-block ms-2"
                  >
                    <path d="M18 8L22 12L18 16"></path>
                    <path d="M2 12H22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
