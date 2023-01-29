import AcceptedPlans from './AcceptedPlans';
import Specialties from './Specialties';

const ServicesProvided = () => {
  return (
    <div className='px-2.5 py-8'>
      {/* semibold font not working */}
      <div className='text-primary-blue text-lg font-semibold'>
        <div className='tablet:text-center'>Services</div>
      </div>
      <Specialties />
      <AcceptedPlans />
    </div>
  );
};

export default ServicesProvided;
