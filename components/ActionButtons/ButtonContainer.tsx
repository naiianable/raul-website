import CallButton from './CallButton';
import EmailButton from './EmailButton';

const ButtonContainer = () => {
  return (
    <>
      <div className='action-buttons-div flex flex-col mobile:flex-row mobile:space-y-0 space-y-4 mobile:space-x-5 mobile:mt-2 mt-2 px-2'>
        <EmailButton />
        <CallButton />
      </div>
    </>
  );
};

export default ButtonContainer;
