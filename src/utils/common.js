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
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: type,
  });
  return formatter.format(parseFloat(value));
};

export const abbreviateNumber = (value) => {
  let newValue = value;
  if (value >= 1000) {
    const suffixes = ["", "K", "M", "B", "T"];
    let suffixNum = Math.floor(("" + value).length / 3);
    let shortValue = "";
    for (let precision = 2; precision >= 1; precision--) {
      shortValue = (
        suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value
      ).toPrecision(precision);
      let dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "");
      if (dotLessShortValue.length <= 2) {
        break;
      }
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
  const re = /^[1-9][0-9]*$/;
  return re.test(value);
};

export const bidBuyError = (code) => {
  // const OK = 200;
  const ERROR = 500;
  const UNAUTHORIZED = 401;
  const AUCTION_UNBEGUN = 701;
  const AUCTION_ENDED = 702;
  const INVALID_QUANTITY = 703;
  const SOLD = 704;
  const OUT_OF_STOCK = 705;
  const LIMITED_OUT = 706;
  const INSUFFICIENT_BALANCE = 707;
  const INVALID_BID = 708;
  const LOW_BID = 709;
  const INVALID_NFT = 710;

  switch (code) {
    case ERROR:
      return { title: "Error", description: "Something went wrong!" };
    case UNAUTHORIZED:
      return { title: "Error", description: "Unauthorized" };
    case AUCTION_UNBEGUN:
      return { title: "Error", description: "Auction not yet begun" };
    case AUCTION_ENDED:
      return { title: "Error", description: "Auction ended" };
    case INVALID_QUANTITY:
      return { title: "Error", description: "Invalid Quantity" };
    case SOLD:
      return { title: "Error", description: "Sold out" };
    case OUT_OF_STOCK:
      return { title: "Error", description: "Out of stock" };
    case LIMITED_OUT:
      return { title: "Error", description: "Limited out" };
    case INSUFFICIENT_BALANCE:
      return { title: "Error", description: "Insufficient Balance" };
    case INVALID_BID:
      return { title: "Error", description: "Invalid Bid" };
    case LOW_BID:
      return { title: "Error", description: "Low Bid" };
    case INVALID_NFT:
      return { title: "Error", description: "Invalid NFT" };
    default:
      return { title: "Error", description: "Something went wrong!" };
  }
};
