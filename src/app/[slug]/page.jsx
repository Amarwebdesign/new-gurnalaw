import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
import MoreStories from "@/components/blog/MoreStories";
import PostBody from "@/components/blog/PostBody";
import Tags from "@/components/blog/Tags";
import Image from "next/image";
import FooterCTA from "@/components/FooterCTA";

function stripHtml(html) {
  return html ? html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim() : "";
}

function formatDate(dateString) {
  if (!dateString) return "";

  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

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
      description: stripHtml(post.excerpt) || stripHtml(post.title),
      openGraph: {
        type: "article",
        title: post.title,
        description: stripHtml(post.excerpt) || stripHtml(post.title),
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
        <p className="mt-4 text-gray-600">The post you are looking for does not exist.</p>
      </div>
    );
  }

  try {
    const data = await getPostAndMorePosts(slug, false, null);
    const post = data?.post;
    const morePosts = data?.posts?.edges || [];

    if (!post) {
      return (
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold">Post Not Found</h1>
          <p className="mt-4 text-gray-600">The post you are looking for does not exist.</p>
        </div>
      );
    }

    const excerpt = stripHtml(post.excerpt);
    const coverImage = post.featuredImage?.node?.sourceUrl;
    const categoryNames = post.categories?.edges?.map(({ node }) => node.name).filter(Boolean) || [];

    return (
      <>
        <section className="relative overflow-hidden bg-[#1A2530] pt-32 pb-16 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,16,46,0.22),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_30%)]" />
          <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="">
              <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                <span>{formatDate(post.date)}</span>
                {/* {categoryNames.length > 0 ? <span className="h-1 w-1 rounded-full bg-white/50" /> : null}
                {categoryNames.length > 0 ? <span>{categoryNames.join(" / ")}</span> : null} */}
              </div>

              <h1
                className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />

              {excerpt ? (
                <p className="mt-6 text-lg leading-8 text-white/75">{excerpt}</p>
              ) : null}
            </div>
          </div>
        </section>

        <article className="bg-[#F8F6F1] py-10 md:py-16">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            {coverImage ? (
              <div className="relative mb-10 overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
                <Image
                  src={coverImage}
                  alt={stripHtml(post.title)}
                  width={1600}
                  height={900}
                  className="h-[500px] w-full object-cover"
                  priority
                />
              </div>
            ) : null}

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
              <div className="min-w-0 overflow-hidden rounded-[28px] border border-[#E7E2D9] bg-white p-6 shadow-sm md:p-10 lg:p-12">
                <PostBody content={post.content} />
                {post.tags?.edges?.length > 0 ? <Tags tags={post.tags} /> : null}
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28">
                <div className="rounded-[24px] border border-[#E7E2D9] bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8102E]">
                    Need Legal Guidance?
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#1A2530]">
                    Speak with Gurna Law about your immigration matter.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Get focused legal advice on refusals, appeals, applications, hearings, and
                    other time-sensitive immigration issues in Canada.
                  </p>
                  <div className="mt-6 space-y-3">
                    <a
                      href="tel:+16042613171"
                      className="flex w-full items-center justify-center rounded-full bg-[#C8102E] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#a00d24]"
                    >
                      Call +1 604 261 3171
                    </a>
                    <a
                      href="/contact"
                      className="flex w-full items-center justify-center rounded-full border border-[#1A2530]/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#1A2530] transition hover:border-[#C8102E] hover:text-[#C8102E]"
                    >
                      Request Consultation
                    </a>
                  </div>
                </div>

                <div className="rounded-[24px] border border-[#E7E2D9] bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8102E]">
                    Article Snapshot
                  </p>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
                    <div>
                      <p className="font-semibold text-[#1A2530]">Published</p>
                      <p>{formatDate(post.date)}</p>
                    </div>
                    {categoryNames.length > 0 ? (
                      <div>
                        <p className="font-semibold text-[#1A2530]">Categories</p>
                        <p>{categoryNames.join(", ")}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {morePosts.length > 0 ? <MoreStories posts={morePosts} /> : null}
        <FooterCTA/>
      </>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold">Error Loading Post</h1>
        <p className="mt-4 text-gray-600">
          There was an error loading this blog post. Please try again later.
        </p>
      </div>
    );
  }
}
