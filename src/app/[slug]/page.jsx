import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
import ContainerNews from "@/components/Layout/ContainerNews";
import PostBody from "@/components/blog/PostBody";
import MoreStories from "@/components/blog/MoreStories";
import Header from "@/components/Layout/HeaderNews";
import PostHeader from "@/components/blog/PostHeader";
import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import CTAarea from "@/components/Layout/CTAarea";
import SectionSeparator from "@/components/Layout/SectionSeparator";
import PostTitle from "@/components/blog/PostTitle";
import Tags from "@/components/blog/Tags";

export async function generateStaticParams() {
  const allPosts = await getAllPostsWithSlug();
  const edges = allPosts?.edges || [];
  return edges.map(({ node }) => ({ slug: node.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!slug) {
    return {
      title: "Blog Post",
      description: "Blog post details",
    };
  }

  try {
    const data = await getPostAndMorePosts(slug, false, null);
    const post = data?.post;
    if (!post) {
      return {
        title: "Post Not Found",
        description: "This post could not be found.",
      };
    }

    return {
      title: post.title,
      description: post.excerpt || post.title,
      openGraph: {
        type: "article",
        title: post.title,
        description: post.excerpt || post.title,
        url: `https://www.gurnalaw.ca/${post.slug}`,
        images: post.featuredImage?.node?.sourceUrl ? [post.featuredImage.node.sourceUrl] : [],
      },
    };
  } catch (error) {
    console.error("Error fetching post metadata:", error);
    return {
      title: "Blog Post",
      description: "Read this blog post from Gurna Law Corporation",
    };
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  if (!slug) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold">Post Not Found</h1>
        <p className="text-gray-600 mt-4">The post you are looking for does not exist.</p>
      </div>
    );
  }

  try {
    const data = await getPostAndMorePosts(slug, false, null);
    const post = data?.post;
    const morePosts = data?.posts?.edges || [];

    if (process.env.NODE_ENV === 'development') {
      console.log('[blog slug]', slug);
      console.log('[blog post]', post);
    }

    if (!post) {
      console.warn('[blog] post not found for slug:', slug);
      return (
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold">Post Not Found</h1>
          <p className="text-gray-600 mt-4">The post you are looking for does not exist.</p>
        </div>
      );
    }

    return (
      <>
        <Header />
        <HeroInnerPage
          title="IMMIGRATION NEWS"
          content="Gurna Law Corporation"
          backgroundImageUrl="/images/inner-page-banner.webp"
        />

        <div className="bg-white">
          <article>
            <ContainerNews>
              <div className="grid grid-cols-3 relative mt-28">
                <div className="pt-[50px] pr-[100px] col-span-2 border-r-[1px] border-r-[#f0f0f0]">
                  <PostHeader
                    title={post.title}
                    coverImage={post.featuredImage}
                    date={post.date}
                    author={post.author}
                    categories={post.categories}
                  />
                  <PostBody content={post.content} />
                  <footer>
                    {post.tags?.edges?.length > 0 && <Tags tags={post.tags} />}
                  </footer>
                </div>
                <div className="sticky top-0">
                  <CTAarea />
                </div>
              </div>
            </ContainerNews>
          </article>
        </div>

        <SectionSeparator />
        <div className="pb-[1px]">
          <ContainerNews>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </ContainerNews>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold">Error Loading Post</h1>
        <p className="text-gray-600 mt-4">There was an error loading this blog post. Please try again later.</p>
      </div>
    );
  }
}
