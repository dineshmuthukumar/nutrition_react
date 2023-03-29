import useScrollPercentage from "../../hook/useScrollPosition";

import "./style.scss";

const Tablet = ({ trigger = null }) => {
  const scrollPercentage = useScrollPercentage();

  let className = "start";
  if (trigger) {
    className = scrollPercentage > trigger ? "show" : "hide";
  } else {
    if (scrollPercentage > 10) className = "1";
    if (scrollPercentage > 20) className = "2";
    if (scrollPercentage > 30) className = "3";
    if (scrollPercentage > 40) className = "4";
    if (scrollPercentage > 50) className = "5";
    if (scrollPercentage > 70) className = "end";
  }
  return "";
  // <div className={`tablet ${className}`}>
  //   <span className={className ? `t-${className}` : ""}></span>
  // </div>
};

export default Tablet;
