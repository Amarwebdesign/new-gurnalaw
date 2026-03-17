import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import HeroPost from "@/components/blog/HeroPost";
import MoreStories from "@/components/blog/MoreStories";
import Container from "@/components/Layout/Container";
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
    const heroPost = edges[0]?.node;
    const morePosts = edges.slice(1);

    return (
      <>
        <HeroInnerPage
          title="IMMIGRATION NEWS"
          backgroundImageUrl='/images/banner/news.png'
          content="Gurna Law Corporation"
        />
        <Container ContainerClass="">
          <div className="mt-[20px]">
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.featuredImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
        </Container>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return (
      <>
        <HeroInnerPage
          title="IMMIGRATION NEWS"
          backgroundImageUrl='/images/banner/news.png'
          content="Gurna Law Corporation"
        />
        <Container ContainerClass="">
          <div className="mt-[20px] py-12">
            <h2 className="text-2xl font-bold">Latest Immigration News</h2>
            <p className="mt-4 text-gray-600">
              Check back soon for the latest immigration news and updates from Gurna Law Corporation.
            </p>
          </div>
        </Container>
      </>
    );
  }
}