interface LatestNewsProps {
  allPosts:any
  edges:any
  preview:any
}
import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "@/components/Layout/Container";
import Header from "@/components/Layout/Header";
import MoreStories from "@/components/blog/MoreStories";
import HeroPost from "@/components/blog/HeroPost";
import Layout from "@/components/Layout/Layout";
import { getAllPostsForHome } from "@/lib/api";
const LatestNews: React.FC<LatestNewsProps> = ({ allPosts: { edges }, preview }) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Posts</title>
      </Head>
      <Header />
      <Container ContainerClass=''>
        <div className="mt-[200px]">
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
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};

export default LatestNews;