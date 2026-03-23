import InnerBanner from "@/components/InnerBanner";
import Introduction from "@/components/IntroDuction";
import FooterCTA from "@/components/FooterCTA";

export const metadata = {
  title: 'Media & News | Gurna Law Corporation',
  description: 'Watch the latest media appearances, legal insights, and community updates from the immigration lawyers at Gurna Law Corporation in British Columbia.',
  canonical: 'https://www.gurnalaw.ca/media',
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Media & News | Gurna Law Corporation',
    description: 'Watch the latest media appearances, legal insights, and community updates from the immigration lawyers at Gurna Law Corporation in British Columbia.',
    url: 'https://www.gurnalaw.ca/media',
    siteName: 'Gurna Law Corporation - Canadian immigration lawyer in BC',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

// Extracted video data into an array for cleaner mapping and easy future updates
const MEDIA_VIDEOS = [
  { 
    id: 1, 
    title: "Gurna Law YouTube Feature",
    src: "https://www.youtube.com/embed/-yzjehkhTZQ?si=PleXpHGD6Rf9gTp0" 
  },
  { 
    id: 2, 
    title: "Facebook Legal Insight 1",
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D459268313037554" 
  },
  { 
    id: 3, 
    title: "Facebook Legal Insight 2",
    src: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D459268313037554" 
  },
  { 
    id: 4, 
    title: "Facebook Legal Insight 3",
    src: "https://www.youtube.com/embed/-yzjehkhTZQ?si=6L2ypvkaTOw" 
  },
  { 
    id: 5, 
    title: "Facebook Legal Insight 3",
    src: "https://www.youtube.com/embed/-yzjehkhTZQ?si=ylHwfAPNyPs" 
  }
];

export default function Media() {
  return (
    <div className="font-['Inter']">
      <InnerBanner
        type="general"
        title="Media & Insights"
        subtitle="Stay Informed With Our Latest Broadcasts, Legal Updates, and Community Engagements."
        image="/images/banner/media.webp" 
      />

      <Introduction
        subtitle="Gurna Law in the Media"
        title="Empowering You Through Knowledge"
        details={[
            "Navigating Canadian immigration law requires staying up to date with constantly evolving policies, regulations, and processing trends. At Gurna Law Corporation, we believe that an informed client is an empowered client. We regularly share our legal insights, breakdown complex immigration topics, and discuss recent changes in the law through various media channels.",
            "Browse our recent video appearances below to hear directly from our legal team. Whether we are discussing the latest Express Entry draws, explaining the intricacies of family sponsorship, or providing tips for navigating border entries, our goal is to provide you with clear, accessible, and accurate legal information."
        ]}
      />

      {/* Modern, responsive video grid section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {MEDIA_VIDEOS.map((video) => (
              <div 
                key={video.id} 
                className="group relative bg-white rounded-2xl p-2 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Using aspect-video ensures the iframes scale perfectly on all screen sizes 
                  without losing their 16:9 ratio. I replaced the heavy yellow border with a 
                  subtle accent frame to match the professional tone of the other pages.
                */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border-b-4 border-[#C8102E]">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full" 
                    src={video.src} 
                    title={video.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <FooterCTA />
    </div>
  );
}