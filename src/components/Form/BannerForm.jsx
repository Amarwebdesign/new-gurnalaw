import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
export default function BannerForm() {
    const router = useRouter()
    const [ButtonShow, setButtonShow] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        captcha: '',
      });
    
      const [num1, setNum1] = useState(null);
      const [num2, setNum2] = useState(null);
    
      useEffect(() => {
        // Generate random numbers on the client side after the initial render
        setNum1(Math.floor(Math.random() * 10) + 1);
        setNum2(Math.floor(Math.random() * 10) + 1);
      }, []);
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        // For radio buttons, value should be captured when the radio button is checked
        if (type === 'radio' && checked) {
          setFormData({
            ...formData,
            [name]: value,
          });
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      }
    
      const handleSubmit = async (e) => {
        
        e.preventDefault();
        setButtonShow(true)
        // Validate the captcha
        if (parseInt(formData.captcha) !== num1 + num2) {
          alert('Captcha is incorrect!');
          return;
        }
    
        try {
          const response = await fetch('https://crm-api.amrsoftec.com/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            captcha: '',
          });
    
          // Generate new captcha numbers
          setNum1(Math.floor(Math.random() * 10) + 1);
          setNum2(Math.floor(Math.random() * 10) + 1);
          router.push('/thank-you')
          setButtonShow(false)
        } catch (error) {
          console.error('Error:', error);
          alert('There was a problem sending your message.');
        }
      };
    return (
        <>
        <form className="get-quote-form mt-3" onSubmit={handleSubmit}>
          <div className='text-[#F13624] text-[22px] font-bold'>I Need</div>
          <div>
            <label className='block form-checkbox'>
                <input type="radio" name="subject" value="Website Design & Development" required onChange={handleChange} className="opacity-0 absolute w-auto"/><span>Website Design &amp; Development</span>
            </label>
            <label className='block form-checkbox my-2'>
                <input type="radio" name="subject" value="eCommerce Website Development" required onChange={handleChange} className="opacity-0 absolute w-auto"/><span>eCommerce Website Development</span>
            </label>
            <label className='block form-checkbox'>
                <input type="radio" name="subject" value="Digital Marketing (SEO, SMM, PPC etc)" required onChange={handleChange} className="opacity-0 absolute w-auto"/><span>Digital Marketing (SEO, SMM, PPC etc)</span>
            </label>
          </div>
        <div className="mt-3"><input type="text"  value={formData.name} onChange={handleChange}  required placeholder="My Name is" className="form-input text-[#000] px-4 py-3 w-full" name="name"/></div>
        <div className="mt-3"><input type="email" value={formData.email} onChange={handleChange} required placeholder="Here is My Email" className="form-input text-[#000] px-4 py-3 w-full" name="email"/></div>
        <div className="mt-3"><input type="tel"  value={formData.phone} onChange={handleChange} required placeholder="My WhatsApp Number" className="form-input text-[#000] px-4 py-3 w-full" name="phone"/></div>
        
        <div className="mt-3"><textarea name="message" value={formData.message} onChange={handleChange} required placeholder="and I Want..." className="form-input text-[#000] px-4 py-3 w-full"></textarea></div>
        <div className="mt-2 flex items-center">
            <div className="w-[130px] py-3 text-[16px] font-[500] text-center bg-black text-white">{`${num1} + ${num2} = `} </div>
            <div className="w-full"><input type="text" required placeholder="Total is" className="form-input text-[#000] px-4 py-3 w-full" name="captcha" value={formData.captcha} onChange={handleChange} /></div>
        </div>
        <div className="mt-3 ">
    {(() => {
        if (ButtonShow) {
          return (
            <button type="button" disabled="disable" className="cursor-not-allowed disabled:opacity-60 rounded bg-gradient-to-r from-[#f77e84] to-[#ff487b] bg-[#ff487b] hover:bg-gradient-to-l text-[#fff] py-4 px-10 text-[22px] pointer font-[500]  ease-in-out duration-300 w-[100%] flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg> Sending Request...
            </button>
            
          )
        } else {
          return (            
            <button type="submit" className="btn w-full text-[20px]">Request a Call Back </button>
          )
        }
      })()}
    </div>
    </form>
        </>
    )
}