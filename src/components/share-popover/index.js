import React from "react";
import {
  AiOutlineLink,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "./style.scss";

const SharePopover = ({ icon, placement }) => {
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
                text={window.location.href}
                onCopy={() => {
                  toast.success("Copied to Clipboard");
                }}
              >
                <AiOutlineLink size={35} />
              </CopyToClipboard>
              <AiFillFacebook size={35} style={{ color: "#4267B2" }} />
              <AiFillTwitterCircle size={35} style={{ color: "#1DA1F2" }} />
              <FaTelegramPlane size={35} style={{ color: "#0088cc" }} />
            </Popover.Body>
          </Popover>
        }
      >
        <span>{icon}</span>
      </OverlayTrigger>
    </>
  );
};

export default SharePopover;
