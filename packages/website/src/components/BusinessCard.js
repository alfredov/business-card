import React, { useContext } from 'react';
import cabifyLogo from '../images/cabify-logo.svg';
import { PageContext } from '../utils';

function capitalize(text) {
  if (typeof(text) !== 'string') return '';
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
}

const BusinessCard = () => {
  const {
    name,
    job,
    phone,
    email,
    address,
    prefix,
    website,
    formSubmitted,
  } = useContext(PageContext);

  return (
    <article className="businessCard col col6">
      <figure className="businessCard-badge">
        <a className="businessCard-badge-logo" href="http://www.cabify.com">
          <img src={cabifyLogo} alt="Cabify" />
        </a>
      </figure>
      <h1 className="title-main">Request your business card</h1>
      <div className="businessCard-cards">
        <div className="businessCard-cardBack" />
        <div
          className="businessCard-cardFront"
          style={formSubmitted ? {
            transform: 'scale(1.3)',
            opacity: 1
          } : {
            transform: 'unset',
            opacity: 1,
          }}
        >
          <div>
            <p className="businessCard-cardFront-title">{capitalize(name)}</p>
            <p className="businessCard-cardFront-subtitle">{capitalize(job)}</p>
          </div>
          <div className="businessCard-cardFront-bottom">
            <p className="businessCard-icon-phone">+{prefix} {phone}</p>
            <p className="businessCard-icon-email">{email}</p>
            <p className="businessCard-icon-website">{website}</p>
            <p className="businessCard-icon-address">{address}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BusinessCard;
