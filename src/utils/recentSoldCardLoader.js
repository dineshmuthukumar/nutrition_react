import { useWindowSize } from "./useWindowSize";
import ContentLoader from "react-content-loader";

const RecentSoldLoader = (props) => {
  const { width } = useWindowSize();
  const isMobile = width <= 575;
  const isTab = width <= 991;
  const isLaptop = width <= 1199;
  const is2K = width <= 1640;
  const is4K = width <= 3560;
  return (
    <>
      {isMobile ? (
        <>
          <ContentLoader
            viewBox="0 0 200 210"
            speed={1}
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            className="mb-load"
          >
            <rect x="2" y="5" rx="3" ry="3" width="198" height="205" />
          </ContentLoader>
          <ContentLoader
            viewBox="0 0 200 210"
            speed={1}
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            className="mb-load"
          >
            <rect x="2" y="10" rx="3" ry="3" width="198" height="205" />
          </ContentLoader>
          
        </>
      ) : isTab ? (
        <ContentLoader
          viewBox="0 50 900 530 "
          speed={1}
          width={"100%"}
          height={"100%"}
          backgroundColor="#f5f5f5"
          foregroundColor="#dbdbdb"
          className="mb-load"
          {...props}
        >
          <rect x="0" y="5" rx="8" ry="8" width="435" height="520" />
          <rect x="455" y="5" rx="8" ry="8" width="435" height="520" />
        </ContentLoader>
      ) : isLaptop ? (
        <ContentLoader
          viewBox="0 0 1200 510 "
          width={1200}
          height={510}
          backgroundColor="#f5f5f5"
          foregroundColor="#dbdbdb"
          // className="mb-load-1"
          {...props}
        >
          <rect x="0" y="5" rx="8" ry="8" width="380" height="500" />
          <rect x="400" y="5" rx="8" ry="8" width="380" height="500" />
          <rect x="800" y="5" rx="8" ry="8" width="380" height="500" />
        </ContentLoader>
      ) : is2K ? (
        <>
          <ContentLoader
            viewBox="0 0 1600 510 "
            width={1600}
            height={510}
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            // className="mb-load-1"
            {...props}
          >
            <rect x="0" y="5" rx="8" ry="8" width="380" height="500" />
            <rect x="395" y="5" rx="8" ry="8" width="380" height="500" />
            <rect x="790" y="5" rx="8" ry="8" width="380" height="500" />
            <rect x="1185" y="5" rx="8" ry="8" width="380" height="500" />
          </ContentLoader>
        </>
      ) : is4K ? (
        <>
          <ContentLoader
            viewBox="0 20 900 310 "
            speed={1}
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            {...props}
          >
            <rect x="0" y="5" rx="2" ry="2" width="215" height="1000" />
            <rect x="230" y="5" rx="2" ry="2" width="215" height="1000" />
            <rect x="460" y="5" rx="2" ry="2" width="215" height="1000" />
            <rect x="690" y="5" rx="2" ry="2" width="215" height="1000" />
          </ContentLoader>
          <ContentLoader
            viewBox="0 20 900 310 "
            speed={1}
            backgroundColor="#f5f5f5"
            foregroundColor="#dbdbdb"
            {...props}
          >
            <rect x="0" y="5" rx="2" ry="2" width="215" height="1000" />
            <rect x="230" y="5" rx="2" ry="2" width="215" height="1000" />
            <rect x="460" y="5" rx="2" ry="2" width="215" height="1000" />
            <rect x="690" y="5" rx="2" ry="2" width="215" height="1000" />
          </ContentLoader>
        </>
      ) : null}
    </>
  );
};

export default RecentSoldLoader;
