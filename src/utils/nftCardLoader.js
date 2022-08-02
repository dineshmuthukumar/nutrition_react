import { useWindowSize } from "./useWindowSize";
import ContentLoader from "react-content-loader";

const NFTCardLoader = (props) => {
  const { width } = useWindowSize();
  const isMobile = width <= 576;
  const isTab = width <= 1024;
  return (
    <>
      {isMobile ? (
        <>
          <ContentLoader
            animate={true}
            width={"100%"}
            speed={1}
            height={"100%"}
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            className="mb-load"
          >
            <rect x="0" y="5" rx="2" ry="2" width="500" height="500" />
          </ContentLoader>
          <ContentLoader
            // animate={true}
            width={"100%"}
            speed={1}
            height={"100%"}
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            className="mb-load"
          >
            <rect x="0" y="5" rx="2" ry="2" width="500" height="500" />
          </ContentLoader>
        </>
      ) : isTab ? (
        <ContentLoader
          viewBox="0  900 300"
          width={"100%"}
          speed={1}
          height={"100%"}
          backgroundColor="#f5f5f5"
          foregroundColor="#dbdbdb"
          className="mb-load"
          {...props}
        >
          <rect x="0" y="5" rx="2" ry="2" width="350" height="700" />
          <rect x="365" y="5" rx="2" ry="2" width="350" height="700" />
        </ContentLoader>
      ) : (
        <>
          <ContentLoader
            viewBox="0  900 300"
            width={"100%"}
            height={"100%"}
            speed={1}
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            className="mt-1"
            {...props}
          >
            <rect x="0" y="5" rx="2" ry="2" width="350" height="500" />
            <rect x="375" y="5" rx="2" ry="2" width="350" height="500" />
            <rect x="750" y="5" rx="2" ry="2" width="350" height="500" />
          </ContentLoader>
        </>
      )}
    </>
  );
};

export default NFTCardLoader;
