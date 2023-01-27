import CameraIcon from './CameraIcon';
import CcIcon from './CcIcon';
import InsuranceIcon from './InsuranceIcon';

const IconCard = () => {
  return (
    <div className='icon-card-div flex flex-row justify-evenly text-sm'>
      <CameraIcon />
      <CcIcon />
      <InsuranceIcon />
    </div>
  );
};

export default IconCard;
