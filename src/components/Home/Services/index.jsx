"use client";

import Image from "next/image";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/navigation';
import Container from "@/components/Layout/Container";
import SlideItem from "@/components/Home/Services/SlideItem";
import MarqueHeading from "@/components/Layout/MarqueHeading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import React from 'react';
export default function Services() {
  return (
	<>
	<MarqueHeading
    name="Our Services"
    headingClass="services"
    />
	<div className="section relative overflow-hidden bg-primary">
		<Container>
			<div className="xl:flex items-center gap-[50px]">
				<div className="w-full xl:w-[35%]">
					<h2 className="text-white text-[32px] md:text-[52px] leading-[1.3] font-bold  mb-[20px]">
					Gurna Law Corporation Provides Service
					</h2>
					<p className="mb-[100px] text-white">
					With a wide range of services to assist people in navigating the difficulties of the immigration processes, Gurna Law Corporation is a well-known name in the field of Canadian immigration and refugee law.
					</p>
				</div>
				<div className="w-full xl:w-[65%]">								
					<div className="xl:me-[-250px]">								
						<div className="service-slider">
							<Swiper
								modules={[Navigation]}
								spaceBetween={20}
								loop={true}
								navigation
								pagination={{ clickable: true }}
								scrollbar={{ draggable: true }}
								breakpoints={{
								450: {
								slidesPerView: 1
								},
								768: {
								slidesPerView: 2
								},
								992: {
								slidesPerView: 3
								}
								}}
								>
								<SwiperSlide>
									<SlideItem
										title="Immigration Lawyer in Canada"
										description="Our experienced Immigration Lawyers in Canada guide you through the complex immigration process, ensuring a smooth transition to your new life. Trust us to handle your case with expertise and dedication."
										link="/immigration-lawyer"
										image="/images/home/immigration-lawyer-in-canada.jpg"
									/>
								</SwiperSlide>
								<SwiperSlide>
									<SlideItem
										title="Visa Refusal Lawyer in Canada"
										description="Facing visa refusals? Our Visa Refusal Lawyers specialize in challenging decisions, providing strategic solutions to overcome obstacles and maximize your chances of approval."
										link="/visa-refusal-lawyer"
										image="/images/home/visa-refusal-lawyer-in-canada.jpg"
									/>
								</SwiperSlide>
								<SwiperSlide>
									<SlideItem
										title="Citizenship Lawyer in Canada"
										description="Achieve your dream of Canadian citizenship with our dedicated Citizenship Lawyers. We navigate the application process, offering tailored advice and support to make your journey to citizenship seamless."
										link="/citizenship-lawyer"
										image="/images/home/citizenship-lawyer-in-canada.jpg"
									/>
								</SwiperSlide>
								<SwiperSlide>
									<SlideItem
										title="Notary Public in Surrey"
										description="Need notarial services? Our Notary Public services ensure the authenticity of your documents. Rely on us for efficient and reliable notarization, serving your legal and personal needs with professionalism."
										link="/notary-public"
										image="/images/home/notary-public-services-near-me.jpg"
									/>
								</SwiperSlide>
								</Swiper>
						</div>
					</div>
				</div>
			</div>
		</Container>
	</div>
	</>
  );
}