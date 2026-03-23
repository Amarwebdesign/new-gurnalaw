import LegalPage from "@/components/Pages/Legal/LegalPage";

const sections = [
  {
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing or using this website, you agree to be bound by the terms governing use of the website and the information made available through it.",
      "If you do not agree with these terms, you should discontinue use of the website.",
    ],
  },
  {
    title: "Website Content and Legal Information",
    paragraphs: [
      "Content on this website is provided for general informational purposes only and should not be relied upon as legal advice for any specific matter.",
      "Use of this website, sending us a message, or reading website content does not by itself create a solicitor-client relationship with Gurna Law Corporation.",
    ],
  },
  {
    title: "Permitted Use",
    paragraphs: [
      "You agree to use the website only for lawful purposes and in a way that does not interfere with the operation, security, or integrity of the website.",
      "You may not misuse the website, attempt unauthorized access, or reproduce website content in a manner that infringes intellectual property or other legal rights.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "Gurna Law Corporation does not guarantee that website content is complete, current, or error-free at all times.",
      "To the fullest extent permitted by law, we disclaim liability arising from reliance on website information or from interruptions, errors, or technical issues affecting website access.",
    ],
  },
  {
    title: "Contact and Clarification",
    paragraphs: [
      "If you need clarification about these terms or would like to discuss legal representation, please contact our office directly before relying on website content for a legal decision.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      subtitle="Terms governing the use of this website and the legal information published by Gurna Law Corporation."
      updatedAt="March 23, 2026"
      sections={sections}
    />
  );
}
