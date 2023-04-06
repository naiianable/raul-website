import React from 'react';

const AboutMe = () => {
  return (
    <div className='bg-secondary-gray px-2.5 py-8'>
      <div className='title-div text-primary-blue text-xl mobile:text-lg text-center mobile:text-left'>
        About
      </div>
      <div className='font-sans mobile:text-[16px] tablet:text-[20px] laptop:text-lg mobile:leading-5 pt-4'>
        <div className='flex px-[171px] mobile:px-0'>
          Sometimes life is rough. You may want to make changes in your life,
          but may be unsure about where to start. I assist individuals and
          couples in better understanding the struggles they have been facing
          through improving their awareness of cognitive and behavioral patterns
          that may have become maladaptive.
          <br />
          <br />I have practiced for the past eleven years with an emphasis on
          trauma stemming from neglect and abuse. I also have experience working
          with children with autism and their families in educational and
          residential settings.
        </div>
        <div className='flex justify-center mobile:justify-start mt-5'>
          Years in Practice: 13 Years
          <br />
          License: Hawaii | 386
          <br />
          Year Graduated: 2010
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
