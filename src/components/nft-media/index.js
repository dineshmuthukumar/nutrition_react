import React, { useEffect, useState } from "react";
import { Modal, OverlayTrigger, Popover } from "react-bootstrap";
import {
  AiFillHeart,
  AiOutlineShareAlt,
  AiOutlineExpand,
  AiOutlineLink,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { nftMakeFav, nftMakeUnFav } from "../../api/methods";
import toaster from "../../utils/toaster";
import "./style.scss";

const NFTMedia = ({ image, title, slug, isFav }) => {
  const [modalShow, setModalShow] = useState(false);
  const [liked, setLiked] = useState(false);
  const { user } = useSelector((state) => state.user.data);

  useEffect(() => {
    setLiked(isFav);
  }, [isFav]);

  const handleLike = async () => {
    if (!user)
      window.open(
        `${process.env.REACT_APP_BASE_URL}/signin?redirect=${window.location.href}`,
        "_self"
      );

    setLiked(!liked);
    try {
      if (!liked) {
        let response = await nftMakeFav({ nft_slug: slug });
      } else {
        let response = await nftMakeUnFav({ nft_slug: slug });
      }
    } catch (err) {
      console.log(err);
      toaster(500, "Something went wrong");
    }
  };
  return (
    <div className="nft-media media_audio">
      {/* <div className="show_height"><img className="type_image typeimg_audio" src="https://wallpaperaccess.com/full/112115.jpg" />  </div> */}
      {/* <div className="show_height"><img className="type_gif" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif" />/div> */}
      {/* <video controls>
        <source
          src="https://www.w3schools.com/tags/movie.mp4"
          type="video/mp4"
        />
      </video> */}
      <div className="no_height">
        <img
          className="type_image typeimg_audio"
          src={image ? image : "https://wallpaperaccess.com/full/112115.jpg"}
        />
      </div>
      {/* <audio
        controls
        className="shadow-sm audioOnmedia"
        disablepictureinpicture
        controlslist="nodownload noplaybackrate"
      >
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio> */}
      <div className="media-lsf">
        <CustomPopover
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
        />

        <SharePopover
          icon={
            <div>
              <AiOutlineShareAlt className="svg_size" size={25} />
            </div>
          }
          placement="top"
          title={title}
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
          {/* <video controls>
        <source
          src="https://www.w3schools.com/tags/movie.mp4"
          type="video/mp4"
        />
      </video> */}
          <div className="no_height">
            <img
              className="type_image typeimg_audio"
              src="https://wallpaperaccess.com/full/112115.jpg"
            />
          </div>
          <audio controls className="shadow-sm audioOnmedia">
            <source
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              type="audio/mp3"
            />
            Your browser does not support the audio element.
          </audio>
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
                onClick={() =>
                  window.open(
                    `whatsapp://send?text=Hey ! I found an awesome NFT here, check it out in below link%0a%0ahttps://amitabh.bafdemo.com/details/BxRM51oLFgY7AdoP`
                  )
                }
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

export default NFTMedia;
