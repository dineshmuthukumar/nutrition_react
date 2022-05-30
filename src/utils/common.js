import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
  validatePhoneNumberLength,
} from "libphonenumber-js";
import images from "../utils/images.json";

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  return re.test(String(email).toLowerCase());
};

export const validateName = (name) => {
  const re =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  return re.test(name);
};

export const validatePhone = (mobile) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; // eslint-disable-line
  return re.test(mobile);
};

export const validateNameReplace = (input) =>
  input
    .replace("  ", " ")
    .replace("--", "-")
    .replace(",,", ",")
    .replace("..", ".")
    .replace("''", "'")
    .replace("-,", "-")
    .replace("-.", "-")
    .replace("-'", "-")
    .replace(",-", ",")
    .replace(",.", ",")
    .replace(",'", ",")
    .replace(".-", ".")
    .replace(".,", ".")
    .replace(".'", ".")
    .replace("'-", "'")
    .replace("',", "'")
    .replace("'.", "'");

export const passwordLength = 6;

export const currencyFormat = (value, type) => {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: type,
  });
  return formatter.format(parseFloat(value ? value : 0));
};

// export const abbreviateNumber = (value) => {
//   let newValue = value;
//   if (value >= 1000) {
//     const suffixes = ["", "K", "M", "B", "T"];
//     let suffixNum = Math.floor(("" + value).length / 3);
//     let shortValue = "";
//     for (let precision = 2; precision >= 1; precision--) {
//       shortValue = (
//         suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value
//       ).toPrecision(precision);
//       let dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "");
//       if (dotLessShortValue.length <= 2) {
//         break;
//       }
//     }
//     console.log(shortValue);
//     if (shortValue % 1 !== 0) shortValue = parseFloat(shortValue).toFixed(1);
//     newValue = shortValue + suffixes[suffixNum];
//   }
//   return newValue;
// };

const intlFormat = (num) => {
  return new Intl.NumberFormat().format(Math.round(num * 10) / 10);
};
export const abbreviateNumber = (num) => {
  if (num >= 1000000000) return intlFormat(num / 1000000000) + "B";
  if (num >= 1000000) return intlFormat(num / 1000000) + "M";
  if (num >= 1000) return intlFormat(num / 1000) + "K";
  return intlFormat(num);
};

export const percDiff = (basePrice, newPrice) => {
  return (((newPrice - basePrice) / basePrice) * 100).toFixed(2);
};

export const validateCurrency = (value) => {
  // const re = /^(\d*)\.?(\d){0,10}$/;
  // const re = /^\d*\.?\d{0,2}$/;
  const re = /^[1-9][0-9]*$/;
  return re.test(value);
};

export const validateQuantity = (value) => {
  const re = /^[1-9][0-9]*$/;
  return re.test(value);
};

export const bidBuyError = (code) => {
  // const OK = 200;
  const ERROR = 500;
  const ERROR404 = 404;
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
  const INVALID_CATEGORY = 711;
  const KYC_VERIFY = 715;
  const AUCTION_CANCEL_BANNED = 718;

  switch (code) {
    case ERROR:
      return {
        title: "Oops!",
        description:
          "The request could not be processed at this time. Please try again.!",
      };
    case ERROR404:
      return { title: "Oops!", description: "Not found!" };
    case UNAUTHORIZED:
      return { title: "Error", description: "Unauthorized" };
    case AUCTION_UNBEGUN:
      return { title: "Error", description: "Auction not yet begun" };
    case AUCTION_ENDED:
      return { title: "Error", description: "Auction ended" };
    case INVALID_QUANTITY:
      return { title: "Error", description: "Invalid Quantity" };
    case SOLD:
      return { title: "Oops!", description: "Sold out" };
    case OUT_OF_STOCK:
      return { title: "Oops!", description: "Out of stock" };
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
    case INVALID_CATEGORY:
      return { title: "Error", description: "Invalid Category" };
    case KYC_VERIFY:
      return {
        title: "Error",
        description: "Please complete your KYC verification",
      };
    case AUCTION_CANCEL_BANNED:
      return {
        title: "Oops!",
        description: "Auction could not be cancel, there is an active bid!",
      };
    default:
      return {
        title: "Oops!",
        description:
          "The request could not be processed at this time. Please try again.!",
      };
  }
};

export const validInternationalPhone = (input, country) => {
  return (
    isPossiblePhoneNumber(input, country) === true &&
    isValidPhoneNumber(input, country) === true &&
    validatePhoneNumberLength(input, country) === undefined
  );
};

