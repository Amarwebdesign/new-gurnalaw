interface IndexProps {
  allPosts:any
  edges:any
  preview:any
}
import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "@/components/Layout/Container";
// import Header from "@/components/Layout/HeaderNews";
import MoreStories from "@/components/blog/MoreStories";
import HeroPost from "@/components/blog/HeroPost";
import Layout from "@/components/Layout/Layout";
import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import { getAllPostsForHome } from "@/lib/api";
const Index: React.FC<IndexProps> = ({ allPosts: { edges }, preview }) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Canada Immigration News - Gurna Law Corroporation</title>
          <meta name="description" content="Canada Immigration News - Gurna Law Corroporation" />
          <link rel="canonical" href="https://www.gurnalaw.ca/canada-immigration-news" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Gurna Law Coroporation News" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Canada Immigration News - Gurna Law Corroporation" />
          <meta property="og:description" content="Canada Immigration News - Gurna Law Corroporation" />
          <meta property="og:url" content="https://www.gurnalaw.ca/canada-immigration-news" />
          <meta property="og:site_name" content="Gurna Law Corporation - Canadian immigration lawyer in BC" />
      </Head>
      {/* <Header />  */}

      <HeroInnerPage
        title="Canada Immigration News"
        content="Empower Your Canadian Dream With Our Immigration Services."
        backgroundImageUrl='/images/banner/newsimagration.webp'
      />
      <Container ContainerClass=''>
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

export default Index;