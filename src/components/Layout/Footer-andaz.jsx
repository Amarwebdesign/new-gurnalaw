import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Layout/Logo/Logo";
import Container from "@/components/Layout/Container";
export default function Footer() {
  const Year=new Date();
  const CurrentYear = Year.getFullYear();
  return (
<>
<section className="relative z-10 overflow-hidden bg-white dark:bg-dark py-20 lg:py-[120px]">
    <Container>
        <div className="flex flex-wrap -mx-4 lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="block mb-4 text-base font-semibold text-primary">
                More Information
                </span>
                <h2 className="text-dark dark:text-white mb-6 text-[50px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                Contact Us To Better Understand Your Case
                </h2>
                <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-9">
                Contact us to unravel the complexities of your case. Our expert team is ready to provide tailored legal guidance, ensuring you grasp the nuances of your situation. Trust us to illuminate your path forward with clarity and confidence.
                </p>
                <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z" fill="currentColor" />
                        </svg>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                            Our Location
                        </h4>
                        <p className="text-base text-body-color dark:text-dark-6"><a href="https://maps.app.goo.gl/s5qhBkSjNRNWvWA38">
                        Unit 208–8028, 128th St., Surrey, BC, V3W4E9
                        </a> </p>
                    </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_941_17577)">
                            <path d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z" fill="currentColor" />
                            <path d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z" fill="currentColor" />
                            <path d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z" fill="currentColor" />
                            </g>
                            <defs>
                            <clipPath id="clip0_941_17577">
                                <rect width="32" height="32" fill="white" />
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                            Phone Number
                        </h4>
                        <p className="text-base text-body-color dark:text-dark-6"><a href="tel:+1-604-261-3171">+1-604-261-3171</a></p>
                        <p className="text-base text-body-color dark:text-dark-6"><a href="tel: +1-604-547-31337"> +1-604-547-3133</a></p>
                    </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z" fill="currentColor" />
                        </svg>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                        Working Time
                        </h4>
                        <p className="text-base text-body-color dark:text-dark-6">
                        Monday – Saturday 10am – 6pm Sunday Closed
                        </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                <div className="relative p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
                <form>
                    <div className="mb-6">
                        <input type="text" placeholder=" Name" className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none" />
                    </div>
                    <div className="mb-6">
                        <input type="email" placeholder="Email" className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none" />
                    </div>
                    <div className="mb-6">
                        <input type="text" placeholder=" Phone" className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none" />
                    </div>
                    <div className="mb-6">
                        <input type="text" placeholder=" Subject" className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none" />
                    </div>
                    
                    <div className="mb-6">
                        <textarea rows="6" placeholder="Your Message" className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full p-3 hover:text-white text-black transition border rounded  bg-yellow-500 hover:bg-blue-800">
                            Send Message
                        </button>
                    </div>
                </form>
                <div>
                    <span className="absolute -top-10 -right-9 z-[-1]">
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z" fill="#3056D3" />
                        </svg>
                    </span>
                    <span className="absolute -right-10 top-[90px] z-[-1]">
                    <Image alt=''  priority={true} src={"/images/svgviewer-png-output.png"} width={100} height={100}/>
                        
                    </span>
                    <span className="absolute -left-7 -bottom-7 z-[-1]">
                        <Image alt='' priority={true} src={"/images/svgviewer-png-output (1).png"} width={100} height={100}/>
                        
                    </span>
                </div>
                </div>
            </div>
        </div>
    </Container>
    </section>
<footer className="relative bg-blueGray-200 pt-8 pb-6">
  <Container>
    <div className="md:grid gap-4 md:grid-cols-12 text-left lg:text-left">
       <div className="col-span-7 ">
            <Link href="/" title="Digital Marketing Courses & Training Institute" className="flex items-end lg:w-[300px] w-[250px] mb-4">
                <Logo/>
            </Link>
            <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
            Find us on any of these platforms, we respond 1-2 business days.
            </h5>
       </div>
        <div className="col-span-2">
        <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
        <ul className="list-unstyled">
            <li>
            <Link alt="" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">About</Link>
            </li>
            <li>
            <Link alt="" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Practice Areas</Link>
            </li>
            <li>
            <Link alt="" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Media</Link>
            </li>
            <li>
            <Link alt="" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Contact</Link>
            </li>
        </ul>
        </div>
       <div className="col-span-2">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Services</span>
            <ul className="list-unstyled">
              <li>
                <Link alt="" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Immigration Lawyer</Link>
              </li>
              <li>
                <Link alt="" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Visa Refusal Lawyer</Link>
              </li>
              <li>
                <Link alt="" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Citizenship Lawyer</Link>
              </li>
              <li>
                <Link alt="" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Notary Public</Link>
              </li>
            </ul>
          </div>
       <div className="col-span-1 mb-6 gap-2 flex">
            <Link href='#' className=""><Image src={'/images/social/fb.svg'}  height={100} width={100} priority={true}/></Link>
            <Link href='#' className=""><Image src={'/images/social/instra.svg'}  height={100} width={100} priority={true}/></Link>
        </div>
    </div>
    
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
         <span id="get-current-year"></span><Link alt=""href="#" className="text-blueGray-500 hover:text-gray-800" target="_blank"/> © 2024 GurnaLaw – 
          <Link alt=""href="#" className="text-blueGray-500 hover:text-blueGray-800">All Rights Reserved.</Link>.
        </div>
      </div>
    </div>
  </Container>
</footer>
</>
//   <footer className="section bg-black text-white">
//               <Container>
//                 <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
//                     <div className="single-footer">
//                         <div className="lg:max-w-[450px]">
//                         <Link href="/" title="Digital Marketing Courses & Training Institute" className="flex items-end lg:w-[300px] w-[250px]">
//                             <Logo/>
//                         </Link>
//                             <p className="mt-5">
//                              for digital marketing education. Our institute offers comprehensive courses designed to equip students with the skills needed to excel in today's competitive digital landscape. With experienced instructors and a hands-on approach to learning, dmcti is your gateway to success in the world of digital marketing.
//                             </p>
//                             <ul className="flex space-x-4 pt-8">
//                                 <li>
//                                     <Link href="https://www.facebook.com/dmctimohali" className="flex h-12 w-12 flex-col items-center justify-center rounded  text-2xl  transition hover:bg-primary hover:" target="_blank">
//                                             <Image src="/images/social/fb.svg" alt="" width={20} height={20}/>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="https://www.instagram.com/dmctimohali/" className="flex h-12 w-12 flex-col items-center justify-center rounded  text-2xl  transition hover:bg-primary hover:" target="_blank">
//                                             <Image src="/images/social/instra.svg" alt="" width={20} height={20}/>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="https://www.linkedin.com/dmctimohali" className="flex h-12 w-12 flex-col items-center justify-center rounded  text-2xl  transition hover:bg-primary hover:" target="_blank">
//                                             <Image src="/images/social/ln.svg" alt="" width={20} height={20}/>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="https://twitter.com/dmctimohali" className="flex h-12 w-12 flex-col items-center justify-center rounded  text-2xl  transition hover:bg-primary hover:" target="_blank">
//                                             <Image src="/images/social/twiiter.svg" alt="" width={20} height={20}/>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="https://www.youtube.com/@dmctimohali" className="flex h-12 w-12 flex-col items-center justify-center rounded  text-2xl  transition hover:bg-primary hover:" target="_blank">
//                                             <Image src="/images/social/youtube.svg" alt="" width={20} height={20}/>
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="single-footer grid grid-cols-2 gap-7">
//                         <div className="flex-1 lg:flex-none">
//                             <h4 className="mb-8 text-2xl font-bold ">Institute</h4>
//                             <ul className="list-item space-y-5">
//                                 <li>
//                                     <Link href="/">Home</Link>
//                                 </li>
//                                 <li>
//                                     <Link href="about">About Us</Link>
//                                 </li>
//                                 <li>
//                                     <Link href="courses">Courses</Link>
//                                 </li>
//                                 <li>
//                                     <Link href="placement">Placement</Link>
//                                 </li>
//                                 <li>
//                                     <Link href="contact">Contact</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="flex-1 lg:flex-none">
//                             <h4 className="mb-8 text-2xl font-bold ">Legal</h4>
//                             <ul className="list-item space-y-5">
//                                 <li>
//                                     <Link href="contact">Contact</Link>
//                                 </li>
//                                 <li>
//                                     <Link href="terms-conditions">Tearm &amp; Condition</Link>
//                                 </li>
//                                 <li>
//                                     <Link href="privacy-policy">Privacy Policy</Link>
//                                 </li>
//                                 <li>
//                                     <Link href="cookies-policy">Cookies Policy</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="single-footer">
//                         <div className="flex-1 lg:flex-none">
//                             <h4 className="mb-8 text-2xl font-bold ">Contact</h4>
//                             <ul className="list-item space-y-6">
//                                 <li className="flex">
//                                 <div className="flex-none mr-6">
//                                     <div>
//                                     <Image src="/images/svg/mail.svg" alt=""  width={56} height={56}/>
//                                     </div>
//                                 </div>
//                                 <div className="flex-1">
//                                     <h4 className="lg:text-xl text-lg mb-1 font-bold">Email-Us :</h4>
//                                     <div><Link href="mailto:info.dmcti@gmail.com" className="">info.dmcti@gmail.com</Link></div>
//                                 </div>
//                                 </li>
//                                 <li className="flex">
//                                 <div className="flex-none mr-6">
//                                     <div>
//                                     <Image src="/images/svg/call.svg" alt=""  width={56} height={56}/>
//                                     </div>
//                                 </div>
//                                 <div className="flex-1">
//                                     <h4 className="lg:text-xl text-lg mb-1 font-bold">Call Us:</h4>
//                                     <div><Link href="tel:+91-97796-44404" className="">+91-97796-44404</Link></div>
//                                 </div>
//                                 </li>
//                                 <li className="flex">
//                                 <div className="flex-none mr-6">
//                                     <div>
//                                     <Image src="/images/svg/map.svg" alt=""  width={56} height={56}/>
//                                     </div>
//                                 </div>
//                                 <div className="flex-1">
//                                     <h4 className="lg:text-xl text-lg mb-1 font-bold">Office :</h4>
//                                     <div>D151, Phase 8, Industrial Area, Mohali, Punjab 160071</div>
//                                 </div>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//             <div className="container mx-auto border-t border-white border-opacity-[0.1] md:p-8 p-2 text-center text-base">
//                 © Copyright {CurrentYear} | dmcti - Digital Marketing Courses & Training Institute in Mohali | Chandigarh | All Rights Reserved
//             </div>
//         </footer>
  );
}
