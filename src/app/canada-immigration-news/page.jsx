import MoreStories from "@/components/blog/MoreStories";
import InnerBanner from "@/components/InnerBanner";
import { getAllPostsForHome } from "@/lib/api";

export const metadata = {
  title: 'Canada Immigration News - Gurna Law Corporation',
  description: 'Stay updated with the latest Canada immigration news, updates, and insights.',
  canonical: 'https://www.gurnalaw.ca/canada-immigration-news',
  openGraph: {
    type: 'website',
    title: 'Canada Immigration News - Gurna Law Corporation',
    description: 'Stay updated with the latest Canada immigration news, updates, and insights.',
    url: 'https://www.gurnalaw.ca/canada-immigration-news',
    siteName: 'Gurna Law Corporation',
    images: '/images/saravpreet-singh-gurna-law-corporation-2.png',
  },
};

export const revalidate = 10; // ISR - revalidate every 10 seconds

export default async function CanadaImmigrationNews() {
  try {
    const allPosts = await getAllPostsForHome(false);
    const edges = allPosts?.edges || [];

    return (
      <>
      <InnerBanner
              type="news"
              serviceName="Blog"
              title="Immigration News & Updates"
              subtitle="Stay updated with the latest in Canadian immigration law and Gurna Law Corporation's recent appearances and events."
              image="/images/banner/news.png" 
            />
        <section>
          <div className="mt-[20px]">
            {edges.length > 0 && <MoreStories posts={edges} />}
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return (
      <>
        <section>
          <div className="mt-[20px] py-12">
            <h2 className="text-2xl font-bold">Latest Immigration News</h2>
            <p className="mt-4 text-gray-600">
              Check back soon for the latest immigration news and updates from Gurna Law Corporation.
            </p>
          </div>
        </section>
      </>
    );
  }
}
