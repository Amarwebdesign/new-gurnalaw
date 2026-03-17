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

export default function Canidianimg() {

  return (
	<>
	
	<section className="section bg-[#f0f0f0]">
		<div className=" max-w-[900px] m-auto">
		<SectionHeading
        minititlecolor="text-yellow" minititle="Gurna Law Corporation"
		title="How A Canadian Immigration Lawyer Can Assist You."
		description="Immigration laws can be complex and confusing, and a qualified immigration lawyer can guide you through the process and ensure that you are up to speed with all immigration rules and regulations. Tracking every single rule and regulation can be a daunting task for an applicant if they choose to represent themselves, which is why letting the pros handle it is the wisest bet. At Gurna Law Corporation, we engage with the immigration regulatory framework as our day job, so you will never lose out on account of not being abreast of the latest developments in this ever-evolving space."
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
				image="/images/imagritionlayer-1.webp"
				title="Expertise And Knowledge"
				description="A skilled immigration lawyer in Canada has in-depth knowledge and the necessary skill-set in immigration laws and regulations, and can provide valuable guidance on the best options for you and your family. An immigration appeal lawyer in Canada can bring an appropriate challenge to sponsorship refusals and removal orders against permanent and temporary residents.
                "
				/>
			</SwiperSlide>
			<SwiperSlide className="group">				
				<LegalSlideItem
				
					image="/images/imagritionlayer-2.webp" alt="Best Citizenship Lawyer Canada"
					title="Assistance With Paperwork And Applications"
					description="Filling out immigration applications can be daunting. Hence, an immigration lawyer can assist you with filling out your applications correctly and ensuring that all the necessary documentation is provided.
                    "
					/>
			</SwiperSlide>
			<SwiperSlide className="group" > 
				<LegalSlideItem
				image="/images/imagritionlayer-3.png" alt="Best Citizenship Lawyer Canada"
				title="Advocacy And Representation"
				description="An Immigration Lawyer can advocate on your behalf if your application is delayed or denied. They can also represent you in legal proceedings, such as appeals, and protect your rights."
				/>
			</SwiperSlide>

            <SwiperSlide className="group">
				<LegalSlideItem
				image="/images/imagritionlayer-4.webp" alt="Best Immigration Lawyer Canada"
				title="Peace Of Mind"
				description="Hiring an immigration lawyer can give you peace of mind and reduce your stress levels during the immigration process. They can keep you updated on the progress, and help you avoid any potential pitfalls. With the years of study and training that an immigration lawyer undergoes, you can rest assured.
                "
				/>
			</SwiperSlide>

            <SwiperSlide className="group">
				<LegalSlideItem
				image="/images/imagritionlayer-5.jpg" alt="Top Immigration Lawyers in Canada
                 "title="Consultancy On Life In Canada"
				description="While this goes beyond the brief, so to speak, we are happy to go over and above our service mandate and provide well researched insights to clients on starting a new life in a new country that comes with its fair share of challenges as well as opportunities. In this respect, we are not just your lawyer but also a friend and sounding board. Through our interactions we advise clients on business-cum-professional prospects in various fields of vocation and also general life tips on starting over.
                "
				/>
			</SwiperSlide>
			</Swiper>
			</div>
		</section>
	</>
  );
}