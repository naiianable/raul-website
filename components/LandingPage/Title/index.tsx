import Image from 'next/image';
import divider from '../../../images/divider.svg';

const Title = () => {
  return (
    <>
      <div className='flex flex-col font-sans text-center text-md'>
        <div className='font-serif pt-8 text-xl md:text-2xl'>
          Raul T Sabat, MFT
        </div>
        <div className='sm: text-[14px]'>
          Licensed Marriage and Family Therapist
        </div>
        <div className='flex justify-center my-1'>
          <Image alt='Title Divider' className='' src={divider} />
        </div>
        <div className='sm: text-[14px]'>Honolulu, HI</div>
        <div className='mt-5 sm: text-[14px]'>
          <div>CURRENTLY ACCEPTING NEW PATIENTS</div>
          <div>PLEASE CONTACT ME FOR A</div>
          <div>FREE 15 MIN CONSULTATION</div>
        </div>
      </div>
    </>
  );
};

export default Title;
