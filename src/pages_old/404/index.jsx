import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout/Layout";
import Btn from "@/components/Layout/Btns/Btn";
export default function NotFound() {
  return (
    <Layout>
        <Head>
          <meta name="robots" content="noindex"/>
          <title>404 - Page Not Found - Gurna Law Corporation !</title>
            
        </Head>

        {/* <div className=" min-h-screen bg-[url('/images/404-bg.png')] bg-cover bg-no-repeat bg-center"> */}
        {/* <section className="bg-black dark:bg-gray-900"></section>
        <div className="container mx-auto">
            <div className="lg:grid grid-cols-12 items-center justify-between">
                <div className="col-span-8">
                    <div className="max-w-[570px] mx-auto flex flex-col items-center text-center justify-center min-h-screen px-4">
                        <Image width={500} height={500} src="/images/404.svg" alt="" className="mb-14"/>
                        <h2 className=" mb-6">Page not found</h2>
                        <div className="mb-10">
                            SORRY this webpage no longer exists.
                        </div>
                        <Btn link="/" title="Back To Home" />
                    </div>
                </div>
           
            </div>
       
    </div> */}
    

<section className="bg-black dark:bg-gray-900">
<div className="container mx-auto">
            <div className="lg:grid grid-cols-12 items-center justify-between">
                <div className="col-span-8">
                    <div className="max-w-[570px] mx-auto flex flex-col items-center text-center justify-center min-h-screen px-4">
                        <Image width={500} height={500} src="/images/404.svg" alt="" className="mb-14"/>
                        <h2 className=" mb-6 text-white">Page not found</h2>
                        <div className="mb-10 text-white">
                            SORRY this webpage no longer exists.
                        </div>
                        <Btn link="/" title="Back To Home" />
                    </div>
                </div>
           
            </div>
            </div>
</section>
    </Layout>
  );
}
