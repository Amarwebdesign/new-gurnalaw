import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import Container from "@/components/Layout/Container";
import SectionHeading from "@/components/Layout/SectionHeading";
import Btn from "@/components/Layout/Btns/Btn";

export default function IDHearingsPage() {
  return (
    <>
      <HeroInnerPage title="ID Hearings" subtitle="Expert representation for inadmissibility hearings" />
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Inadmissibility Hearing Services" />
            <div className="mt-8 space-y-6">
              <p className="text-lg text-gray-700">
                We represent clients in Immigration Division (ID) hearings for various grounds of inadmissibility,
                including criminality, security, and health-related issues.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Our ID Hearing Services Include:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Criminal inadmissibility hearings</li>
                  <li>• Security inadmissibility cases</li>
                  <li>• Medical inadmissibility appeals</li>
                  <li>• Preparation of evidence and witnesses</li>
                  <li>• Post-hearing appeals</li>
                </ul>
              </div>
              <p className="text-gray-700">
                ID hearings are complex proceedings that require thorough preparation and legal expertise.
                We provide comprehensive support throughout the process.
              </p>
              <div className="text-center mt-8">
                <Btn href="/contact" text="Contact Us for ID Hearings" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
