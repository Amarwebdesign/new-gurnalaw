import Head from "next/head";

import Layout from "@/components/Layout/Layout";
import BcPnpCalculator from "@/components/Calculator/BcPnpCalculator";
import Bcpnpherro from "@/components/herroforbcnp";
export default function PageBcPnpCalculator() {
  const Year=new Date();
  const CurrentYear = Year.getFullYear();
  return (
    <Layout>
        <Head>
            <title>BC PNP Calculator | Canada PR Points - New Version {new Date().getFullYear()}</title>
            <meta name="description" content={`BC PNP Calculator - New Version ${new Date().getFullYear()} | Canada PR Points Calculator | Express Entry Canada | Permanent Resident Points Calculator | PR Visa Points Calculator`} />
          
        </Head>

        <Bcpnpherro />
        <BcPnpCalculator/>
    </Layout>
  );
}