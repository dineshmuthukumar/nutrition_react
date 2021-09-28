export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhone = (mobile) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(mobile);
};

export const passwordLength = 6;

export const currencyFormat = (value, type) => {
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: type,
  });
  return formatter.format(parseFloat(value));;
};

export const abbreviateNumber = (value) => {
  let newValue = value;
  if (value >= 1000) {
    const suffixes = ["", "K", "M", "B", "T"];
    let suffixNum = Math.floor(("" + value).length / 3);
    let shortValue = '';
    for (let precision = 2; precision >= 1; precision--) {
      shortValue = (suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision);
      let dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
      if (dotLessShortValue.length <= 2) { break; }
    }
    if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
};

export const validateCurrency = (value) => {
  const re = /^(\d*)\.?(\d){0,10}$/;
  return re.test(value);
};

export const validateQuantity = (value) => {
  const re = /^\d+$/;
  return re.test(value);
};