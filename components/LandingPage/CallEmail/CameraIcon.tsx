import Image from 'next/image';
import cameraIcon from '../../../images/camera-icon.svg';

const CameraIcon = () => {
  return (
    <div className='flex flex-col items-center w-[80px] leading-3'>
      <div>
        <Image alt='Camera Icon' src={cameraIcon} />
      </div>
      <div className='mt-3'>
        Offers
        <br />
        Telehealth
        <br />
        appointments
      </div>
    </div>
  );
};

export default CameraIcon;
