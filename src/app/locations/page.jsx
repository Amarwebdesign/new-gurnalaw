import FooterCTA from "@/components/FooterCTA";
import InnerBanner from "@/components/InnerBanner";
import Link from "next/link";

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
      <InnerBanner
        title="Our Locations"
        subtitle="Find expert immigration lawyers near you"
        image="/images/banner/PracticeAreas.png"
        type="location"
        locationName="British Columbia"
      />
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-[#1A2530] md:text-4xl">
              Immigration Lawyers Across British Columbia
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {locations.map((location) => (
              <div key={location.slug} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <Link
                  href={location.href}
                  className="inline-flex items-center rounded-full bg-[#C8102E] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#a00d24]"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterCTA/>
    </>
  );
}
