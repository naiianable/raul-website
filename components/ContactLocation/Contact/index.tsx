import ButtonContainer from '@/components/ActionButtons/ButtonContainer';

const Contact = () => {
  return (
    <>
      <div className='w-1/2 mobile:w-full'>
        <div>Please call or email for appointment 1-808-495-0140</div>
        {/* Adjust laptop responsiveness */}
        <div className='my-[16px]'>
          <ButtonContainer />
        </div>
        <div>
          Raul Sabat can be reached by phone during normal business hours. If
          you have a medical emergency, please dial 911.
        </div>
      </div>
    </>
  );
};

export default Contact;
