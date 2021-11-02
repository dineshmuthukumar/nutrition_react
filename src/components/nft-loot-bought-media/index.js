import React, { useEffect, useState } from "react";
import { Modal, OverlayTrigger, Popover } from "react-bootstrap";
import { prominent } from "color.js";
import {
  AiOutlineExpand,
  AiOutlineLink,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

import lootBox from "../../images/loot/loot_box.gif";

import "./style.scss";

const NFTLootBoughtMedia = ({ nft }) => {
  const [modalShow, setModalShow] = useState(false);
  const [bgColor, setBgColor] = useState();

  const static_url = [
    {
      id: "Vj6ZeNAwFOYbad2n",
      url: "https://res.cloudinary.com/developergsh/video/upload/v1635764508/NFT/Sehenshah-2-1_tjshyo.mp4",
    },
    {
      id: "BxRM51oLFgY7AdoP",
      url: "https://res.cloudinary.com/developergsh/video/upload/v1635764506/NFT/Silsila-1_g5ltpg.mp4",
    },
    {
      id: "GaDEQYvAFO1lRxdZ",
      url: "https://res.cloudinary.com/developergsh/video/upload/v1635764499/NFT/Don-1_ipyhxt.mp4",
    },
    {
      id: "mJGgB1R9FbNoXWPr",
      url: "https://res.cloudinary.com/developergsh/video/upload/v1635764488/NFT/Sholay-1-1_g6xfpe.mp4",
    },
    {
      id: "Ma498YyXFk1wBnL6",
      url: "https://res.cloudinary.com/developergsh/video/upload/v1635764467/NFT/Dewar-1_Low_uqtjre.mp4",
    },
    {
      id: "lqgR23zJF83Xa8Kx",
      url: "https://res.cloudinary.com/developergsh/video/upload/v1635764457/NFT/Hum_oz9bj1.mp4",
    },
    {
      id: "46RDA3OXFLNM8ZmW",
      url: "https://res.cloudinary.com/developergsh/video/upload/v1635762632/NFT/Kabikabi-1_iovca0.mp4",
    },
    {
      id: "wnJMy1xzFm36A09X",
      url: "https://res.cloudinary.com/developergsh/video/upload/v1635844602/NFT/Loot-Mrnatwarlal-wnJMy1xzFm36A09X_pky3cn.mp4",
    },
    {
      id: "PxR5B1r4FA3GnjAM",
      url: "https://res.cloudinary.com/developergsh/video/upload/v1635844749/NFT/Loot-Sehenshah-PxR5B1r4FA3GnjAM_r9tfb3.mp4",
    },
    {
      id: "GB8OzYpaFy3Rb6vm",
      url: "https://res.cloudinary.com/developergsh/video/upload/v1635844806/NFT/Loot-Trishul-GB8OzYpaFy3Rb6vm_hzjy28.mp4",
    },
    {
      id: "AJWQV1MOFl3w6mOX",
      url: "https://res.cloudinary.com/developergsh/video/upload/v1635844806/NFT/Loot-Deewaar-AJWQV1MOFl3w6mOX_gh2zha.mp4",
    },
  ];

  useEffect(() => {
    if (nft?.asset_type?.includes("image")) {
      getBgColor(nft.asset_url);
    } else {
      getBgColor(nft.cover_url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nft]);

  const getBgColor = async (input) => {
    if (input) {
      const image = nft.asset_type.includes("image")
        ? nft.asset_url
        : nft.cover_url;
      const color = await prominent(image, { amount: 1 });

      setBgColor(`rgb(${color[0]},${color[1]},${color[2]},0.3)`);
    } else {
      setBgColor(`rgb(0,0,0,0.1)`);
    }
  };

  return (
    <div className="nft-media media_audio" style={{ background: bgColor }}>
      {/* <div className="show_height"><img className="type_image typeimg_audio" src="https://wallpaperaccess.com/full/112115.jpg" />  </div> */}
      {/* <div className="show_height"><img className="type_gif" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif" />/div> */}

      {(() => {
        if (nft?.asset_type?.includes("image")) {
          return (
            <img
              alt="media logo"
              className="type_image typeimg_audio"
              src={nft.asset_url ? nft.asset_url : lootBox}
            />
          );
        } else if (nft?.asset_type?.includes("audio")) {
          return (
            <>
              <div className="no_height align-items-center">
                <img
                  alt="media logo"
                  className="type_image typeimg_audio"
                  src={nft.cover_url ? nft.cover_url : lootBox}
                  onClick={() => {
                    var el = document.getElementById("audio-fullscreen");
                    if (!el.paused) {
                      el.pause();
                    } else {
                      el.play();
                    }
                  }}
                />
              </div>
              <audio
                id="audio-fullscreen"
                controls
                className="shadow-sm audioOnmedia"
                disablepictureinpicture
                controlslist="nodownload noplaybackrate"
              >
                <source src={nft.asset_url} type={nft.asset_type} />
                Your browser does not support the audio element.
              </audio>
            </>
          );
        } else if (nft?.asset_type?.includes("video")) {
          return (
            <div className="video-height">
              <video id="full-screenVideo" 
              controls oncontextmenu="return false;" 
              controlsList="nodownload" 
              playsinline
              controls
              autoplay
              loop
              >
                <source
                src={
                  static_url.find((obj) => obj.id === nft.slug)?.url
                    ? static_url.find((obj) => obj.id === nft.slug)?.url
                    : nft.asset_url
                }
                type="video/mp4"
              />
              </video>
            </div>
          );
        }
      })()}

      <div className="media-lsf">
        {/* <CustomPopover
          icon={
            <div onClick={handleLike}>
              <AiFillHeart
                className="svg_size"
                size={25}
                color={liked ? "red" : "black"}
              />
            </div>
          }
          placement="top"
          text="Favourite"
        />*/}

        <SharePopover
          icon={
            <div>
              <AiOutlineShareAlt className="svg_size" size={25} />
            </div>
          }
          placement="top"
          title="BigB Loot Box!"
        />

        <CustomPopover
          icon={
            <div onClick={() => setModalShow(true)}>
              <AiOutlineExpand className="svg_size" size={25} />
            </div>
          }
          placement="top"
          text="Fullscreen"
        />
      </div>

      <Modal
        fullscreen
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton className="full-screen-header"></Modal.Header>
        <Modal.Body className="media_audio">
          {/* <div className="show_height"><img className="type_image typeimg_audio" src="https://wallpaperaccess.com/full/112115.jpg" />  </div> */}
          {/* <div className="show_height"><img className="type_gif" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif" />/div> */}

          {(() => {
            if (nft?.asset_type?.includes("image")) {
              return (
                <img
                  alt="media logo"
                  className="type_image typeimg_audio"
                  src={nft.asset_url ? nft.asset_url : lootBox}
                />
              );
            } else if (nft?.asset_type?.includes("audio")) {
              return (
                <>
                  <div className="no_height">
                    <img
                      alt="media logo"
                      className="type_image typeimg_audio"
                      src={nft.cover_url ? nft.cover_url : lootBox}
                      onClick={() => {
                        var el = document.getElementById(
                          "audio-fullscreen-full"
                        );
                        if (!el.paused) {
                          el.pause();
                        } else {
                          el.play();
                        }
                      }}
                    />
                  </div>
                  <audio
                    id="audio-fullscreen-full"
                    controls
                    className="shadow-sm audioOnmedia"
                    disablepictureinpicture
                    controlslist="nodownload noplaybackrate"
                  >
                    <source src={nft.asset_url} type={nft.asset_type} />
                    Your browser does not support the audio element.
                  </audio>
                </>
              );
            } else if (nft?.asset_type?.includes("video")) {
              return (
                
                <video controls oncontextmenu="return false;" controlsList="nodownload" autoplay playsinline>
                  <source
                    src={
                      static_url.find((obj) => obj.id === nft.slug)?.url
                        ? static_url.find((obj) => obj.id === nft.slug)?.url
                        : nft.asset_url
                    }
                    type="video/mp4"
                  />
                </video>
              );
            }
          })()}
        </Modal.Body>
      </Modal>
    </div>
  );
};

const CustomPopover = ({ icon, placement, text }) => {
  return (
    <OverlayTrigger
      trigger={["hover", "focus"]}
      rootClose
      key={placement}
      placement={placement}
      overlay={
        <Popover className="mb-2">
          <Popover.Body className="p-2 custom-pop">{text}</Popover.Body>
        </Popover>
      }
    >
      {icon}
    </OverlayTrigger>
  );
};

const SharePopover = ({ icon, placement, title }) => {
  const url = window.location.href;
  const hashtags =
    "beyondlife.club,nft,amitabh,bachchan,amitabh_bachchan,bollywood,popular,recent";
  const via = "beyondlife.club";

  const detectWhatsapp = (uri) => {
    const onIE = () => {
      return new Promise((resolve) => {
        window.navigator.msLaunchUri(
          uri,
          () => resolve(true),
          () => resolve(false)
        );
      });
    };

    const notOnIE = () => {
      return new Promise((resolve) => {
        const a =
          document.getElementById("wapp-launcher") ||
          document.createElement("a");
        a.id = "wapp-launcher";
        a.href = uri;
        a.style.display = "none";
        document.body.appendChild(a);

        const start = Date.now();
        const timeoutToken = setTimeout(() => {
          if (Date.now() - start > 1250) {
            resolve(true);
          } else {
            resolve(false);
          }
        }, 1000);

        const handleBlur = () => {
          clearTimeout(timeoutToken);
          resolve(true);
        };
        window.addEventListener("blur", handleBlur);

        a.click();
      });
    };

    return window.navigator.msLaunchUri ? onIE() : notOnIE();
  };

  return (
    <>
      <OverlayTrigger
        trigger="click"
        rootClose
        key={placement}
        placement={placement}
        overlay={
          <Popover className="mb-2">
            <Popover.Body className="p-1 custom-pop">
              <CopyToClipboard
                text={url}
                onCopy={() => {
                  toast.success("Copied to Clipboard");
                }}
              >
                <AiOutlineLink size={35} />
              </CopyToClipboard>
              <AiFillFacebook
                size={35}
                style={{ color: "#4267B2" }}
                onClick={() =>
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`
                  )
                }
              />
              <AiFillTwitterCircle
                size={35}
                style={{ color: "#1DA1F2" }}
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?url=${url}&text=${title}&hashtags=${hashtags}&via=${via}`
                  )
                }
              />
              <FaTelegramPlane
                size={35}
                style={{ color: "#0088cc" }}
                onClick={() =>
                  window.open(
                    `https://telegram.me/share/?url=${url}&title=${title}`
                  )
                }
              />

              <FaWhatsapp
                size={35}
                style={{ color: "#25D366" }}
                onClick={() => {
                  detectWhatsapp(
                    `whatsapp://send?text=Hey ! I found an awesome NFT here%0a%0a${title}%0a%0aCheck it out in below link%0a%0a${url}`
                  ).then((hasWhatsapp) => {
                    if (!hasWhatsapp) {
                      alert(
                        "You don't have WhatsApp, kindly install it and try again"
                      );
                    }
                  });
                }}
              />
            </Popover.Body>
          </Popover>
        }
      >
        <span>{icon}</span>
      </OverlayTrigger>
    </>
  );
};

export default NFTLootBoughtMedia;
