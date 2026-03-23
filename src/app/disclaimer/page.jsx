import FooterCTA from "@/components/FooterCTA";
import LegalPage from "@/components/Pages/Legal/LegalPage";

const sections = [
  {
    title: "General Website Disclaimer",
    paragraphs: [
      "Information published on this website is intended for general informational purposes only and should not be treated as legal advice for any specific matter.",
      "Immigration law depends on the facts of each case, current policy, procedural timelines, and documentary evidence. Results vary from case to case.",
    ],
  },
  {
    title: "No Guarantee of Outcome",
    paragraphs: [
      "Nothing on this website should be interpreted as a guarantee, warranty, or promise of approval, success, or a particular legal outcome.",
      "Past experience and prior results do not guarantee future results in any immigration, appeal, court, or application matter.",
    ],
  },
  {
    title: "No Solicitor-Client Relationship",
    paragraphs: [
      "Reading website content, sending an inquiry, or communicating through a website form does not by itself create a solicitor-client relationship.",
      "Representation begins only after we confirm acceptance of your matter and any required engagement documents are completed.",
    ],
  },
  {
    title: "Third-Party and External Content",
    paragraphs: [
      "This website may reference external resources, platforms, or third-party tools. Gurna Law Corporation does not control those external sites and is not responsible for their availability, content, or privacy practices.",
      "You should review the terms and privacy policies of any external platform before using it.",
    ],
  },
  {
    title: "Seek Advice for Your Matter",
    paragraphs: [
      "If you need legal advice about your own immigration matter, you should contact a qualified lawyer and obtain advice tailored to your specific facts before taking action.",
    ],
  },
];

export const metadata = {
  title: "Legal Disclaimer - Gurna Law Corporation",
  description:
    "Read the legal disclaimer for the Gurna Law Corporation website, including limits on legal advice, website reliance, and outcomes.",
};

export default function DisclaimerPage() {
  return (
    <>
    <LegalPage
      title="Legal Disclaimer"
      subtitle="Important limitations regarding website content, legal advice, and reliance on information published by Gurna Law Corporation."
      updatedAt="March 23, 2026"
      sections={sections}
    />
    <FooterCTA/>
    </>
  );
}
