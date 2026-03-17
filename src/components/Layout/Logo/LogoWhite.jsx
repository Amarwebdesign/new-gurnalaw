import Image from 'next/image'
export default function LogoWhite() {
  return (
    <Image height={30} width={200} src='images/svg/logo.svg' className='logo w-full' alt='Gurna Law Coroporation'/>
  );
}
