import Image from 'next/image'
export default function Logo() {
  return (
    <Image height={30} width={200} src='images/svg/logo-white.svg' className='logo-white w-full' alt='Gurna Law Coroporation'/>
  );
}
