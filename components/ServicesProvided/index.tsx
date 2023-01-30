import AcceptedInsurance from './AcceptedInsurance';
import AcceptedPayment from './AcceptedPayment';
import Specialties from './Specialties';

const ServicesProvided = () => {
  return (
    <div className='px-2.5 py-8'>
      {/* semibold font not working */}
      <div className='title-div text-primary-blue text-xl mobile:text-lg text-center mobile:text-left'>
        <div className='text-center mobile:text-left'>Services</div>
      </div>
      <div className='tablet-view-div mobile:flex mobile:flex-col flex flex-row space-x-2 mobile:space-x-0'>
        <div className='w-1/2 mobile:w-full'>
          <Specialties />
          <AcceptedInsurance />
        </div>
        <div className='w-1/2 mobile:w-full'>
          <AcceptedPayment />
        </div>
      </div>
    </div>
  );
};

export default ServicesProvided;
