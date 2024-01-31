// Service.js
import React from 'react';

const Servicecomp = ({ title, description }) => {
  const serviceStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '8px',
    width: '250px',
    margin: '20px'
  }
  return (
    <section className='lite font-poppins cursor-pointer border-[#70C6FF] border-[2px] text-white duration-500' style={serviceStyle}>
      <div className='font-medium text-2xl '>
        <h1 className=''>{title}</h1>
      </div>
      <div className=''>
        {description}
      </div>
    </section>
  );
};

export default Servicecomp;