export const validateURL = (url) => {
  const re =
    /^http(s?):\/\/(www\.)?(((\w+(([\.\-]{1}([a-z]{2,})+)+)(\/[a-zA-Z0-9\_\=\?\&\.\#\-\W]*)*$)|(\w+((\.([a-z]{2,})+)+)(\:[0-9]{1,5}(\/[a-zA-Z0-9\_\=\?\&\.\#\-\W]*)*$)))|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(([0-9]|([1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]+)+)(\/[a-zA-Z0-9\_\=\?\&\.\#\-\W]*)*)((\:[0-9]{1,5}(\/[a-zA-Z0-9\_\=\?\&\.\#\-\W]*)*$)*))$/; // eslint-disable-line
  // /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
  return re.test(url);
};

export const calculateTimeLeft = (input, cInput) => {
  var offset = new Date().getTimezoneOffset();
  var input_utc = new Date(input);
  input_utc.setMinutes(input_utc.getMinutes() - offset);

  let difference;
  if (cInput) {
    var cInput_utc = new Date(cInput);
    cInput_utc.setMinutes(cInput_utc.getMinutes() - offset);

    difference = +new Date(input_utc) - +new Date(cInput_utc);
  } else {
    var cInput_utc_1 = new Date();
    cInput_utc_1.setMinutes(cInput_utc_1.getMinutes() - offset);

    difference = +new Date(input_utc) - +new Date(cInput_utc_1);
  }

  var cInput_utc_2 = new Date();
  cInput_utc_2.setMinutes(cInput_utc_2.getMinutes() - offset);

  difference = +new Date(input_utc) - +new Date(cInput_utc_2);

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0.1,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export const dot = (color = "#ccc") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

export const level = (value) => {
  const level = [
    {
      type: "1",
      name: "LVL 1",
      value: images.level1,
    },
    {
      type: "2",
      name: "LVL 2",
      value: images.level2,
    },
    {
      type: "3",
      name: "LVL 3",
      value: images.level3,
    },
    {
      type: "4",
      name: "LVL 4",
      value: images.level4,
    },
    {
      type: "5",
      name: "LVL 5",
      value: images.level5,
    },
    {
      type: "6",
      name: "LVL 6",
      value: images.level6,
    },
    {
      type: "7",
      name: "LVL 7",
      value: images.level7,
    },
    {
      type: "8",
      name: "LVL 8",
      value: images.level8,
    },
    {
      type: "9",
      name: "LVL 9",
      value: images.level9,
    },
    {
      type: "10",
      name: "LVL 10",
      value: images.level10,
    },
    {
      type: "11",
      name: "LVL 11",
      value: images.level11,
    },
    {
      type: "12",
      name: "LVL 12",
      value: images.level12,
    },
    {
      type: "13",
      name: "LVL 13",
      value: images.level13,
    },
    {
      type: "14",
      name: "LVL 14",
      value: images.level14,
    },
    {
      type: "15",
      name: "LVL 15",
      value: images.level15,
    },
  ];
  const levelData = level.find((obj) => obj.type === value);
  return levelData;
};

export const role = (value) => {
  const role = [
    {
      type: "Batsman",
      name: "BATSMAN",
      value: images.batsmanICO,
    },
    {
      type: "Bowler",
      name: "BOWLER",
      value: images.bowlerIco,
    },
    {
      type: "Bat",
      name: "BAT",
      value: images.batsmanICO,
    },
  ];
  const roleData = role.find((obj) => obj.type === value);
  return roleData;
};

export const playerCategory = (value) => {
  const playerCategory = [
    {
      type: "ROOKIE",
      value: "RO",
      color: "blue_color",
      textColor: "#3b56ff",
    },
    {
      type: "RARE",
      value: "RA",
      color: "orange_color",
      textColor: "#f58220",
    },
    {
      type: "EPIC",
      value: "EP",
      color: "purple_color",
      textColor: "#9e6cef",
    },
    {
      type: "LEGEND",
      value: "LG",
      color: "multi_color",
      textColor: "linear-gradient(202deg, #e2ff00, #18e0e0, #e8318d)",
    },
    {
      type: "SUPER RARE",
      value: "SR",
      color: "lavender_color",
      textColor: "#803cef",
    },
    {
      type: "ULTRA RARE",
      value: "UR",
      color: "lavender_color",
      textColor: "#803cef",
    },
    {
      type: "IMMORTAL",
      value: "IM",
      color: "lavender_color",
      textColor: "#803cef",
    },
  ];

  const playerCatData = playerCategory.find((obj) => obj.type === value);
  return playerCatData;
};
