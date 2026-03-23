"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import LegalSlideItem from "@/components/LegalServices/LegalSlideItem";

export default function CitizenshipCarousel() {
  return (
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
            title="Expert Guidance"
            description="A Canadian citizenship lawyer offers expert guidance on the complexities of the citizenship process, ensuring you understand eligibility criteria, documentation requirements, and legal intricacies."
            link="#"
          />
        </SwiperSlide>
        <SwiperSlide className="group">
          <LegalSlideItem
            image="/images/imagritionlayer-2.webp"
            title="Strategic Planning"
            description="They create a personalized strategy tailored to your specific situation, maximizing the likelihood of a successful citizenship application. This includes addressing potential challenges and optimizing your case."
            link="#"
          />
        </SwiperSlide>
        <SwiperSlide className="group">
          <LegalSlideItem
            image="/images/imagritionlayer-3.png"
            title="Documentation Assistance"
            description="Your lawyer assists in preparing and organizing the required documentation, ensuring accuracy and completeness. This step is crucial to meeting Canadian immigration standards."
            link="#"
          />
        </SwiperSlide>

        <SwiperSlide className="group">
          <LegalSlideItem
            image="/images/imagritionlayer-4.webp"
            title="Representation And Advocacy"
            description="In case of complications or inquiries from immigration authorities, your lawyer serves as your advocate, handling communication, navigating challenges, and representing your interests to secure a positive outcome."
            link="#"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
