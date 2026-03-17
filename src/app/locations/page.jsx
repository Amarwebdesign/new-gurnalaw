import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import Container from "@/components/Layout/Container";
import SectionHeading from "@/components/Layout/SectionHeading";
import Btn from "@/components/Layout/Btns/Btn";
import Footer from "@/components/Layout/Footer";

export default function LocationsPage() {
  const locations = [
    { name: "Surrey", slug: "surrey", description: "Expert immigration legal services in Surrey." },
    { name: "Abbotsford", slug: "abbotsford", description: "Professional immigration lawyers in Abbotsford." },
    { name: "Vancouver", slug: "vancouver", description: "Trusted immigration law firm in Vancouver." },
    { name: "Coquitlam", slug: "coquitlam", description: "Comprehensive immigration services in Coquitlam." },
    { name: "Burnaby", slug: "burnaby", description: "Reliable immigration lawyers in Burnaby." },
    { name: "Langley", slug: "langley", description: "Experienced immigration legal help in Langley." },
    { name: "Richmond", slug: "richmond", description: "Dedicated immigration lawyers in Richmond." },
  ];

  return (
    <Layout>
      <Header />
      <HeroInnerPage title="Our Locations" subtitle="Find expert immigration lawyers near you" />
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading title="Immigration Lawyers Across British Columbia" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {locations.map((location) => (
              <div key={location.slug} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <Btn href={`/locations/${location.slug}`} text="Learn More" />
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
}