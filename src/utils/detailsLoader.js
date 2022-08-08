import { useWindowSize } from "./useWindowSize";
import ContentLoader from "react-content-loader";

const DetailsLoader = (props) => {
  const { width } = useWindowSize();
  const isMobile = width < 540;
  const isTab = width <= 912;
  const isLaptop = width <= 1024;
  const is2K = width <= 1440;
  const is4K = width <= 3560;
  return (
    <>
      {isMobile ? (
        <>
          <ContentLoader
            viewBox="0 0 200 380"
            speed={1}
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            className="mb-load"
          >
            <rect x="5" y="20" rx="10" ry="10" width="190" height="180" />
            <circle cx="130" cy="220" r="12" />
            <circle cx="155" cy="220" r="12" />
            <circle cx="180" cy="220" r="12" />
            <rect x="5" y="234" rx="6" ry="6" width="180" height="10" />
            <rect x="5" y="250" rx="6" ry="6" width="70" height="10" />
            <circle cx="86" cy="252" r="5" />
            <rect x="98" y="250" rx="6" ry="6" width="40" height="10" />
            <rect x="5" y="270" rx="7" ry="7" width="110" height="12" />
            <rect x="5" y="285" rx="4" ry="4" width="190" height="8" />
            <rect x="5" y="295" rx="4" ry="4" width="187" height="8" />
            <rect x="5" y="305" rx="4" ry="4" width="185" height="8" />
            <rect x="5" y="315" rx="4" ry="4" width="182" height="8" />
            <rect x="5" y="325" rx="4" ry="4" width="175" height="8" />
            <rect x="5" y="335" rx="4" ry="4" width="170" height="8" />
          </ContentLoader>
        </>
      ) : isTab ? (
        <ContentLoader
          viewBox="0 0 700 850 "
          speed={1}
          backgroundColor="#f5f5f5"
          foregroundColor="#dbdbdb"
          className="mb-load"
          {...props}
        >
          <rect x="20" y="50" rx="25" ry="25" width="585" height="585" />
          <circle cx="650" cy="70" r="22" />
          <circle cx="650" cy="120" r="22" />
          <circle cx="650" cy="170" r="22" />
          <rect x="20" y="640" rx="8" ry="8" width="560" height="15" />
          <rect x="20" y="680" rx="12" ry="12" width="300" height="25" />
          <rect x="20" y="720" rx="8" ry="8" width="650" height="15" />
          <rect x="20" y="745" rx="8" ry="8" width="635" height="15" />
          <rect x="20" y="770" rx="8" ry="8" width="620" height="15" />
          <rect x="20" y="795" rx="8" ry="8" width="605" height="15" />
        </ContentLoader>
      ) : isLaptop ? (
        <ContentLoader
          viewBox="0 50 700 440"
          backgroundColor="#fff"
          foregroundColor="#dbdbdb"
          {...props}
        >
          <rect x="10" y="80" rx="30" ry="30" width="320" height="350" />
          <circle cx="360" cy="100" r="16" />
          <circle cx="360" cy="135" r="16" />
          <circle cx="360" cy="170" r="16" />
          <rect x="387" y="90" rx="5" ry="5" width="290" height="10" />
          <rect x="387" y="110" rx="5" ry="5" width="180" height="10" />
          <rect x="387" y="130" rx="10" ry="10" width="240" height="20" />
          <rect x="387" y="160" rx="7" ry="7" width="310" height="13" />
          <rect x="387" y="182" rx="7" ry="7" width="300" height="13" />
          <rect x="387" y="204" rx="7" ry="7" width="295" height="13" />
          <rect x="387" y="226" rx="7" ry="7" width="290" height="13" />
          <rect x="395" y="270" rx="7" ry="7" width="100" height="13" />
          <rect x="530" y="270" rx="7" ry="7" width="90" height="13" />
          <rect x="387" y="320" rx="20" ry="20" width="290" height="45" />
          <rect x="387" y="380" rx="20" ry="20" width="290" height="45" />
        </ContentLoader>
      ) : is2K ? (
        <>
          <ContentLoader
            viewBox="0 50 900 500 "
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            {...props}
          >
            <rect x="10" y="80" rx="15" ry="15" width="450" height="370" />
            <circle cx="485" cy="95" r="16" />
            <circle cx="485" cy="130" r="16" />
            <circle cx="485" cy="165" r="16" />
            <rect x="510" y="80" rx="7" ry="7" width="350" height="13" />
            <rect x="520" y="100" rx="7" ry="7" width="50" height="13" />
            <rect x="510" y="125" rx="10" ry="10" width="250" height="20" />
            <rect x="510" y="150" rx="7" ry="7" width="365" height="13" />
            <rect x="510" y="170" rx="7" ry="7" width="375" height="13" />
            <rect x="510" y="190" rx="7" ry="7" width="365" height="13" />
            <rect x="510" y="210" rx="7" ry="7" width="150" height="13" />
            <rect x="510" y="280" rx="40" ry="40" width="365" height="170" />
          </ContentLoader>
        </>
      ) : null}
    </>
  );
};

export default DetailsLoader;
