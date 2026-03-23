import FooterCTA from "@/components/FooterCTA";
import LegalPage from "@/components/Pages/Legal/LegalPage";

const sections = [
  {
    title: "Scope of Representation",
    paragraphs: [
      "A retainer agreement defines the specific legal services Gurna Law Corporation agrees to provide, along with any limits on that representation.",
      "Legal services are limited to the scope expressly confirmed in writing. Work outside the agreed scope may require a revised or additional retainer.",
    ],
  },
  {
    title: "Client Responsibilities",
    paragraphs: [
      "Clients are expected to provide accurate and complete information, respond promptly to requests, review documents carefully, and disclose any material changes affecting their matter.",
      "Delays, omissions, or inaccurate information can affect legal strategy, procedural deadlines, or the outcome of an application or proceeding.",
    ],
  },
  {
    title: "Fees and Disbursements",
    paragraphs: [
      "Legal fees, consultation fees, government filing fees, translation costs, expert expenses, courier charges, and other disbursements are addressed in the applicable engagement terms.",
      "Unless otherwise agreed in writing, professional fees and disbursements remain payable in accordance with the retainer terms for the matter.",
    ],
  },
  {
    title: "Communication and File Handling",
    paragraphs: [
      "We communicate through reasonable methods including email, phone, document exchange, meetings, or other channels suitable for the matter.",
      "Clients should ensure they remain reachable and promptly review communications, particularly where immigration deadlines or hearing schedules are involved.",
    ],
  },
  {
    title: "Formal Retainer Required",
    paragraphs: [
      "This page is only a general overview and is not itself a binding retainer. A formal written agreement must be reviewed and accepted before representation begins.",
      "If you are considering retaining Gurna Law Corporation, please contact our office for the appropriate engagement terms for your matter.",
    ],
  },
];

export const metadata = {
  title: "Retainer Agreement - Gurna Law Corporation",
  description:
    "General information about scope of representation, responsibilities, fees, and engagement terms at Gurna Law Corporation.",
};

export default function RetainerAgreementPage() {
  return (
    <>
    <LegalPage
      title="Retainer Agreement"
      subtitle="General information about legal engagement terms, representation scope, client responsibilities, and communication expectations."
      updatedAt="March 23, 2026"
      sections={sections}
    />
    
        <FooterCTA/>
        </>
  );
}
