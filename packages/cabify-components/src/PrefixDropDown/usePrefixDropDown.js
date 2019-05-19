/* eslint-disable no-undef */
import { useState, useEffect } from 'react';

export default () => {
  const [items, setItems] = useState([]);
  const [prefix, setPrefix] = useState(null);
  const [loading, setLoading] = useState(false);
  const selectItem = () => {};
  useEffect(() => {
    setLoading(true);
    fetch('https://cabify.com/api/user/mobile_data').then((response) => {
      response.json().then((data) => {
        setLoading(false);
        const phoneCodes = data.phone_codes || [];
        const findPhoneCodeByCountryCode = countryCode => (
          phoneCodes.find(item => (item.code === countryCode))
        );

        const result = data.preferred_countries.reduce((accumulator, countryCode) => {
          const phoneCode = findPhoneCodeByCountryCode(countryCode);
          if (phoneCode) return [...accumulator, phoneCode];
          return accumulator;
        }, []);
        setPrefix(result[0].prefix);
        setItems(result);
      });
    });
  }, []);

  return {
    items, prefix, loading, selectItem,
  };
};
