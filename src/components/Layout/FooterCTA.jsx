"use client";

import Image from "next/image";
import Container from "@/components/Layout/Container";
import BtnCall from "@/components/Layout/Btns/BtnCall";
import SectionHeading from "@/components/Layout/SectionHeading";
import { useForm } from "react-hook-form"
import { useState } from 'react';
import { useRouter } from 'next/navigation'
export default function FooterCTA() {
	const { register, handleSubmit, handleError, formState: { errors } } = useForm({
        mode: "onChange"
    });
	const handleKeyPress = (event) => {
		const allowedKeys = ['+', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9','(',')',' '];
		if (!allowedKeys.includes(event.key)) {
		  event.preventDefault();
		}
	  };
	const router = useRouter()
    const [ButtonShow, setButtonShow] = useState(false);
	  const onSubmit = async (data) => {
		setButtonShow(true)
        try {
          const response = await fetch('https://crm-api.amrsoftec.com/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          router.push('/thank-you')
          setButtonShow(false)
        } catch (error) {
          console.error('Error:', error);
          alert('There was a problem sending your message.');
        }
    }
  return (
<>
	<section className="relative z-10 overflow-hidden bg-[#f0f0f0] dark:bg-dark py-20 lg:py-[120px]">
		<Container>
			<div className="flex flex-wrap -mx-4 lg:justify-between">
				<div className="w-full px-4 lg:w-1/2 xl:w-6/12">
					<div className="mb-12 max-w-[570px] lg:mb-0">
						<SectionHeading
						minititlecolor="text-blue" minititle="Contact Us"
						title="To Better Unders tand Your Case"
						description="Contact us to unravel the complexities of your case. Our expert team is ready to provide tailored legal guidance, ensuring you grasp the nuances of your situation. Trust us to illuminate your path forward with clarity and confidence."
						/>
						<div className="mt-5 hidden md:block">
							<BtnCall link="tel:+16042613171" title="+1-604-261-3171" />
						</div>
					</div>
				</div>
				<div className="w-full px-4 lg:w-1/2 xl:w-5/12">
					<div className="relative p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
					<form onSubmit={handleSubmit(onSubmit, handleError)}>
						<div className="grid md:grid-cols-2 gap-4">
							<div className="relative">
								<input type="text" placeholder="Name" name="name" {...register("name", { required: "Name is required" })} className={`input-feild ${errors?.name ? "error": ""} border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none`}/>
								{errors?.name && (
									<p className='error-message'>{errors.name.message}</p>
								)}
							</div>
							<div className="relative">
								<input type="text" placeholder="Email" name="email" {...register("email", { required: "Email is required",  
										pattern: {
										value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
										message: "Invalid email address"
										} 
								})}  className={`input-feild ${errors?.email ? "error": ""} border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none`} />
								{errors?.email && (
									<p className='error-message'>{errors.email.message}</p>
								)}
							</div>
							<div className="relative">
								<input
									type="text"
									placeholder="Phone"
									name="phone"
									{...register("phone", {
										required: "Phone is required",
										pattern: {
										value: /^(?:\+[0-9])?[0-9]{7,16}$/,
										message: "Must be numeric and up to 16 digits"
										}
									})}
									className={`input-feild ${errors?.phone ? "error" : ""} border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none`}
									onKeyPress={handleKeyPress}
								/>
								{errors?.phone && (
									<p className='error-message'>{errors.phone.message}</p>
								)}
							</div>
							<div className="relative">
								<input type="text" placeholder="Subject" name="subject" {...register("subject", { required: "Subject is required" })} className={`input-feild ${errors?.subject ? "error": ""} border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none`} />
								{errors?.subject && (
									<p className='error-message'>{errors.subject.message}</p>
								)}
							</div>
						</div>							
						<div className="mt-4">
							<div className="relative">
								<textarea rows="6" placeholder="Your Message" name="message" {...register("message", { required: "Message is required" })} className={`input-feild ${errors?.message ? "error": ""} border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none`}></textarea>
								{errors?.message && (
									<p className='error-message'>{errors.message.message}</p>
								)}
							</div>
						</div>
						<div className="mt-4">
							<button type="submit"
							disabled={ButtonShow ? true:false} className="w-full p-3 hover:text-white text-black transition border rounded  bg-yellow-500 hover:bg-blue-800">
								{ButtonShow ? 'Sending': "Send Message"}
							</button>
						</div>
					</form>
					<div>
						<span className="absolute -top-10 -right-9 z-[-1]">
							<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z" fill="#eab308" />
							</svg>
						</span>
						<span className="absolute -right-10 top-[90px] z-[-1]">
						<Image alt=''  src={"/images/svgviewer-png-output.png"} width={100} height={100}/>
							
						</span>
						<span className="absolute -left-7 -bottom-7 z-[-1]">
							<Image alt='' src={"/images/svgviewer-png-output-2.png"} width={100} height={100}/>
							
						</span>
					</div>
					</div>
				</div>
			</div>
		</Container>
    </section>
</>
  );
}
