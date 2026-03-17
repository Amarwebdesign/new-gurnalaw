import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import Container from "@/components/Layout/Container";
import Footer from "@/components/Layout/Footer";

export default function TermsAndConditionsPage() {
  return (
    <Layout>
      <Header />
      <HeroInnerPage title="Terms and Conditions" subtitle="Please read our terms of service carefully" />
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Terms and Conditions</h2>
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h3>1. Acceptance of Terms</h3>
            <p>By accessing and using Gurna Law Corporation's website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h3>2. Legal Services</h3>
            <p>The information provided on this website is for general informational purposes only and does not constitute legal advice. Always seek the advice of a qualified immigration lawyer.</p>

            <h3>3. Professional Responsibility</h3>
            <p>Gurna Law Corporation maintains the highest standards of professional conduct and client confidentiality as required by law.</p>

            <h3>4. Website Use</h3>
            <p>You may use this website for lawful purposes only. You agree not to use the website in any way that violates applicable laws or regulations.</p>

            <h3>5. Disclaimer</h3>
            <p>The information on this website is provided on an "as is" basis. We disclaim all warranties, express or implied, including but not limited to warranties of merchantability and fitness for a particular purpose.</p>

            <h3>6. Limitation of Liability</h3>
            <p>Gurna Law Corporation shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of this website or our services.</p>

            <h3>7. Contact Information</h3>
            <p>If you have any questions about these Terms and Conditions, please contact us at our office.</p>
          </div>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
}