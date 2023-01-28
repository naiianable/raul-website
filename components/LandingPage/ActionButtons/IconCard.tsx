import CameraIcon from './CameraIcon';
import CcIcon from './CcIcon';
import InsuranceIcon from './InsuranceIcon';

const IconCard = () => {
  return (
    <div className='icon-card-div flex flex-row justify-evenly text-sm mt-4'>
      <CameraIcon />
      <CcIcon />
      <InsuranceIcon />
    </div>
  );
};

export default IconCard;
