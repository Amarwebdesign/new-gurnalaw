const MAIN_URL = 'https://www.gurnalaw.ca';
function getCurrentTime() {
    const now = new Date();
    const offset = now.getTimezoneOffset() * -1; // Offset in minutes
  
    const pad = (num) => (num < 10 ? '0' + num : num);
  
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
    <loc>${MAIN_URL}/parents-and-grandparents-program-will-resume-this-month</loc>
    <lastmod>${getCurrentTime()}</lastmod>
    <priority>0.80</priority>
    </url>
    <url>
    <loc>${MAIN_URL}/new-pathway-to-permanent-residence-for-flight-ps752-victims-families</loc>
    <lastmod>${getCurrentTime()}</lastmod>
    <priority>0.80</priority>
    </url>
     <url>
    <loc>${MAIN_URL}/canadas-new-permanent-residency-targets-for-2025-2027-what-you-need-to-know</loc>
    <lastmod>${getCurrentTime()}</lastmod>
    <priority>0.80</priority>
    </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
}


export default SiteMap;
