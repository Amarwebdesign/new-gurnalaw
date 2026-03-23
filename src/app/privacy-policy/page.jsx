import FooterCTA from "@/components/FooterCTA";
import LegalPage from "@/components/Pages/Legal/LegalPage";

const sections = [
  {
    title: "Information We Collect",
    paragraphs: [
      "We may collect personal information that you provide voluntarily when you contact our office, request a consultation, complete a website form, or otherwise communicate with Gurna Law Corporation.",
      "This information may include your name, phone number, email address, immigration-related details, and any information you choose to provide in connection with your legal matter.",
    ],
  },
  {
    title: "How We Use Information",
    paragraphs: [
      "Information collected through this website is used to respond to inquiries, assess whether we may be able to assist with your matter, improve our website experience, and fulfill legal, ethical, and administrative obligations.",
      "Submitting information through the website does not automatically create a solicitor-client relationship unless and until we expressly confirm that representation has been accepted.",
    ],
  },
  {
    title: "Confidentiality and Disclosure",
    paragraphs: [
      "We do not sell your personal information. Information may be shared only where necessary to provide services, comply with legal obligations, protect our rights, or where disclosure is otherwise authorized by law.",
      "As legal professionals, we take confidentiality seriously and handle client communications in accordance with applicable professional and legal requirements.",
    ],
  },
  {
    title: "Cookies and Website Data",
    paragraphs: [
      "Our website may use cookies, analytics tools, or technical tracking methods to understand website activity, improve performance, and support marketing and reporting functions.",
      "You may limit or disable certain tracking technologies through your browser settings, although some website functionality may be affected.",
    ],
  },
  {
    title: "Contact About Privacy",
    paragraphs: [
      "If you have any questions about this Privacy Policy or how information is handled by Gurna Law Corporation, please contact our office directly before submitting sensitive materials online.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
        <LegalPage title="Privacy Policy" subtitle="How we collect, use, and protect information shared through the Gurna Law Corporation website." updatedAt="March 23, 2026" sections={sections} />
        <FooterCTA/>
    </>
  )
  
  ;
}
