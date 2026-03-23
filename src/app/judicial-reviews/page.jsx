import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import Container from "@/components/Layout/Container";
import SectionHeading from "@/components/Layout/SectionHeading";
import Btn from "@/components/Layout/Btns/Btn";
import Footer from "@/components/Layout/Footer";

export default function JudicialReviewsPage() {
  return (
    <Layout>
      <Header />
      <HeroInnerPage title="Judicial Reviews" subtitle="Expert legal assistance for judicial review applications" />
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Judicial Review Services" />
            <div className="mt-8 space-y-6">
              <p className="text-lg text-gray-700">
                Our experienced immigration lawyers specialize in judicial review applications, helping clients
                challenge immigration decisions through the Federal Court of Canada.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Our Judicial Review Services Include:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Review of immigration decisions</li>
                  <li>• Preparation of judicial review applications</li>
                  <li>• Federal Court representation</li>
                  <li>• Appeals of judicial review decisions</li>
                  <li>• Time-sensitive applications</li>
                </ul>
              </div>
              <p className="text-gray-700">
                Judicial reviews must be filed within 15 days of the decision. Contact us immediately
                if you believe an immigration decision was unreasonable or incorrect.
              </p>
              <div className="text-center mt-8">
                <Btn href="/contact" text="Contact Us for Judicial Review" />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
}