import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import Container from "@/components/Layout/Container";
import SectionHeading from "@/components/Layout/SectionHeading";
import Btn from "@/components/Layout/Btns/Btn";

export default function IRCCApplicationsPage() {
  return (
    <>
      <HeroInnerPage title="IRCC Applications" subtitle="Complete assistance with Immigration, Refugees and Citizenship Canada applications" />
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="IRCC Application Services" />
            <div className="mt-8 space-y-6">
              <p className="text-lg text-gray-700">
                We handle all types of applications submitted to Immigration, Refugees and Citizenship Canada (IRCC),
                ensuring accuracy and compliance with current regulations.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Our IRCC Services Include:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Express Entry applications</li>
                  <li>• Provincial Nominee Programs</li>
                  <li>• Work and study permits</li>
                  <li>• Family sponsorship</li>
                  <li>• Permanent residence applications</li>
                  <li>• Citizenship applications</li>
                </ul>
              </div>
              <p className="text-gray-700">
                Our team stays updated with the latest IRCC policies and procedures to provide
                the best possible service for your application.
              </p>
              <div className="text-center mt-8">
                <Btn href="/contact" text="Start Your Application" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
