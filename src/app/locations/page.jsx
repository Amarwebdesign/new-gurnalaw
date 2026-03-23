import HeroInnerPage from "@/components/InnerBanner/HeroInnerPage";
import Container from "@/components/InnerBanner/Container";
import SectionHeading from "@/components/InnerBanner/SectionHeading";
import Btn from "@/components/Layout/Btns/Btn";

export default function LocationsPage() {
  const locations = [
    { name: "Surrey", slug: "surrey", href: "/immigration-lawyer-in-surrey", description: "Expert immigration legal services in Surrey." },
    { name: "Abbotsford", slug: "abbotsford", href: "/immigration-lawyer-in-abbotsford", description: "Professional immigration lawyers in Abbotsford." },
    { name: "Vancouver", slug: "vancouver", href: "/immigration-lawyer-in-vancouver", description: "Trusted immigration law firm in Vancouver." },
    { name: "Coquitlam", slug: "coquitlam", href: "/immigration-lawyer-in-coquitlam", description: "Comprehensive immigration services in Coquitlam." },
    { name: "Burnaby", slug: "burnaby", href: "/immigration-lawyer-in-burnaby", description: "Reliable immigration lawyers in Burnaby." },
    { name: "Langley", slug: "langley", href: "/immigration-lawyer-in-langley", description: "Experienced immigration legal help in Langley." },
    { name: "Richmond", slug: "richmond", href: "/immigration-lawyer-in-richmond", description: "Dedicated immigration lawyers in Richmond." },
  ];

  return (
    <>
      <HeroInnerPage title="Our Locations" subtitle="Find expert immigration lawyers near you" />
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading title="Immigration Lawyers Across British Columbia" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {locations.map((location) => (
              <div key={location.slug} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <Btn href={location.href} text="Learn More" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
