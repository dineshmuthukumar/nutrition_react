import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import {
  AiFillHeart,
  AiOutlineShareAlt,
  AiOutlineExpand
} from "react-icons/ai";
import SharePopover from "../share-popover";
import "./style.scss";

const NFTMedia = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="nft-media">
      {/* <img src="https://picsum.photos/780/750" /> */}
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif" />
      {/* <video controls>
        <source
          src="https://www.w3schools.com/tags/movie.mp4"
          type="video/mp4"
        />
      </video> */}

      {/* <audio controls className="shadow-sm ">
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio> */}
      <div className="media-lsf">
        <div className="media-heart"><AiFillHeart size={25} /></div>
        <div className="media-share"><SharePopover icon={<AiOutlineShareAlt size={25} />} placement="top" /></div>
        <div className="media-expand"><AiOutlineExpand size={25} onClick={() => setModalShow(true)} /></div>
      </div>

      <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img className="modal-img" src="https://picsum.photos/780/750" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NFTMedia;
