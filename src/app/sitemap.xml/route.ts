import { NextResponse } from 'next/server';

const MAIN_URL = 'https://www.gurnalaw.ca';

function getCurrentTime() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * -1;

  const pad = (num: number) => (num < 10 ? '0' + num : num);

  const formattedTime = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const timezoneOffset = `${offset >= 0 ? '+' : '-'}${pad(Math.floor(Math.abs(offset) / 60))}:${pad(Math.abs(offset) % 60)}`;

  return formattedTime + timezoneOffset;
}

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="${MAIN_URL}/sitemap/style-sitemap.xsl"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${MAIN_URL}/</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/about</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/immigration-lawyer-in-surrey</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/immigration-lawyer-in-abbotsford</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/immigration-lawyer-in-vancouver</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/visa-refusal-lawyer</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/citizenship-lawyer</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/notary-public</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/canada-immigration-news</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/media</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/contact</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/practice-areas</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/practice-areas/judicial-reviews</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.70</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/practice-areas/immigration-appeals</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.70</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/practice-areas/ircc-applications</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.70</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/practice-areas/refugee-claims-and-appeals</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.70</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/practice-areas/id-hearings</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.70</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/locations</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/locations/surrey</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.70</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/locations/abbotsford</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.70</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/locations/vancouver</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.70</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/locations/coquitlam</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.70</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/locations/burnaby</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.70</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/locations/langley</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.70</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/locations/richmond</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.70</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/thank-you</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/bc-pnp-points-calculator-canada</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/terms-of-service</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.60</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/terms-and-conditions</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.60</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/privacy-policy</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.60</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/disclaimer</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.60</priority>
    </url>
    <url>
      <loc>${MAIN_URL}/retainer-agreement</loc>
      <lastmod>${getCurrentTime()}</lastmod>
      <priority>0.60</priority>
    </url>
  </urlset>`;
}

export async function GET() {
  const sitemap = generateSiteMap();

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
