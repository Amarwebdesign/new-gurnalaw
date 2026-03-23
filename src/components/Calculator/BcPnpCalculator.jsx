
"use client";

import React, { useEffect } from 'react';
import { PageBcPnpCalculatorJS } from "@/components/Calculator/BcPnpCalculatorJS";
export default function BcPnpCalculator() { 
        const Year=new Date();
        const CurrentYear = Year.getFullYear();
        useEffect(() => {
            PageBcPnpCalculatorJS(); 
        }, []); 
  return (
    <>
    <div className="relative bg-[#1A2530] text-white pt-32 py-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,16,46,0.24),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_30%)]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_320px] lg:items-end">
                        <div>
                            <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
                                British Columbia Nominee Program
                            </p>
                            <h1 className="max-w-4xl text-[32px] font-semibold leading-tight md:text-[44px] lg:text-[58px]">
                                BC PNP Calculator - New Version ({CurrentYear})
                            </h1>
                            <p className="mt-5 max-w-3xl text-[16px] leading-8 text-white/75 md:text-[18px]">
                                Estimate your BC PNP registration score using the same core factors applicants
                                review before submitting a profile. This tool helps you understand how work
                                experience, education, language ability, wage, and location can affect your score.
                            </p>
                        </div>
                        <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
                                Important Note
                            </p>
                            <p className="mt-4 text-sm leading-7 text-white/80">
                                Points are calculated based on the information provided. This estimator is for
                                general guidance only and does not guarantee an invitation to apply under BC PNP.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    <section className="bcpnpform">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12 lg:gap-10">

                <div className=" md:col-span-3">
                    <div className="tootal-score grid w-full grid-cols-12 items-center rounded-[26px] border border-[#E7E2D9] bg-white p-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] md:sticky md:top-[110px] md:block md:p-8 md:text-center" id="form-total">
                        <div id="fieldname1_1" className="col-span-3 md:col-span-12">0</div>
                        <div className='col-span-9 text-[14px] font-medium leading-6 text-[#1A2530] md:mt-4 md:text-[16px]'>
                            Total points under British Columbia Province Nominee Program (BC PNP)
                        </div>
                        <div className="col-span-12 mt-4 hidden md:block">
                            <div className="rounded-2xl bg-[#F8F6F1] px-4 py-4 text-left text-sm leading-7 text-slate-600">
                                Review each section carefully. Your score updates automatically as you select
                                your answers.
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" md:col-span-9">
                        <div className='calculator-col bg-[#e2f1ff] px-8 py-8 mb-5'>
                            <div className='calculator-label'>Directly Related Work Experience in the Occupation of B.C. Job Offer</div>
                            <div className="grid md:grid-cols-3 gap-5">
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname104_1" id="fieldname104_1_rb0" value={20} className="input__field w-4 h-4" type="radio"  />
                                        <label  htmlFor="fieldname104_1_rb0" > 5 or more years</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname104_1" id="fieldname104_2_rb0" value={16} className="input__field w-4 h-4" type="radio"  />
                                        <label  htmlFor="fieldname104_2_rb0"> At least 4 but less than 5 years</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname104_1" id="fieldname104_3_rb0" value={12} className="input__field w-4 h-4" type="radio"   />
                                        <label  htmlFor="fieldname104_3_rb0"> At least 3 but less than 4 years</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname104_1" id="fieldname104_4_rb0" value={8} className="input__field w-4 h-4" type="radio"   />
                                        <label  htmlFor="fieldname104_4_rb0"> At least 2 but less than 3 years</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname104_1" id="fieldname104_5_rb0" value={4} className="input__field w-4 h-4" type="radio"  />
                                        <label  htmlFor="fieldname104_5_rb0"> At least 1 but less than 2 years</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname104_1" id="fieldname104_6_rb0" value={1} className="input__field w-4 h-4" type="radio"   />
                                        <label  htmlFor="fieldname104_6_rb0"> Less than 1 year</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname104_1" id="fieldname104_7_rb0" value={0} className="input__field w-4 h-4" type="radio" />
                                        <label  htmlFor="fieldname104_7_rb0">None</label>
                                </div>
                            </div>
                        </div>
                        <div className='calculator-col  bg-[#e2f1ff] px-8 py-8 mb-5'>
                            <div className='calculator-label' >At Least 1 year of directly related experience in Canada?</div>
                            <div className="grid grid-cols-2 md:grid-cols-3">
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname105_1" id="fieldname105_1_rb0" value={10} className="input__field w-4 h-4" type="radio" />
                                        <label  htmlFor="fieldname105_1_rb0" > Yes</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname105_1" id="fieldname105_2_rb0" value={0} className="input__field w-4 h-4" type="radio" />
                                        <label  htmlFor="fieldname105_2_rb0" > No</label>
                                </div>
                            </div>
                        </div>
                        <div className='calculator-col  bg-[#e2f1ff] px-8 py-8 mb-5'>
                            <div className='calculator-label' >Are You Currently Working Full-Time In B.C. For The Employer In The Occupation Identified In The BC PNP Registration?</div>
                            <div className="grid grid-cols-2 md:grid-cols-3" >
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname106_1" id="fieldname106_1_rb0" value={10} className="input__field w-4 h-4" type="radio" />
                                        <label  htmlFor="fieldname106_1_rb0" > Yes</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname106_1" id="fieldname106_2_rb0" value={0} className="input__field w-4 h-4" type="radio" />
                                        <label  htmlFor="fieldname106_2_rb0" > No</label>
                                </div>
                            </div>
                        </div>
                        <div className='calculator-col  bg-[#e2f1ff] px-8 py-8 mb-5'>
                            <div className='calculator-label' >Highest Level of Education</div>
                            <div className="grid md:grid-cols-2 gap-[20px]">
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname107_1" value={27 } id="fieldname107_1_rb0" className="input__field w-4 h-4" type="radio"  />
                                        <label  htmlFor="fieldname107_1_rb0" > Doctoral Degree</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname107_1" value={22} id="fieldname107_2_rb0" className="input__field w-4 h-4" type="radio" />
                                        <label  htmlFor="fieldname107_2_rb0"> Master’s Degree</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname107_1" value={15} id="fieldname107_3_rb0" className="input__field w-4 h-4" type="radio" />
                                        <label  htmlFor="fieldname107_3_rb0">Post-Graduate Certificate or Diploma</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname107_1" value={15} id="fieldname107_4_rb0" className="input__field w-4 h-4" type="radio"  />
                                        <label  htmlFor="fieldname107_4_rb0"> Bachelor’s Degree</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname107_1" value={5} id="fieldname107_5_rb0" className="input__field w-4 h-4" type="radio" />
                                        <label  htmlFor="fieldname107_5_rb0"> Associate Degree</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname107_1" value={5} id="fieldname107_6_rb0" className="input__field w-4 h-4" type="radio" />
                                        <label  htmlFor="fieldname107_6_rb0"> Post-secondary Diploma/Certificate (Trades or Non-Trades)</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname107_1" value={0} id="fieldname107_7_rb0" className="input__field w-4 h-4" type="radio" />
                                        <label  htmlFor="fieldname107_7_rb0">Secondary School (High School) or Less</label>
                                </div>
                            </div>
                        </div>
                        <div className='calculator-col  bg-[#e2f1ff] px-8 py-8 mb-5'>
                            <div className='calculator-label' >Above mentioned post-secondary education completed in Canada?</div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px]">
                                <div className=" items-center mb-4">
                                        <input  name="fieldname108_1" value={0} id="fieldname108_1_rb0" className="input__field w-4 h-4" type="radio"/>
                                        <label  htmlFor="fieldname108_1_rb0" >Yes</label>
                                        <div className="hidden">
                                            <div className="grid md:grid-cols-2 gap-[20px] mt-8">
                                            <div>
                                                <input  name="fieldname118_1" value={8} id="fieldname118_1_rb0" className="input__field w-4 h-4" type="radio"/>
                                                <label  htmlFor="fieldname118_1_rb0" >Inside BC</label>
                                            </div>
                                            <div>
                                            <input  name="fieldname118_1" value={6} id="fieldname118_2_rb0" className="input__field w-4 h-4" type="radio"/>
                                                <label  htmlFor="fieldname118_2_rb0" >Outside BC</label>
                                            </div>
                                        </div>
                                        </div>
                                </div>
                                <div className=" items-center mb-4">
                                        <input  name="fieldname108_1" value={0} id="fieldname108_2_rb0" className="input__field w-4 h-4" type="radio"/>
                                        <label  htmlFor="fieldname108_2_rb0" >No</label>
                                </div>
                            </div>
                        </div>
                        <div className='calculator-col  bg-[#e2f1ff] px-8 py-8 mb-5'>
                            <div className='calculator-label' >Do you have Eligible Professional Designation In B.C.?</div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px]">
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname109_1" id="fieldname109_1_rb0" value={0} className="input__field w-4 h-4" type="radio"/>
                                        <label  htmlFor="fieldname109_1_rb0" >Yes</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname109_1" id="fieldname109_2_rb0" value={0} className="input__field w-4 h-4" type="radio"/>
                                        <label  htmlFor="fieldname109_2_rb0" >No</label>
                                </div>
                            </div>
                        </div>
                        <div className="hidden calculator-col  bg-[#e2f1ff] px-8 py-8 mb-5">
                        <div className='calculator-label' >Select your Eligible Professional Designation In B.C.:</div>
                            <div className="">
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname110_1" value={5} id="fieldname110_1_rb0" className="input__field w-4 h-4" type="radio"/>
                                        <label  htmlFor="fieldname110_1_rb0" > Any valid trade certificate issued by SkilledTradesBC or Industry Training Authority British Columbia (ITABC) - If you have been approved by SkilledTradesBC or by the ITABC to challenge the certification exam for your trade</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname110_1" value={5} id="fieldname110_2_rb0" className="input__field w-4 h-4" type="radio" />
                                        <label  htmlFor="fieldname110_2_rb0"> Animal health technologists and veterinary technicians: NOC 32104 - Veterinary Technicians registered with British Columbia Veterinary Technologists Association</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname110_1" value={5} id="fieldname110_3_rb0" className="input__field w-4 h-4" type="radio"/>
                                        <label  htmlFor="fieldname110_3_rb0">Dental Assistants: NOC 33100 - Dental Assistants certified with British Columbia College of Oral Health Professionals</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname110_1" value={5} id="fieldname110_4_rb0" className="input__field w-4 h-4" type="radio" />
                                        <label  htmlFor="fieldname110_4_rb0"> Dental Hygienists: NOC 32111 - Dental Hygienists registered with British Columbia College of Oral Health Professionals</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname110_1" value={5} id="fieldname110_5_rb0" className="input__field w-4 h-4" type="radio" />
                                        <label  htmlFor="fieldname110_5_rb0"> Dental Technicians: NOC 33100 - Dental Technicians registered with British Columbia College of Oral Health Professionals</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname110_1" value={5} id="fieldname110_6_rb0" className="input__field w-4 h-4" type="radio" />
                                        <label  htmlFor="fieldname110_6_rb0">Denturists: NOC 32110 - Denturists certified with British Columbia College of Oral Health Professionals</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname110_1" value={5} id="fieldname110_7_rb0" className="input__field w-4 h-4" type="radio" />
                                        <label  htmlFor="fieldname110_7_rb0">Early Childhood Educators (ECE): NOC 42202 - ECEs with a valid ECE One Year or ECE Five Year Certificate with the Early Childhood Educator Registry</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname110_1" value={5} id="fieldname110_8_rb0" className="input__field w-4 h-4" type="radio"/>
                                        <label  htmlFor="fieldname110_8_rb0">Health Care Aide: NOC 33102 - Health Care Aides registered with BC Care Aide & Community Health Worker Registration</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname110_1" value={5} id="fieldname110_9_rb0" className="input__field w-4 h-4" type="radio"/>
                                        <label  htmlFor="fieldname110_9_rb0">Pharmacy Technicians: NOC 33103 - Pharmacy Technicians registered with The College of Pharmacists of British Columbia</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname110_1" value={5} id="fieldname110_10_rb0" className="input__field w-4 h-4" type="radio" />
                                        <label  htmlFor="fieldname110_10_rb0">Practical Nurses: NOC 32101 - Practical Nurses licenced with The British Columbia College of Nurses and Midwives</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname110_1" value={5} id="fieldname110_11_rb0" className="input__field w-4 h-4" type="radio" />
                                        <label  htmlFor="fieldname110_11_rb0">Traditional Chinese medicine practitioners and acupuncturists: NOC 32200 - Practitioners licensed through The College of Traditional Chinese Medicine Practitioners and Acupuncturists of BC</label>
                                </div>
                            </div>
                        </div>
                        <div className='calculator-col  bg-[#e2f1ff] px-8 py-8 mb-5'>
                            <div className='calculator-label' >Language Proficiency In  English/French?</div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px]">
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname111_1" id="fieldname111_1_rb0" value={0} className="input__field w-4 h-4" type="radio"/>
                                        <label  htmlFor="fieldname111_1_rb0" >Yes</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname111_1" id="fieldname111_2_rb0"  value={0} className="input__field w-4 h-4" type="radio"  />
                                        <label  htmlFor="fieldname111_2_rb0" >No</label>
                                </div>
                            </div>
                        </div>
                        {/* <div className="hidden calculator-col  bg-[#e2f1ff] px-8 py-8 mb-5">
                        <div className='calculator-label' >Have You Scored CLB 4 Or Higher In Each Of The Four Competencies?*</div>
                            <div className="">
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname112_1" value={10} id="fieldname112_1_rb0" className="input__field w-4 h-4" type="radio"/>
                                        <label  htmlFor="fieldname112_1_rb0" >Yes</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname112_1" value={0} id="fieldname112_2_rb0" className="input__field w-4 h-4" type="radio"  />
                                        <label  htmlFor="fieldname112_2_rb0" >No</label>
                                </div>
                            </div>
                        </div> */}
                        <div className='calculator-col bg-[#e2f1ff] px-8 py-8 mb-5'>
                            <div className='calculator-label' >Hourly Wage of the B.C. Job Offer</div>
                            <div className="">
                                <input  name="fieldname113_1" type="number" id="fieldname113_1_rb0" className="input__field_text w-full h-4" step="0.01"/>
                            </div>
                        </div>
                        <div className='calculator-col  bg-[#e2f1ff] px-8 py-8 mb-5'>
                            <div className='calculator-label' >Area Of Employment Within B.C.?*</ div>
                            <div className="">
                                <div className="flex items-start mb-4">
                                        <input  name="fieldname114_1" value={0} id="fieldname114_1_rb0" className="input__field w-4 h-4" type="radio"/>
                                        <label  htmlFor="fieldname114_1_rb0" > Area 1: Metro Vancouver Regional District Richmond, Surrey, Coquitlam, Burnaby, Delta, City Of Langley, Township Of Langley, Maple Ridge, New Westminster, Tsawwassen, Pitt Meadows, North Vancouver, Belcarra, Anmore, Bowen Island, Lions Bay, Port Moody, Vanvouver, West Vancouver, White Rock</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname114_1" value={5} id="fieldname114_2_rb0" className="input__field w-4 h-4" type="radio"  />
                                        <label  htmlFor="fieldname114_2_rb0" > Area 2: Squamish, Abbotsford, Agassiz, Mission, And Chilliwack</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname114_1" value={15} id="fieldname114_2_rb01" className="input__field w-4 h-4" type="radio"  />
                                        <label  htmlFor="fieldname114_2_rb01" > Area 3: Areas Of B.C. Not Included In Area 1 Or 2</label>
                                </div>
                            </div>
                        </div>
                        <div className='calculator-col  bg-[#e2f1ff] px-8 py-8 mb-5'>
                            <div className='calculator-label' >Have You Completed At Least One Year Full-Time Paid Employment In Area Outside Of The Metro Vancouver Regional District (MVRD) Within 5 Years Prior To Registering With The BC PNP And Have A Valid Job Offer Outside Of MVRD?*</div>
                            <div className="grid grid-cols-2 lg:grid-cols-3">
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname115_1" id="fieldname115_1_rb0" value={10} className="input__field w-4 h-4" type="radio"/>
                                        <label  htmlFor="fieldname115_1_rb0" > Yes</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname115_1" id="fieldname115_2_rb0" value={0} className="input__field w-4 h-4" type="radio"  />
                                        <label  htmlFor="fieldname115_2_rb0" > No</label>
                                </div>
                            </div>
                        </div>
                        <div className='calculator-col bg-[#e2f1ff] px-8 py-8 mb-5'>
                            <div className='calculator-label' >Have You Graduated From A Public B.C. Postsecondary Institution Located Outside Of The Metro Vancouver Regional District (MVRD) Within 3 Years Prior To Registering With The BC PNP And Have A Valid Job Offer Outside Of MVRD?*</div>
                            <div className="grid grid-cols-2 lg:grid-cols-3">
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname116_1" id="fieldname116_1_rb0" value={10} className="input__field w-4 h-4" type="radio"/>
                                        <label  htmlFor="fieldname116_1_rb0" > Yes</label>
                                </div>
                                <div className="flex items-center mb-4">
                                        <input  name="fieldname116_1" id="fieldname116_12_rb0" value={0} className="input__field w-4 h-4" type="radio"  />
                                        <label  htmlFor="fieldname116_12_rb0" > No</label>
                                </div>
                            </div>
                        </div>
                    <div className="grid md:md:grid-cols-2 md:grid-flow-col gap-4">
                    <div className='calculator-col  bg-[#e2f1ff] px-8 py-8 mb-5'>
                            <div className='calculator-label' >Canadian Language Benchmark Level</div>
                                    <div className="grid md:grid-cols-2 gap-[20px]">
                                        <div className="flex items-center mb-4">
                                                <input  name="fieldname117_1" id="fieldname117_1_rb0" value={30} className="input__field w-4 h-4" type="radio"/>
                                                <label  htmlFor="fieldname117_1_rb0" > 9+</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                                <input  name="fieldname117_1" id="fieldname117_2_rb0" value={25} className="input__field w-4 h-4" type="radio"  />
                                                <label  htmlFor="fieldname117_2_rb0" > 8</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                                <input  name="fieldname117_1" id="fieldname117_3_rb0" value={20} className="input__field w-4 h-4" type="radio"  />
                                                <label  htmlFor="fieldname117_3_rb0" > 7</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                                <input  name="fieldname117_1" id="fieldname117_4_rb0" value={15} className="input__field w-4 h-4" type="radio"  />
                                                <label  htmlFor="fieldname117_4_rb0" > 6</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                                <input  name="fieldname117_1" id="fieldname117_5_rb0" value={10} className="input__field w-4 h-4" type="radio"  />
                                                <label  htmlFor="fieldname117_5_rb0" > 5</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                                <input  name="fieldname117_1" id="fieldname117_6_rb0" value={5} className="input__field w-4 h-4" type="radio"  />
                                                <label  htmlFor="fieldname117_6_rb0" > 4</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                                <input  name="fieldname117_1" id="fieldname117_7_rb0" value={0} className="input__field w-4 h-4" type="radio"  />
                                                <label  htmlFor="fieldname117_7_rb0" > Below 4 or no test</label>
                                        </div>
                                    </div>
                            </div>
                            {/* <div className='calculator-col  bg-[#e2f1ff] px-8 py-8 mb-5'>
                            <div className='calculator-label' >Select your taken Language Test*</div>
                                <div className="">
                                    <div className="flex items-center mb-4">
                                        <select id="fieldname48_1" name="fieldname48_1" className="w-full h-10" >
                                            <option  value="Select...">Select...</option>
                                            <option  value="IELTS">IELTS</option>
                                            <option  value="CELPIP">CELPIP</option>
                                            <option  value="TCF">TCF</option>
                                            <option  value="TEF">TEF</option>
                                        </select>
                                    </div>
                                    <div className="hidden">
                                        <div>
                                            <label for="fieldname57_1">Reading</label>
                                            <div  className="dfield">
                                                <input id="fieldname57_1" name="fieldname57_1"
                                                    min="0"  max="9" step="1" className="w-full h-10"
                                                    type="number" placeholder="0-9"/>
                                            </div>
                                        </div>
                                        <div>
                                            <label for="fieldname58_1">Writing</label>
                                            <div  className="dfield">
                                                <input id="fieldname58_1" name="fieldname58_1" min="0"
                                                    max="12" step="1" className="w-full h-10" type="number" placeholder="0-12"/>
                                            </div>
                                        </div>
                                        <div>
                                            <label for="fieldname59_1">Listening</label>
                                            <div  className="dfield">
                                                <input id="fieldname59_1" name="fieldname59_1" min="0"
                                                    max="12" step="1" className="w-full h-10" type="number" placeholder="0-12"/>
                                            </div>
                                        </div>
                                        <div>
                                            <label for="fieldname60_1">Speaking</label>
                                            <div  className="dfield">
                                                <input id="fieldname60_1" name="fieldname60_1" min="0"
                                                    max="12" step="1" className="w-full h-10" type="number" placeholder="0-12"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
