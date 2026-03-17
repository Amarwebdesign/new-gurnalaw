import Container from '@/components/Layout/Container';
import Btn from "@/components/Layout/Btns/Btn";
import SectionHeading from "@/components/Layout/SectionHeading";
import FaqItem from '@/components/Layout/Faq/Faqitem';

export default function Faq() {
    return (
    <section className="bg-black py-32">
        <Container>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
                    <div className='sm:max-w-sm'>
                        <div className=" sticky top-[150px] text-white">
                            <SectionHeading
                            minititlecolor="text-yellow" minititle="Gurna Law Corporation"
                            title="FAQs"
                            description="Your Legal Queries Answered – Immigration, Citizenship, Notary Services, And More. Discover Expert Guidance Today!."
                            />
                            <div className='mt-5'>
                                <Btn link="/contact" title="get a quote" />
                            </div>
                        </div>
                    </div>
                    <div id="tab-accordion" className="col-span-2 faq-accordion" itemScope="" itemType="https://schema.org/FAQPage">
                      <FaqItem
                      question="What areas of law does Gurna Law Corporation specialize in?"
                      answer="Gurna Law Corporation specializes in immigration law, providing comprehensive services ranging from visa applications to deportation defense. Our expertise extends to notary public services and citizenship law."
                      />
                      <FaqItem
                      question="How can I schedule a consultation with Gurna Law Corporation?"
                      answer="To schedule a consultation, simply contact our office in Surrey. You can reach us via phone or email, and our team will assist you in setting up a convenient time."
                      />
                      <FaqItem
                      question="What sets Gurna Law Corporation apart from other law firms?"
                      answer="Our firm distinguishes itself through a client-centric approach, expert legal guidance, and a commitment to achieving positive outcomes. With over a decade of international litigation experience, we offer a comprehensive range of services."
                      />
                      <FaqItem
                      question="What documents do I need for an immigration consultation?"
                      answer="For an immigration consultation, bring any relevant documentation such as passports, visa history, and other immigration-related paperwork. This will help us assess your situation more accurately and provide tailored advice."
                      />
                      <FaqItem
                      question="How does Gurna Law Corporation ensure client confidentiality?"
                      answer="Client confidentiality is a top priority at Gurna Law Corporation. We adhere to strict ethical standards and legal practices to safeguard your information. Rest assured that your privacy is paramount throughout our engagement."
                      />
                      <FaqItem
                      question="Can Gurna Law Corporation assist with notary public services for business documents?"
                      answer="Yes, our notary public services extend to business documents. Whether it's document notarization, certification of copies, or assistance with real estate transactions, our experienced notary ensures accuracy and legality for all your business needs. For any additional questions or to seek personalized legal advice, feel free to reach out to Gurna Law Corporation. Our dedicated team is here to assist you."
                      />
                      <FaqItem
                      question="What should I expect during the immigration process with Gurna Law Corporation?"
                      answer="Our immigration process typically involves an initial consultation, document review, strategic planning, and precise application submission. We keep you informed at every stage, providing updates and addressing any concerns that may arise."
                      />
                      <FaqItem
                      question="Can Gurna Law Corporation help with citizenship applications?"
                      answer="Absolutely. We specialize in citizenship law, guiding clients through the intricacies of the application process. From document preparation to representation, our lawyers ensure a smooth path to Canadian citizenship.."
                      />
                      <FaqItem
                      question="How long does it take to receive updates on my case?"
                      answer="We understand the importance of timely communication. You can expect regular updates on the progress of your case, and our team is readily available to address any inquiries you may have during the process.."
                      />
                      <FaqItem
                      question="What if my visa application has been refused? Can Gurna Law Corporation help with an appeal?"
                      answer="Certainly. Our experienced lawyers specialize in visa refusal appeals. We assess the reasons for refusal, develop a robust appeal strategy, and represent your interests to overturn the decision and achieve a positive outcome."
                      />
                    </div>
                </div>
            </div>
        </Container>
    </section>            
    )
}


