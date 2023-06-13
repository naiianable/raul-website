import Gmap from '../GMap';

const AddressMap = () => {
  return (
    <>
      <div className='w-1/2 mobile:w-full mobile:mt-[36px]'>
        <div className='Address Div'>
          <div>Raul T. Sabat, MFT</div>
          <div>1111 Bishop Street #511</div>
          <div>Honolulu, HI 96813</div>
        </div>
        <div className='Google Map Div mobile:mt-[32px] mobile:mb-[16px]'>
          <Gmap />
        </div>
        <div className=''>
          Our office is located in the AC Hotel Honolulu building (previously
          known as the Remington College Building) in the heart of downtown
          Honolulu at the cross streets of Bishop St. and S. Hotel St.
        </div>
      </div>
    </>
  );
};

export default AddressMap;
