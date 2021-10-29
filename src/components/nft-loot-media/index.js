import React, { useState } from "react";
import { Modal, OverlayTrigger, Popover } from "react-bootstrap";
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

const NFTLootMedia = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="nft-media media_audio" style={{ background: "black" }}>
      {/* <div className="show_height"><img className="type_image typeimg_audio" src="https://wallpaperaccess.com/full/112115.jpg" />  </div> */}
      {/* <div className="show_height"><img className="type_gif" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif" />/div> */}

      <img alt="loot logo" className="type_image typeimg_audio" src={lootBox} />

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

          <img
            className="type_image typeimg_audio"
            src={lootBox}
            alt="type logo"
          />
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

export default NFTLootMedia;
