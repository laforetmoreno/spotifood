const handleCountries = value => {
  if (value === 'DE') {
    return {
      name: 'Alemanha',
      value: 'DE',
    };
  }
  if (value === 'AU') {
    return {
      name: 'Australia',
      value: 'AU',
    };
  }
  if (value === 'BR') {
    return {
      name: 'Brasil',
      value: 'BR',
    };
  }
  if (value === 'PT') {
    return {
      name: 'Portugal',
      value: 'PT',
    };
  }
  if (value === 'en_US') {
    return {
      name: 'EUA',
      value: 'US', // Change country code because the parameter q the api returns is wrong
    };
  }
  if (value === 'RU') {
    return {
      name: 'Rússia',
      value: 'RU',
    };
  }
};

export default handleCountries;
