const MAIN_URL = 'https://www.gurnalaw.ca';
function getCurrentTime() {
    const now = new Date();
    const offset = now.getTimezoneOffset() * -1; // Offset in minutes
  
    const pad = (num) => (num < 10 ? '0' + num : num);
  
    const formattedTime = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    const timezoneOffset = `${offset >= 0 ? '+' : '-'}${pad(Math.floor(Math.abs(offset) / 60))}:${pad(Math.abs(offset) % 60)}`;
  
    return formattedTime + timezoneOffset;
  }
import { getAllPostsForHome } from "@/lib/api";
function generateBlogSiteMap(allPosts) {
  const morePosts = allPosts.edges.slice(1);
  return `<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="${MAIN_URL}/sitemap/style-sitemap.xsl"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${morePosts
       .map(({ node }) => {
         return `
       <url>
           <loc>${`${MAIN_URL}/${node.slug}`}</loc>
           <lastmod>${getCurrentTime()}</lastmod>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function BlogSiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const allPosts = await getAllPostsForHome();
  // We generate the XML sitemap with the posts data
  const blogsitemap = generateBlogSiteMap(allPosts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(blogsitemap);
  res.end();
  return {
    props: {},
  };
}

export default BlogSiteMap;
