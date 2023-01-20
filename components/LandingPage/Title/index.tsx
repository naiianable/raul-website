import Image from 'next/image';
import divider from '../../../images/divider.svg';

const Title = () => {
  return (
    <>
      <div className='flex flex-col font-sans text-center text-md'>
        <div className='font-serif pt-8 mobile:text-xl text-2xl'>
          Raul T Sabat, MFT
        </div>
        <div className='mobile:text-[14px]'>
          Licensed Marriage and Family Therapist
        </div>
        <div className='flex justify-center my-1'>
          <Image alt='Title Divider' className='' src={divider} />
        </div>
        <div className='mobile: text-[14px]'>Honolulu, HI</div>
        {/* <div className='mt-5 mobile: text-[14px]'>
          <div>CURRENTLY ACCEPTING NEW PATIENTS</div>
          <div>PLEASE CONTACT ME FOR A</div>
          <div>FREE 15 MIN CONSULTATION</div>
        </div> */}
      </div>
    </>
  );
};

export default Title;
