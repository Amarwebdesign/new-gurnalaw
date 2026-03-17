import Image from 'next/image'
import Container from "@/components/Layout/Container";
import SectionHeading from "@/components/Layout/SectionHeading";
import MoreServiceItem from '@/components/Home/MoreServices/MoreServiceItem';

export default function LegalServices() {
    return (
        <section className="section section-services bg-white">
            <Container>
                <SectionHeading
                align="text-center"
                minititlecolor="text-blue" minititle="More Legal Services"
                title="Gurna Law Corporation Provides Service"
                description="Explore a diverse range of legal expertise beyond immigration and citizenship. Our expanded services cover specialized legal advice, representation, and tailored solutions to meet unique needs. Trust us for comprehensive support across a spectrum of legal challenges."
                />
                <div className="mt-16">   
                    
                        <MoreServiceItem
                            image="/images/1.png" alt="Visa Refusal Lawyers

                            "
                            title="Assistance with Temporary Residence Visa and Work Permit Applications"
                            description="If you are facing issues with CBSA or you have been issued any of the three removal orders- departure, exclusion or deportation, you can get in touch with us for professional advice."
                        />
                        <MoreServiceItem
                            image="/images/2.png"alt="Top Immigration Lawyers in Canada
                            "
                            title="Representation in Removal Proceedings"
                            description="Our Immigration Law firm in BC helps individuals and businesses navigate the complex application process for obtaining visas and work permits."
                        />
                        <MoreServiceItem
                            image="/images/3.png"alt="Canadian Visa Refusal Lawyer
                            "
                            title="Citizenship and Permanent Residency Applications"
                            description="We help you to apply for citizenship or permanent residency in Canada across various PR categories including Express Entry, Provincial Nominee Programs, and other IRCC pilot PR programs."
                        />
                        <MoreServiceItem
                            image="/images/4.png"alt="Best Immigration Consultants in Surrey

                            "
                            title="Family Sponsorship"
                            description="Canadian citizens and permanent residents routinely get our assistance in sponsoring their family members for immigration to Canada."
                        />
                        <MoreServiceItem
                            image="/images/5.png"alt="Canada Immigration Law Firm

                            "
                            title="Business Immigration"
                            description="Businesses and entrepreneurs with immigration matters related to starting or investing in Canadian businesses can contact us anytime. Our services range across various LMIA-exempt work permit categories and permanent residency pathways through investment in different provinces of Canada."
                        />
                        <MoreServiceItem
                            image="/images/6.png"alt="Immigration Firms in Canada

                            "
                            title="Refugee Claims"
                            description="We offer assistance to people seeking refugee status in Canada by representing them in refugee hearings and appeals. We strongly believe in providing a voice to the persecuted persons, be they from any religious, racial, gender denomination etc."
                        />
                </div>	
            </Container>
        </section> 
    );
}