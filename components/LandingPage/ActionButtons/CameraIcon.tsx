import Image from 'next/image';
import cameraIcon from '../../../images/camera-icon.svg';

const CameraIcon = () => {
  return (
    <div className='flex flex-col items-center w-[80px]'>
      <div>
        <Image alt='Camera Icon' src={cameraIcon} />
      </div>
      <div>
        Offers Telehealth
        <br />
        appointments
      </div>
    </div>
  );
};

export default CameraIcon;
