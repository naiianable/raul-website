import AcceptedInsurance from './AcceptedInsurance';
import AcceptedPayment from './AcceptedPayment';
import Specialties from './Specialties';

const ServicesProvided = () => {
  return (
    <div className='px-2.5 py-8'>
      {/* semibold font not working */}
      <div className='title-div text-primary-blue text-lg font-semibold'>
        <div className='tablet:text-center'>Services</div>
      </div>
      <div className='tablet-view-div tablet:flex'>
        <div className='tablet:flex flex-col tablet:w-1/2'>
          <Specialties />
          <AcceptedInsurance />
        </div>
        <div className='tablet:w-1/2'>
          <AcceptedPayment />
        </div>
      </div>
    </div>
  );
};

export default ServicesProvided;
