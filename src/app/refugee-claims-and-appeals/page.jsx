import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import Container from "@/components/Layout/Container";
import SectionHeading from "@/components/Layout/SectionHeading";
import Btn from "@/components/Layout/Btns/Btn";
import Footer from "@/components/Layout/Footer";

export default function RefugeeClaimsPage() {
  return (
    <Layout>
      <Header />
      <HeroInnerPage title="Refugee Claims and Appeals" subtitle="Compassionate support for refugee protection claims" />
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Refugee Protection Services" />
            <div className="mt-8 space-y-6">
              <p className="text-lg text-gray-700">
                We provide dedicated legal representation for refugee claimants, including initial claims,
                hearings before the Immigration and Refugee Board, and appeal processes.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Our Refugee Services Include:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Refugee claim preparation</li>
                  <li>• IRB hearing representation</li>
                  <li>• Appeal of negative decisions</li>
                  <li>• Pre-removal risk assessments</li>
                  <li>• Humanitarian applications</li>
                </ul>
              </div>
              <p className="text-gray-700">
                We understand the urgency and sensitivity of refugee cases and provide
                culturally sensitive, comprehensive legal support.
              </p>
              <div className="text-center mt-8">
                <Btn href="/contact" text="Contact Us for Refugee Claims" />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
}