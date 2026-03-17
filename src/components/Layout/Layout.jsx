import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Meta from "@/components/blog/Meta";
// import WhatsAppChat from "./WhatsAppChat";

export default function Layout({preview, children}) {
  return (
    <>
      <Meta />
      <Header />
      {/* <Preloader /> */}
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      {/* <WhatsAppChat
              phoneNumber="17787983707"
              accountName="Gurna Law Corporation"
              statusMessage="We are here to help you! 😊"
              chatMessage="Hi there! 👋 Welcome to Gurna Law Corporation. How can We help you?"
              avatar="images/svg/logo.svg"
              serviceOptions="Immigration, Visa Refusal, Citizenship, Work Permit, Visa Extension, Notary Public, Others"
          /> */}
    </>
  );
}
