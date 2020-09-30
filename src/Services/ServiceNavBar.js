import React from 'react';
import services from '../Data/services';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

export default () => {
  const mappedServiceLiElements = services.map((ele) => {
    return (
      <li className="serviceNavBarOption">
        <Link
          to={`/${ele.toLowerCase()}`}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          {ele}
        </Link>
      </li>
    );
  });

  mappedServiceLiElements.unshift(
    <li className="serviceNavBarOption">
      <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
        Home
      </Link>
    </li>
  );

  return <div className="serviceNavBar">{mappedServiceLiElements}</div>;
};
