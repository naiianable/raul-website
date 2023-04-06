import Image from 'next/image';
import headshot from '../../../images/headshot.svg';
import servingHawaii from '../../../images/serving-hawaii.svg';
import IconCard from './IconCard';
import ButtonContainer from '@/components/ActionButtons/ButtonContainer';

const CallEmail = () => {
  return (
    //Display buttons for mobile view
    <div className='call-to-action-div w-full my-4 font-sans text-center'>
      <div className='text-md tablet:hidden laptop:hidden'>
        <div>CURRENTLY ACCEPTING NEW PATIENTS</div>
        <div>PLEASE CONTACT ME FOR A</div>
        <div>FREE 15 MIN CONSULTATION</div>
      </div>

      {/* Displays for tablet and laptop */}
      <div className='headshot-action-div flex flex-row-reverse mobile:flex-col justify-evenly mobile:mt-0 mt-2'>
        <div className='tablet-laptop-div flex flex-col w-full'>
          <div className='text-md mobile:hidden tablet:mx-2'>
            <div>CURRENTLY ACCEPTING NEW PATIENTS</div>
            <div>PLEASE CONTACT ME FOR A</div>
            <div>FREE 15 MIN CONSULTATION</div>
          </div>
          <ButtonContainer />
          <div className='headshot-div flex flex-col justify-center pt-10 mobile:hidden w-full'>
            <div className='flex justify-center'>
              <Image alt='Serving Hawaii' src={servingHawaii} />
            </div>
            <IconCard />
          </div>
        </div>

        {/* Raul headshot mobile/tablet responsive */}
        <div className='headshot-div flex mobile:justify-center mobile:mt-6 mobile:mb-3 tablet:w-1/2 mobile:pl-0 pl-2'>
          <div className='mobile:h-[308px] h-[544px] mobile:w-[248px] w-[438px]'>
            <Image alt='Raul Headshot' src={headshot} />
          </div>
        </div>

        {/* displays serving hawaii for mobile */}
        <div className='mobile-card tablet:hidden laptop:hidden'>
          <div className='headshot-div flex mobile:justify-center mobile:mt-6 mobile:mb-3 tablet:w-1/2 mobile:pl-0 pl-2 '>
            <div className=''>
              <Image alt='Serving Hawaii' src={servingHawaii} />
            </div>
          </div>
          <IconCard />
        </div>
      </div>
    </div>
  );
};

export default CallEmail;
