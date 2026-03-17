import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Layout/Logo/Logo";
import Container from "@/components/Layout/Container";
import FooterCTA from "@/components/Layout/FooterCTA";
import SocialLinks from "@/components/Layout/SocialLinks";
export default function Footer() {
  const Year=new Date();
  const CurrentYear = Year.getFullYear();
  return (
<>
	<FooterCTA/>
    <div className="pt-[50px] xl:pt-[150px] pb-[50px] bg-black text-white">
			<Container>
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-[50px] xl:gap-[100px]">
					<div className="">
						<a href="#" className="hidden xl:flex items-end mb-[20px]">
							<div className="text-[28px] font-bold">Gurna Law Corporation</div>
							<div className="bg-secondary w-[10px] h-[10px] rounded-[10px]"></div>
						</a>
						<div className="hidden xl:block">
							<div className="text-[20px]">At Gurna Law Corporation, the turnover rate is quick, the processing smooth, the consultation candid, and the fee reasonable.</div>
						</div>
						<div className="text-[30px] md:text-[55px] font-black xl:mt-[30px]">+1-604-261-3171</div>
						<div className="text-[30px] md:text-[55px] font-black xl:mt-[30px]">legal@gurnalaw.ca</div>
					</div>
					<div className="group hway">
						<div className="grid grid-cols-2 md:grid-cols-3 gap-[30px]">
							<SocialLinks name="Facebook" link="https://www.facebook.com/gurnalawcorporations"/>
							<SocialLinks name="Instagram" link="https://www.instagram.com/gurnalaw/"/>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] mt-[50px]">
							<div className="col-span-2 hidden md:flex">
								<div className="pt-[5px]"><i className="fas fa-map-marker-alt"></i></div>
								<div className="ps-[15px]">
									<div className="">Unit 208–8028, 128th St., Surrey, BC, V3W4E9</div>
								</div>
							</div>
							<div>
								<div className="flex">
									<div className=""><i className="fas fa-phone"></i></div>
									<div className="ps-[15px]">
										<div className="">+1-604-261-3171</div>
									</div>
								</div>
							</div>
							<div className="col-span-2">
								<div className="flex">
									<div className=""><i className="fas fa-clock"></i></div>
									<div className="ps-[15px]">
										<div className="">Monday – Saturday, 10am – 6pm, Sunday Closed</div>
									</div>
								</div>
							</div>
							<div>
								<div className="flex">
									<div className=""><i className="fas fa-envelope"></i></div>
									<div className="ps-[15px]">
										<div className="">legal@gurnalaw.ca</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<div className="hidden xl:block pt-[150px]">
			<Container>
				<div className="hidden xl:flex justify-center">
					<a href="https://www.gurnalaw.ca/" className="hover:text-[#fbb033] mx-[30px]">HOME</a>
					<a href="/about" className="hover:text-[#fbb033] mx-[30px]">ABOUT</a>
					<a href="/practice-areas" className="hover:text-[#fbb033] mx-[30px]">PRACTICE AREAS</a>
					<a href="/locations" className="hover:text-[#fbb033] mx-[30px]">LOCATIONS</a>
					<a href="/media" className="hover:text-[#fbb033] mx-[30px]">MEDIA</a>
					<a href="/canada-immigration-news" className="hover:text-[#fbb033] mx-[30px]">IMMIGRATION NEWS</a>
					<a href="/contact" className="hover:text-[#fbb033] mx-[30px]">CONTACT US</a>
				</div>
				<div className="my-[30px] border-t-[1px] border-t-[#454545]"></div>
			
				{/* <div className="text-center">Copyright 2024, All Right reserved</div> */}
				<div className="text-center mt-5">Copyright {new Date().getFullYear()}, All Rights Reserved.
				<div className="mt-2">
					<Link href="/terms-and-conditions" className="hover:text-[#fbb033] mx-2">Terms and Conditions</Link>
					<Link href="/privacy-policy" className="hover:text-[#fbb033] mx-2">Privacy Policy</Link>
				</div>
				</div>

		
			</Container>
			</div>
			
		</div>
</>
  );
}
