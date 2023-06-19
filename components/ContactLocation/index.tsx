import Contact from './Contact';
import AddressMap from './AddressMap';

const ContactLocation = () => {
  return (
    <div className='bg-secondary-gray px-2.5 py-8'>
      <div className='title-div text-primary-blue text-xl mobile:text-lg text-center mobile:text-left'>
        <div className='text-center mobile:text-left'>Contact and Location</div>
      </div>
      <div className='tablet-view-div mobile:flex mobile:flex-col flex flex-row space-x-2 mobile:space-x-0 flex font-sans'>
        <Contact />
        <AddressMap />
      </div>
    </div>
  );
};

export default ContactLocation;
