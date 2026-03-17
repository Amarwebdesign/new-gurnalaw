"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import Container from "@/components/Layout/Container";
import SectionHeading from "@/components/Layout/SectionHeading";
import TestimonialSlideItem from "@/components/Testimonials/TestimonialItem";
export default function Testimonial() {

  return (
    <>    
        <section className="testimonial-section section relative overflow-hidden bg-[#f0f0f0]">          
            <Container>
                <div className="xl:flex gap-[50px]">
                    <div className="w-full xl:w-[35%]">
                        <SectionHeading
                        minititlecolor="text-blue" minititle="What Our Client Says?"
                        title="Testimonials"
                        description="Explore the journeys of our satisfied clients through their testimonials. Hear firsthand accounts of how our dedicated services have transformed lives, resolved legal challenges, and exceeded expectations. These testimonials showcase our commitment to excellence and the positive impact we've had on individuals navigating immigration, visa refusals, citizenship, and notarial needs."
                        />
                    </div>
                    <div className="w-full xl:w-[65%]">								
                        <div className="xl:me-[-250px]">								
                            <div className="testimonial-slider mt-5 lg:mt-0">
                                <Swiper className="tp-it-testi-active swiper-container"
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
                                }
                                }}
                                >
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Lokesh Kumar (LK)"
                                    testimonial="I MUST write this review for the best lawyer I know. I had applied for my work permit extension application under a public policy through a consultant. Not only was it refused, I was issued a voluntary departure order by IRCC with 30 days to go. I was totally shaken. My family had spent so much money on my Canadian education. I could not think of returning at this stage without having even completed my post graduation work permit term. I was scared and nervous. I was recommended Gurna Law Corporation by a friend. They filed for judicial review in the Federal Court. The case was settled. They also helped me with redetermination and finally I was approved for a work permit! From a voluntary departure to a work permit, my journey with Gurna Law Corporation was extraordinary. They are an extraordinary law firm. I highly recommend them to the whole world. Thanks again!!!"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Harman Sohi"
                                    testimonial="After multiple refusals in the past, I approached Gurna Law Corporation in Canada for applying for my tourist visa. I applied for my minor son at the same time. I am so happy to say that I was approved only in a few days. Gurna Law Corporation submitted a strong application with all relevant information and documentation. Their submission letters are just great! I am so happy I handed my case to them. They are the best in their field."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Amir Zeb"
                                    testimonial="My brother Yasar Shah, who is a citizen of Pakistan, was applying for a visitor visa repeatedly. He got three refusals. I had a choice to either reapply or approach the Federal Court for judicial review. I chose to go for judicial review. I did my research and noticed the expertise of Gurna Law Corporation in the field of judicial review work. I was impressed to go through their profile. As somebody who likes to research a lot before taking a decision, I consulted some friends in my area. They also happened to know about this firm as they have a very good name in the area in the field of immigration law. I handed the case of my brother to them. This case carried special importance to me. Today, we received a settlement in court. The refusal decision has been set aside. I highly thank Gurna Law Corporation for the fantastic service. They are always approachable, everyone is friendly and Mr. Saravpreet Singh is a particularly knowledgeable person. Many many thanks again sir!!"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Navjeet Matharu"
                                    testimonial="I came to Canada on a visitor visa. I applied to convert it to a work permit as I had found a job in Canada. My application was refused. I was informed by a friend that Gurna Law Corporation in Surrey, BC are the best persons to approach in this situation. They listed to all my concerns were patiently and carefully. I requested Mr. Saravpreet Singh take up my case. I was delighted when he accepted it. I got a brilliant result in court. The case was settled and the decision of refusal withdrawn. I am very happy with the outcome. All credit goes to Gurna Law Corporation. I recommend them in the highest terms."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Mukesh Khanna"
                                    testimonial="I came to Canada on a closed LMIA work permit. I was not given a job and I was facing issues. I was suggested by a friend that I can try for an open work permit. Many people said that there is almost no chance for getting the open work permit approved. But when I contacted Mr. Saravpreet Singh at Gurna Law Corporation, he understood my situation very sympathetically. I felt reassured speaking with him and I requested him to submit a strong application to IRCC. He did just that and today I got approved for an open work permit. I am so relieved. All credit to the sincere and honest hard work of Gurna Law Corporation. Many thanks!!"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Manoj Kavuri"
                                    testimonial="I wanted to apply for my parents to visit me in Canada. At that time my parents are in the USA on a visiting visa. I earlier consulted some persons who mentioned that it would be difficult to get the visa approved because of family ties and they are already on visiting visas in usa. I learned about Gurna Law Corporation from a friend who had gotten a great result in this court case through the same firm. I approached them and the first thing I noticed was how approachable and patient they are. Mr. Saravpreet Singh was himself there for us at all times. We got a lot of confidence just after talking to him. He and his team are so helpful in the process of preparing paperwork. Mr. Saravpreet Singh reviewed and made sure the documentation with us before dropping the visas. We got our parents’ visas approved in a 1 week time. I am delighted and so thankful to Gurna Law Corporation. To me, they are dealing things with a clear view and confidence in their field."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Jashandeep Singh Warring"
                                    testimonial="They are simply the very best! They are experts at immigration law. I approached Gurna Law Corporation for the visitor visa application of my brother who had earlier been refused. He is young and unmarried person. He was refused for family ties. My parents already have a visitor visa and I am already here as a permanent resident. Mr. Saravpreet Singh was confident that he could get an approval. I went ahead with his confidence, and today the visitor visa of my brother Mehakdeep stands approved! Thank you Gurna Law. I am so happy that my brother is coming to Canada to meet me. 🎉🎉"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Manwinder Singh"
                                    testimonial="I had five study permit refusals. My cousin in Canada suggested that only Gurna Law Corporation can get you a visa in this situation. And I got a study permit approval on the very first time I applied through Gurna Law Corporation. I cannot believe it! I am so excited and happy. They are just brilliant people. Mr. Saravpreet Singh is the best immigration lawyer I know of. He is so professional and hardworking. He looked at all my past refusals and prepared my case in such a thorough manner. He made sure all aspects of the case are covered. His submission letter was superb. I cannot express my delight enough. My dream to study in Canada has come true, thanks to the awesome work of Gurna Law Corporation. I cannot recommend them enough. For anybody in a difficult immigration situation, they are the people you need by your side."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Jagroop Singh"
                                    testimonial="Gurna Law Corporation is best immigration law firm in Surrey. I am highly thankful for the efforts of Saravpreet Singh and his team for getting me and my family permanent residence in Canada. We are Portuguese citizens and had no idea how to navigate the Canadian immigration system. Thanks to Saravpreet, we have obtained PR is a quick time. Great job!!!"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Gurpal Singh"
                                    testimonial="I am thrilled about the result in my application. I contacted Gurna Law Corporation to apply for a work permit after two refusals in my study permit applications. Mr. Saravpreet Singh assessed my case very minutely. I gained confidence after talking to him. I applied and in a very short time my work permit was approved. Thank you Gurna Law Corporation!"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Takshak khokra"
                                    testimonial="When my immigration status in Canada was initially denied, it was a severe setback. However, Mr. Saravpreet Singh's expertise in immigration law helped me navigate through the complex process of reapplying and ultimately restoring my status. He ensured every detail was accounted for, and was always available to answer my questions and concerns. With his assistance, I have reclaimed my life in Canada. For anyone facing immigration hurdles, he is the ally you need."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Jasvir Singh"
                                    testimonial="My permanent residence application was stuck for over three years. My family was in India and I was unable to unite with them because of the delay. On a friend’s reference I approached Gurna Law Corporation. Mr. Saravpreet Singh is a great person. He listened to me patiently and suggested I approach the court. I did that and I am so glad that I met him. My case was finalized very shortly after approaching the court. My whole family are permanent residents of Canada today. All thanks to Mr. Singh’s efforts. I will be thankful forever. 🙏"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Singh Jatinder"
                                    testimonial="I got my and my family's PR application done by Mr. Saravpreet Singh. He is a very professional person. He helped me at every step and explained everything in detail. After my successful PR application, I hired Gurna Law Corporation for not only my own family's, but also my extended family's immigration related needs. He has never let me down. Thank you for always being there."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Ramandeep Dhaliwal"
                                    testimonial="I approached Gurna Law Corporation after the refusal of my spouse's work permit. Mr. Singh put up the case very strongly. We got an approval in quick time. Thank you for the great work. I recommend this law form for all immigration related matters."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Faisal Khanzada"
                                    testimonial="I am Faisal Khanzada from Karchi, Pakistan, living in Canada as a permanent resident. I submitted a sponsorship application for my spouse and child through Gurna Law Corporation. The service they provide was impeccable. I received timely updates. From the very start to the end, the process was seamless. I was provided with a thorough checklist of all the documents required. At every stage, I was properly guided. I am extremely satisfied by the professionalism and dedication of this law firm. I will definitely recommend them to all my friends and relatives in the future."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Vamsi Kavuri"
                                    testimonial="My name is Vamsi Krishna Kavuri. I am from Andhra Pradesh, India. My story is that after completion of my studies, I applied for a post-graduation work permit but it was not approved for a very long time. I kept waiting and waiting. My wife’s work permit extension application was also filed at the same time as a dependant upon me. I wanted to travel to India but did not have a work permit document yet. My wife and I had started to face problems in our employment for lack of a status document. We did not know what to do. By chance, when discussing the situation with a good friend, he asked us to contact Mr. Saravpreet Singh at Gurna Law Corporation. We immediately did and he advised that we could file for a writ of mandamus. We went ahead as he had guided and approached the Federal Court through Gurna Law Corporaton. Much to our delight, today both my and my wife’s permits were approved. I give full credit to Gurna Law Corporation for making this possible. It is a huge relief for our family. I have no hesitation in saying that Gurna Law Corporation is the best immigration law firm for handling mandamus cases. Thank you again!"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Sanjeev Kumar"
                                    testimonial="Saravpreet Singh has always been there for all my immigration related tasks. He is very helpful and kind. He understood my situation and guided me through the different applications I have done for my family. I appreciate your help and kindness Gurna Law Corporation."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Amandeep Gill"
                                    testimonial="Sunny veer g thank you so much for give us new life in canada... Thank you gurna law corporation"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="nifty tuli"
                                    testimonial="My name is Nifty Tuli. Gurna Law Corporation is the best immigration law firm. I was out of status for the last almost three years. Mr. Saravpreet Singh got a Temporary Resident Permit/TRP approved for me. I am so relieved to be back into legal status in Canada. For everyone who thinks all hope is lost for them, Saravpreet Singh is the angel for you."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Sharda Rani"
                                    testimonial="I give full credit to Gurna Law Corporation to give us new life in canada after 13th years... thank you so much veer g"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Baljit Kaur"
                                    testimonial="The LMIA based work permit of my spouse and my open work permit were approved without any issues, thanks to the awesome efforts of Gurna Law Corporation. We felt our case was hard but they made it look easy. As we have got to know Mr. Saravpreet Singh more, we can vouch he is the most honest and sincere professional in the immigration field. His knowledge of law and his approach towards the work are truly remarkable. He is always available and is most gentle in his conduct. He is a complete professional. We worked with other immigration consultants in the past, but working with a lawyer was indeed different. We highly recommend Gurna Law Corporation for all immigration tasks."
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <TestimonialSlideItem
                                    name="Hardeep Singh Gill"
                                    testimonial="I was denied refugee protection. Gurna Law Corporation filed my appeal and the appeal was allowed by Refugee Appeal Division today on December 6, 2023. I am so relieved. Gurna Law Corporation are experts in dealing with refugee matters. I recommend them to anyone who needs protection from their home country. They listen to you and are always there for you. Mr. Saravpreet Singh is a very kind individual. He understood my situation and put in a lot of hard work in my case. Without him this would not have been possible!"
                                    />
                                </SwiperSlide>
                                
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </>
  );
};