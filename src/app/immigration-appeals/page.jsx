import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import Container from "@/components/Layout/Container";
import SectionHeading from "@/components/Layout/SectionHeading";
import Btn from "@/components/Layout/Btns/Btn";

export default function ImmigrationAppealsPage() {
  return (
    <>
      <HeroInnerPage title="Immigration Appeals" subtitle="Professional assistance with immigration appeal processes" />
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Immigration Appeals Services" />
            <div className="mt-8 space-y-6">
              <p className="text-lg text-gray-700">
                We provide comprehensive support for immigration appeals at various levels,
                including Immigration Appeal Division (IAD) and Federal Court appeals.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Our Appeal Services Include:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Refugee appeal hearings</li>
                  <li>• Deportation order appeals</li>
                  <li>• Sponsorship appeal applications</li>
                  <li>• Humanitarian and compassionate appeals</li>
                  <li>• Appeal preparation and representation</li>
                </ul>
              </div>
              <p className="text-gray-700">
                Appeals require specific timelines and documentation. Our team ensures
                your appeal is filed correctly and on time.
              </p>
              <div className="text-center mt-8">
                <Btn href="/contact" text="Contact Us for Appeals" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
