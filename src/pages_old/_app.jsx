import "@/styles/globals.css";
import "@/styles/andaz.css";
import "@/styles/testi.css";
import { Poppins } from "next/font/google";
import Head from "next/head";
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        {/* Google Ads gtag.js script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16748380603"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16748380603');
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BDKQ5ZZ99V">
        </script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BDKQ5ZZ99V');`,
          }}
        />
      </Head>
    <main className={`${poppins.className}`}>
    <Component {...pageProps} />
  </main>
  </>
);
}