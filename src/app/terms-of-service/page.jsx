import FooterCTA from "@/components/FooterCTA";
import LegalPage from "@/components/Pages/Legal/LegalPage";

const sections = [
  {
    title: "Use of This Website",
    paragraphs: [
      "These Terms of Service govern your use of the Gurna Law Corporation website and any general information made available through it.",
      "By visiting, browsing, or submitting information through the website, you acknowledge that you have read and accept these terms.",
    ],
  },
  {
    title: "No Legal Advice or Retainer",
    paragraphs: [
      "Website materials are provided for general informational purposes only and do not constitute legal advice, legal opinion, or legal representation.",
      "A solicitor-client relationship is formed only after we confirm acceptance of representation and any required engagement terms are completed.",
    ],
  },
  {
    title: "Accuracy and Availability",
    paragraphs: [
      "We make reasonable efforts to maintain accurate and helpful website information, but immigration law and policy can change frequently and content may not always reflect the latest developments.",
      "We do not guarantee uninterrupted website availability and reserve the right to modify, remove, or update content without notice.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "All website content, branding, design elements, text, and media remain the property of Gurna Law Corporation or the applicable rights holder unless otherwise stated.",
      "Content may not be copied, reproduced, or redistributed without prior written permission except as permitted by law.",
    ],
  },
  {
    title: "Questions About These Terms",
    paragraphs: [
      "If you have questions about these Terms of Service or need legal advice tailored to your situation, please contact Gurna Law Corporation directly.",
    ],
  },
];

export const metadata = {
  title: "Terms of Service - Gurna Law Corporation",
  description:
    "Read the terms of service governing the use of the Gurna Law Corporation website and website content.",
};

export default function TermsOfServicePage() {
  return (
    <>
    <LegalPage
      title="Terms of Service"
      subtitle="Terms governing access to and use of the Gurna Law Corporation website."
      updatedAt="March 23, 2026"
      sections={sections}
    />
    <FooterCTA/>
    </>
  );
}
