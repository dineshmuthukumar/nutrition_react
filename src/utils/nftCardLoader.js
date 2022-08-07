import { useWindowSize } from "./useWindowSize";
import ContentLoader from "react-content-loader";

const NFTCardLoader = (props) => {
  const { width } = useWindowSize();
  const isMobile = width <= 576;
  const isLaptop = width <= 1199;
  const isTab = width <= 991;

  const is2K = width <= 1440;
  const is4K = width <= 3560;
  return (
    <>
      {/* <div className="loader"> */}
      {isMobile ? (
        <>
          <ContentLoader
           viewBox="0 0 510 710"
            animate={true}
            width={510}
            speed={1}
            height={710}
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            className="mb-load"
          >
            <rect x="0" y="5" rx="8" ry="8" width="510" height="700" />
          </ContentLoader>
          <ContentLoader
           viewBox="0 0 510 710"
            animate={true}
            width={510}
            speed={1}
            height={710}
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            className="mb-load"
          >
            <rect x="0" y="5" rx="8" ry="8" width="510" height="700" />
          </ContentLoader>
        </>
      ) : isTab ? (
        <ContentLoader
          viewBox="0 30 1010 670"
          width={1010}
          height={670}
          speed={1}
          backgroundColor="#f5f5f5"
          foregroundColor="#dbdbdb"
          className="mt-1"
          {...props}
        >
          <rect x="0" y="5" rx="8" ry="8" width="490" height="650" />
          <rect x="505" y="5" rx="8" ry="8" width="490" height="650" />
        </ContentLoader>
      ) : isLaptop ? (
        <ContentLoader
          viewBox="0 20 830 510"
          width={830}
          height={510}
          speed={1}
          backgroundColor="#f5f5f5"
          foregroundColor="#dbdbdb"
          className="mt-1"
          {...props}
        >
          <rect x="0" y="5" rx="8" ry="8" width="400" height="500" />
          <rect x="420" y="5" rx="8" ry="8" width="400" height="500" />
        </ContentLoader>
      ) : is2K ? (
        <>
          <ContentLoader
            viewBox="0 0 1100 510"
            width={1100}
            height={510}
            speed={1}
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            className="mt-1"
            {...props}
          >
            <rect x="0" y="5" rx="8" ry="8" width="340" height="500" />
            <rect x="360" y="5" rx="8" ry="8" width="340" height="500" />
            <rect x="720" y="5" rx="8" ry="8" width="340" height="500" />
          </ContentLoader>
        </>
      ) : is4K ? (
        <>
           <ContentLoader
            viewBox="0 0 2000 810"
            width={2000}
            height={810}
            speed={1}
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            className="mt-1"
            {...props}
          >
            <rect x="0" y="5" rx="8" ry="8" width="640" height="800" />
            <rect x="660" y="5" rx="8" ry="8" width="640" height="800" />
            <rect x="1320" y="5" rx="8" ry="8" width="640" height="800" />
          </ContentLoader>
        </>
      ) : null}
      {/* </div> */}
    </>
  );
};

export default NFTCardLoader;
