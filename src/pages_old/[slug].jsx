import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
// import Schemas from '@/components/schemas/PostPageSchemas';
import ContainerNews from "@/components/Layout/ContainerNews";
import PostBody from "@/components/blog/PostBody";
import MoreStories from "@/components/blog/MoreStories";
import Header from "@/components/Layout/HeaderNews";
import PostHeader from "@/components/blog/PostHeader";
import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import CoverImage from "@/components/blog/CoverImage";
import CTAarea from "@/components/Layout/CTAarea";
import SectionSeparator from "@/components/Layout/SectionSeparator";
import Layout from "@/components/Layout/Layout";
import PostTitle from "@/components/blog/PostTitle";
import Tags from "@/components/blog/Tags";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
import HeroNewsPage from "@/components/Layout/HeroNewsPage";
export default function Post({ post, posts, preview }) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
        <Header />
        <Head>
            <title>{`${post.title}`}</title>
            <meta name="description" content={`${post.title}`} />
            {/* <link rel="canonical" href="https://www.gurnalaw.ca" /> */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="Gurna Law Coroporation News" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={`${post.title}`} />
            <meta property="og:description" content={`${post.title}`} />
            {/* <meta property="og:url" content="https://www.gurnalaw.ca" /> */}
            <meta property="og:site_name" content="Gurna Law Corporation - Canadian immigration lawyer in BC" />
            <meta property="og:image" content={post.featuredImage?.node.sourceUrl} />
            {/* <Schemas schemaData={post}/> */}
        </Head>
        <HeroInnerPage
            title="
            IMMIGRATION NEWS"
            content="Gurna Law Corporation"
            backgroundImageUrl='/images/inner-page-banner.webp'
        />
        {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
        ) : (
            <>

                
            <div className="bg-white">
                <article>
                <ContainerNews>
                    <div className="grid grid-cols-3 relative mt-28	">
                        <div className="pt-[50px] pr-[100px] col-span-2 border-r-[1px] border-r-[#f0f0f0]">
                            <PostHeader
                                title={post.title}
                                coverImage={post.featuredImage}
                                date={post.date}
                                author={post.author}
                                categories={post.categories}
                            />                        
                            {/* <CoverImage title={post.title} coverImage={post.featuredImage} /> */}
                            <PostBody content={post.content} />
                            <footer>
                                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
                            </footer>
                        </div>
                        <div className="sticky top-0">
                       <CTAarea/>
                       </div>
                    </div>
                    </ContainerNews>
                </article>
                <SectionSeparator />
                <div className="pb-[1px]">
                    <ContainerNews>
                        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                    </ContainerNews>
                </div>
            </div>
          </>
        )}
    </Layout>
  );
}

export const getServerSideProps= async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
      revalidate: 10,
    }
  };
};
