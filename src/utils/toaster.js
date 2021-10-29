import { toast } from "react-toastify";

const toaster = (code, message) => {
  const CODE200 = 200;
  const CODE401 = 401;
  const CODE500 = 500;

  switch (code) {
    case CODE200:
      return toast.success(message);
    case CODE401:
      return toast.error(message);
    case CODE500:
      return toast.error(message);
    default:
      return;
  }
};

export default toaster;
