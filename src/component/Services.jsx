// ServicesSection.js
import React from 'react';
import Servicecomp from './Servicecomp';



const Services = () => {
  const servicesData = [
    {
      title: 'Property For Rent',
      description: 'Building responsive and user-friendly web applications.',
      image: {},
    },
    {
      title: 'Property for Ownership',
      description: 'Creating visually appealing designs and graphics.',
      icon: '',
    },
    {
      title: 'Marketing for Building',
      description: 'Promoting products and services through online channels.',
      img: '',
    },
    // Add more services as needed
  ];

  return (
    <div className="services-section bg-primary">
      <h2 className='font-poppins text-white text-3xl text-center '>Our Services</h2>
      <p className='text-white font-poppins text-center py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptatibus?</p>
      <div className="services-list flex justify-center">
        {servicesData.map((service, index) => (
          <Servicecomp
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
