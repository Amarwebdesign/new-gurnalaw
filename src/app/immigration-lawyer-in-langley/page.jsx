import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import Container from "@/components/Layout/Container";
import SectionHeading from "@/components/Layout/SectionHeading";
import Btn from "@/components/Layout/Btns/Btn";
import Footer from "@/components/Layout/Footer";

export default function LangleyPage() {
  return (
    <Layout>
      <Header />
      <HeroInnerPage title="Immigration Lawyer in Langley" subtitle="Expert legal services for all your immigration needs" />
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Why Choose Our Langley Immigration Lawyers?" />
            <div className="mt-8 space-y-6">
              <p className="text-lg text-gray-700">
                Located in the heart of Langley, our experienced immigration lawyers provide comprehensive legal services
                to individuals and families navigating the complex Canadian immigration system.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Our Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Express Entry applications</li>
                    <li>• Family sponsorship</li>
                    <li>• Work permits</li>
                    <li>• Study permits</li>
                    <li>• Citizenship applications</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Why Langley?</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Convenient location</li>
                    <li>• Local expertise</li>
                    <li>• Community focused</li>
                    <li>• Multilingual support</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-8">
                <Btn href="/contact" text="Contact Us Today" />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
}