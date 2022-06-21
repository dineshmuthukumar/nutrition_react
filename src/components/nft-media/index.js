import React, { useEffect, useState } from "react";
import { Modal, OverlayTrigger, Popover } from "react-bootstrap";
import {
  AiOutlineLink,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

import toaster from "../../utils/toaster";
import images from "../../utils/images.json";
import { nftMakeFav, nftMakeUnFav } from "../../api/methods";
import { level, role, playerCategory } from "../../utils/common";

import "./style.scss";

const NFTMedia = ({ nft, title, slug, isFav, statistics }) => {
  const location = useLocation();

  const [modalShow, setModalShow] = useState(false);
  const [liked, setLiked] = useState(false);
  const { user } = useSelector((state) => state.user.data);

  const [listedShare, setListedShare] = useState(false);

  useEffect(() => {
    setLiked(isFav);

    if (
      location.pathname.startsWith("/order/details") &&
      nft?.order_details?.owned
    ) {
      setListedShare(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFav]);

  const handleLike = async () => {
    if (!user)
      window.open(
        `${process.env.REACT_APP_ACCOUNTS_URL}/signin?redirect=${window.location.href}`,
        "_self"
      );

    setLiked(!liked);
    try {
      if (!liked) {
        await nftMakeFav({ nft_slug: slug });
      } else {
        await nftMakeUnFav({ nft_slug: slug });
      }
    } catch (err) {
      console.log(err);
      toaster(
        500,
        "The request could not be processed at this time. Please try again."
      );
    }
  };

  const toggleFullScreen = () => {
    var el = document.getElementById("full-screenVideo");

    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  };

  const toggleAudioFullScreen = () => {
    var el = document.getElementById("audio-fullscreen");
    if (!el.paused) el.pause();
    setModalShow(true);
  };

  const download = (dataurl, filename) => {
    const link = document.createElement("a");
    link.href = dataurl;
    link.download = filename;
    link.click();
  };

  const levelData = level(statistics?.level?.value);
  const roleData = role(
    statistics?.role?.value,
    statistics?.dominant_hand?.value ? statistics?.dominant_hand?.value : "BAT"
  );
  const playerCatData = playerCategory(statistics?.category?.value);

  return (
    <section className="nft-img-block">
      <div
        className={`nft-media media_audio  ${
          playerCatData?.color ? playerCatData?.color : "gold_color"
        }`}
      >
        {nft?.signed_by?.length > 0 && (
          <div className="nft-signature-detail-box">
            <h6 className="nft-signature-detail">
              <span>Signed by </span> {nft?.signed_by[0]}{" "}
              {nft?.signed_by?.length > 1 && <>&amp; {nft?.signed_by[1]}</>}
            </h6>
          </div>
        )}

        <article
          className={`player_stats  ${
            playerCatData?.color ? playerCatData?.color : "gold_color"
          }`}
        >
          {roleData && (
            <div className="player-type">
              <h6>{roleData?.name}</h6>
              <img src={roleData?.value} alt="Player-type" loading="lazy" />
            </div>
          )}

          {playerCatData && (
            <div className="player-range">
              <span className="band">{playerCatData?.value}</span>
              {roleData && roleData?.name !== "BAT" && <h6> Player</h6>}
            </div>
          )}
          {levelData && (
            <div className="player-level">
              <h6>{levelData?.name}</h6>
              <img src={levelData?.value} alt="Player-level" loading="lazy" />
            </div>
          )}
        </article>

        {(() => {
          if (nft?.asset_type?.includes("image")) {
            return (
              <img
                alt={`${nft?.name}`}
                className="type_image typeimg_audio"
                src={nft.asset_url ? nft.asset_url : images.sample}
                loading="lazy"
              />
            );
          } else if (nft?.asset_type?.includes("audio")) {
            return (
              <>
                <div className="no_height align-items-center">
                  <img
                    alt={`${nft?.name}`}
                    className="type_image typeimg_audio"
                    src={nft.cover_url ? nft.cover_url : images.sample}
                    onClick={() => {
                      var el = document.getElementById("audio-fullscreen");
                      if (!el.paused) {
                        el.pause();
                      } else {
                        el.play();
                      }
                    }}
                    loading="lazy"
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
                <video
                  id="full-screenVideo"
                  loop
                  muted
                  autoPlay
                  playsInline
                  controlsList="nodownload"
                >
                  <source src={nft?.asset_url} type="video/mp4" />
                </video>
              </div>
            );
          } else {
            return (
              <img
                alt="media logo"
                className="type_image typeimg_audio"
                src={nft.asset_url ? nft.asset_url : images.sample}
                loading="lazy"
              />
            );
          }
        })()}

        <Modal
          fullscreen
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={modalShow}
          onHide={() => setModalShow(false)}
        >
          <Modal.Header
            closeButton
            className="full-screen-header"
          ></Modal.Header>
          <Modal.Body className="media_audio">
            {(() => {
              if (nft?.asset_type?.includes("image")) {
                return (
                  <img
                    alt={`${nft?.name}`}
                    className="type_image typeimg_audio"
                    src={nft.asset_url ? nft.asset_url : images.sample}
                    loading="lazy"
                  />
                );
              } else if (nft?.asset_type?.includes("audio")) {
                return (
                  <>
                    <div className="no_height">
                      <img
                        alt={`${nft?.name}`}
                        className="type_image typeimg_audio"
                        src={nft.cover_url ? nft.cover_url : images.sample}
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
                        loading="lazy"
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
                  <video
                    controls
                    oncontextmenu="return false;"
                    controlsList="nodownload"
                    autoplay
                    playsinline
                  >
                    <source src={nft?.asset_url} type="video/mp4" />
                  </video>
                );
              }
            })()}
          </Modal.Body>
        </Modal>
      </div>
      <div
        className={`media-lsf flex-xs ${
          playerCatData?.color ? playerCatData?.color : "gold_color"
        }`}
      >
        <SharePopover
          icon={
            <div>
              <div className="svg_size share_icon"></div>
            </div>
          }
          placement="top"
          title={title}
          listedShare={listedShare}
        />

        <CustomPopover
          icon={
            <div
              onClick={() => {
                if (nft?.asset_type?.includes("image")) {
                  setModalShow(true);
                } else if (nft?.asset_type?.includes("video")) {
                  toggleFullScreen();
                } else if (nft?.asset_type?.includes("audio")) {
                  toggleAudioFullScreen();
                }
              }}
            >
              <div className="svg_size extend_icon"></div>
            </div>
          }
          placement="top"
          text="Fullscreen"
        />
        <CustomPopover
          icon={
            <div onClick={handleLike}>
              {liked ? (
                <div className="svg_size filled_heart_icon"></div>
              ) : (
                <div className="svg_size heart_icon"></div>
              )}
            </div>
          }
          placement="top"
          text="Favourite"
        />
        {nft?.certificate_file_url?.length > 0 &&
          nft?.certificate_file_url.map((url, i) => (
            <CustomPopover
              key={`pdf-${i}`}
              icon={
                <div onClick={() => download(url, `${nft.name}-${i + 1}`)}>
                  <div className="svg_size certificate_icon"></div>
                </div>
              }
              placement="top"
              text={
                nft?.certificate_file_url?.length > 1
                  ? `Download Certificate-${i + 1}`
                  : "Download Certificate"
              }
            />
          ))}
      </div>
    </section>
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

const SharePopover = ({ icon, placement, title, listedShare = false }) => {
  const url = window.location.href;
  var hashtags = "jump.trade,NFT,popularNFT,rareNFT,NFTMarketplace";
  const via = "jump.trade";

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
              {listedShare ? (
                <>
                  <CopyToClipboard
                    role="button"
                    className="me-2"
                    text={url}
                    onCopy={() => {
                      toast.success("Copied to Clipboard");
                    }}
                  >
                    <AiOutlineLink size={35} />
                  </CopyToClipboard>
                  <AiFillFacebook
                    role="button"
                    className="me-2"
                    size={35}
                    style={{ color: "#4267B2" }}
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodeURIComponent(
                          `Hey!! Check out this awesome NFT I've listed for sale! You can buy it on Jump.trad marketplace!`
                        )}`
                      )
                    }
                  />
                  <AiFillTwitterCircle
                    role="button"
                    className="me-2"
                    size={35}
                    style={{ color: "#1DA1F2" }}
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(
                          `Hey y'all! Here is the #NFT I've listed for sale on @Jumptradenft marketplace powered by @Guardian_NFT! Check it out if you wanna buy this NFT and more NFTs? Sign up and gear up! #NFTCollection`
                        )}`
                      )
                    }
                  />
                  <FaTelegramPlane
                    role="button"
                    className="me-2"
                    size={35}
                    style={{ color: "#0088cc" }}
                    onClick={() =>
                      window.open(
                        `https://telegram.me/share/?url=${url}&title=${encodeURIComponent(
                          `Hey!! Check out this awesome NFT I've listed for sale! You can buy it on Jump.trade marketplace!`
                        )}`
                      )
                    }
                  />

                  <FaWhatsapp
                    role="button"
                    size={35}
                    style={{ color: "#25D366" }}
                    onClick={() => {
                      detectWhatsapp(
                        `whatsapp://send?text=Hey ! I found an awesome NFT here%0a%0a${encodeURIComponent(
                          `Hey!! Check out this awesome NFT I've listed for sale! You can buy it on Jump.trade marketplace!`
                        )}%0a%0aCheck it out in below link%0a%0a${url}`
                      ).then((hasWhatsapp) => {
                        if (!hasWhatsapp) {
                          alert(
                            "You don't have WhatsApp, kindly install it and try again"
                          );
                        }
                      });
                    }}
                  />
                </>
              ) : (
                <>
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
                        `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=Hey! I found an awesome NFT here%0a%0a${encodeURIComponent(
                          title
                        )}%0a%0aCheck it out in below link%0a%0a`
                      )
                    }
                  />
                  <AiFillTwitterCircle
                    size={35}
                    style={{ color: "#1DA1F2" }}
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?url=${url}&text=Hey! I found an awesome NFT here%0a%0a${encodeURIComponent(
                          title
                        )}%0a%0aCheck it out in below link%0a%0a&hashtags=${hashtags}&via=${via}`
                      )
                    }
                  />
                  <FaTelegramPlane
                    size={35}
                    style={{ color: "#0088cc" }}
                    onClick={() =>
                      window.open(
                        `https://telegram.me/share/?url=${url}&title=Hey! I found an awesome NFT here%0a%0a${encodeURIComponent(
                          title
                        )}%0a%0aCheck it out in below link%0a%0a`
                      )
                    }
                  />

                  <FaWhatsapp
                    size={35}
                    style={{ color: "#25D366" }}
                    onClick={() => {
                      detectWhatsapp(
                        `whatsapp://send?text=Hey! I found an awesome NFT here%0a%0a${encodeURIComponent(
                          title
                        )}%0a%0aCheck it out in below link%0a%0a${url}`
                      ).then((hasWhatsapp) => {
                        if (!hasWhatsapp) {
                          alert(
                            "You don't have WhatsApp, kindly install it and try again"
                          );
                        }
                      });
                    }}
                  />
                </>
              )}
            </Popover.Body>
          </Popover>
        }
      >
        <span>{icon}</span>
      </OverlayTrigger>
    </>
  );
};

export default NFTMedia;
