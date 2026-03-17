import { NextResponse } from 'next/server';
import { getAllPostsForHome } from '@/lib/api';

const MAIN_URL = 'https://www.gurnalaw.ca';

function getCurrentTime() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * -1;

  const pad = (num: number) => (num < 10 ? '0' + num : num);

  const formattedTime = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const timezoneOffset = `${offset >= 0 ? '+' : '-'}${pad(Math.floor(Math.abs(offset) / 60))}:${pad(Math.abs(offset) % 60)}`;

  return formattedTime + timezoneOffset;
}

function generateBlogSiteMap(allPosts: any) {
  const morePosts = allPosts?.edges?.slice(1) || [];
  return `<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="${MAIN_URL}/sitemap/style-sitemap.xsl"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${morePosts
      .map(({ node }: { node: any }) => {
        return `
      <url>
          <loc>${`${MAIN_URL}/${node.slug}`}</loc>
          <lastmod>${getCurrentTime()}</lastmod>
      </url>
    `;
      })
      .join('')}
  </urlset>`;
}

export async function GET() {
  try {
    const allPosts = await getAllPostsForHome(false);
    const blogsitemap = generateBlogSiteMap(allPosts);

    return new NextResponse(blogsitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Error generating blog sitemap:', error);
    // Return empty sitemap on error
    return new NextResponse(
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`,
      {
        headers: {
          'Content-Type': 'application/xml',
        },
      },
    );
  }
}
