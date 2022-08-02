import { useWindowSize } from "./useWindowSize";
import ContentLoader from "react-content-loader";

const RecentSoldLoader = (props) => {
    const { width } = useWindowSize();
    const isMobile = width <= 576;
    const isTab = width <= 780;
    const isLaptop = width <= 1024;
  return (
    <>
      {isMobile ? (
        <>
          <ContentLoader
            viewBox="0 0 200 250"
            speed={1}
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            className="mb-load"
          >
            <rect x="2" y="5" rx="2" r='2'  ry="2" width="900" height="500" />
          </ContentLoader>
          <ContentLoader
            viewBox="0 0 200 250"
            speed={1}
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            className="mb-load"
          >
            <rect x="2" y="5" rx="2" ry="2" width="900" height="500" />
          </ContentLoader>
        </>
      ) : isTab ? (
        <ContentLoader
          viewBox="0 50 900 650 "
          speed={1}
          width={"100%"}
          height={"100%"}
          backgroundColor="#f5f5f5"
          foregroundColor="#dbdbdb"
          className="mb-load"
          {...props}
        >
          <rect x="0" y="5" rx="2" ry="2" width="450" height="700" />
          <rect x="465" y="5" rx="2" ry="2" width="450" height="700" />
        </ContentLoader>
      ) : isLaptop ? (
        <ContentLoader
          viewBox="0 50 900 460 "
          width={"100%"}
          speed={1}
          height={"100%"}
          backgroundColor="#f5f5f5"
          foregroundColor="#dbdbdb"
          // className="mt-1"
          {...props}
        >
          <rect x="0" y="5" rx="2" ry="2" width="300" height="1000" />
          <rect x="315" y="5" rx="2" ry="2" width="300" height="1000" />
          <rect x="630" y="5" rx="2" ry="2" width="300" height="1000" />
        </ContentLoader>
      ) : (
        <>
          <ContentLoader
            viewBox="0 50 900 300 "
            width={"100%"}
            height={"100%"}
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            // className="mb-load-1"
            {...props}
          >
            <rect x="0" y="5" rx="2" ry="2" width="210" height="1000" />
            <rect x="225" y="5" rx="2" ry="2" width="210" height="1000" />
            <rect x="450" y="5" rx="2" ry="2" width="210" height="800" />
            <rect x="675" y="5" rx="2" ry="2" width="210" height="800" />
          </ContentLoader>
        </>
      )}
    </>
  );
};

export default RecentSoldLoader;
