import React from 'react';
import ServiceNavBar from './ServiceNavBar';
import makeupData from '../Data/makeup';
import ServiceCard from './ServiceCard';
import './ServiceCard.css';

export default ({ setPage }) => {
  return (
    <div>
      <ServiceNavBar setPage={setPage} />
      <hr />
      <ServiceCard
        serviceTitle={makeupData.serviceTitle}
        serviceDescription={makeupData.serviceDescription}
        arrayOfServiceTypes={makeupData.arrayOfServiceTypes}
        serviceImages={makeupData.serviceImages}
      />
    </div>
  );
};
