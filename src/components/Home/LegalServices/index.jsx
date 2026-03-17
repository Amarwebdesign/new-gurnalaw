"use client";

import Image from "next/image";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import Container from "@/components/Layout/Container";
import SectionHeading from "@/components/Layout/SectionHeading";
import LegalSlideItem from "@/components/Home/LegalServices/LegalSlideItem";

export default function LegalServices() {

  return (
	<>
	
	<section className="section bg-[#f0f0f0]">
		<div className=" max-w-[900px] m-auto">
		<SectionHeading
		title="What Legal Services Do We Offer"
		description="At our core, we hold your trust in high regard and prioritize your well-being. As a result, we make a steadfast commitment to refrain from offering false guarantees or pledges."
		align="text-center"
		/>
		</div>
		<div className="legal-services-slider mt-[100px]">
		<Swiper
			modules={[Navigation]}
			spaceBetween={20}
			navigation
			loop={true}
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			>
			<SwiperSlide className="hway group">
				<LegalSlideItem
				image="/images/about-img.jpeg"
				title="Judicial Review"
				description="Gurna Law Corporation offers clients individualized legal counsel and advice for a wide range of applications, including first-time entry, student visas, work permits, permanent residency, appeals, and reviews by the Federal Court of Canada. This is done with the help of a licensed barrister, Saravpreet Singh. Gurna Law Corporation is a reputable and trusted law firm that can help you at every stage with skilled and trustworthy legal advice for your immigration concerns."
				/>
			</SwiperSlide>
			<SwiperSlide className="group">				
				<LegalSlideItem
					image="/images/home/canada-sponsorship-appeals.jpg"
					title="Sponsorship Appeals"
					description="Married, common-law, or conjugal partners may be sponsored for permanent residency in Canada. Your application should ideally go through if your relationship is genuine. However, there is always a danger that something will go wrong. Gurna Law Corporation is available to assist you in these situations, and you may relax while we handle your application and ensure that there are no delays at any time."
					/>
			</SwiperSlide>
			<SwiperSlide className="group">
				<LegalSlideItem
				image="/images/home/notary-public-services-near-me.jpg"
				title="Admissibility Hearings"
				description="An Immigration and refugee board (IRB) hearing may be required of a permanent resident (PR) or temporary resident (TR) in Canada if they are found to be inadmissible. After the hearing, they will either be deemed acceptable or not. It is known as an admissibility hearing. Gurna Law Corporation can represent you at the admissibility hearing and present a strong defense as per your situation and circumstances."
				/>
			</SwiperSlide>
			<SwiperSlide className="group">
				<LegalSlideItem
				image="/images/home/notary-public-services-near-me.jpg"
				title="Help with TRV and Work Permit Applications"
				description="If you are facing issues with CBSA or you have been issued any of the three removal orders- departure, exclusion or deportation, you can get in touch with us for professional advice."
				/>
			</SwiperSlide>
			<SwiperSlide className="group">
				<LegalSlideItem
				image="/images/home/notary-public-services-near-me.jpg"
				title="Representation in Removal Proceedings"
				description="Our Immigration Law firm in BC helps individuals and businesses navigate the complex application process for obtaining visas and work permits."
				/>
			</SwiperSlide>
			<SwiperSlide className="group">
				<LegalSlideItem
				image="/images/home/notary-public-services-near-me.jpg"
				title="Citizenship and PR Applications"
				description="We help you to apply for citizenship or permanent residency in Canada across various PR categories including Express Entry, Provincial Nominee Programs, and other IRCC pilot PR programs."
				/>
			</SwiperSlide>
			<SwiperSlide className="group">
				<LegalSlideItem
				image="/images/home/notary-public-services-near-me.jpg"
				title="Family Sponsorship"
				description="Canadian citizens and permanent residents routinely get our assistance in sponsoring their family members for immigration to Canada."
				/>
			</SwiperSlide>
			<SwiperSlide className="group">
				<LegalSlideItem
				image="/images/home/notary-public-services-near-me.jpg"
				title="Business Immigration"
				description="Businesses and entrepreneurs with immigration matters related to starting or investing in Canadian businesses can contact us anytime. Our services range across various LMIA-exempt work permit categories and permanent residency pathways through investment in different provinces of Canada."
				/>
			</SwiperSlide>
			<SwiperSlide className="group">
				<LegalSlideItem
				image="/images/home/notary-public-services-near-me.jpg"
				title="Refugee Claims"
				description="We offer assistance to people seeking refugee status in Canada by representing them in refugee hearings and appeals. We strongly believe in providing a voice to the persecuted persons, be they from any religious, racial, gender denomination etc."
				/>
			</SwiperSlide>
			</Swiper>
			</div>
		</section>
	</>
  );
}