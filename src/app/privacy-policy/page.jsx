import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import HeroInnerPage from "@/components/Layout/HeroInnerPage";
import Container from "@/components/Layout/Container";
import Footer from "@/components/Layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <Header />
      <HeroInnerPage title="Privacy Policy" subtitle="How we protect your personal information" />
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Privacy Policy</h2>
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h3>1. Information We Collect</h3>
            <p>We collect information you provide directly to us, such as when you contact us for legal services, subscribe to our newsletter, or use our website.</p>

            <h3>2. How We Use Your Information</h3>
            <p>We use the information we collect to provide legal services, communicate with you, improve our website, and comply with legal obligations.</p>

            <h3>3. Information Sharing</h3>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law.</p>

            <h3>4. Data Security</h3>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h3>5. Client Confidentiality</h3>
            <p>As immigration lawyers, we are bound by strict professional confidentiality rules. All client communications and information are protected by solicitor-client privilege.</p>

            <h3>6. Cookies</h3>
            <p>Our website may use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.</p>

            <h3>7. Contact Us</h3>
            <p>If you have questions about this Privacy Policy, please contact us directly.</p>
          </div>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
}