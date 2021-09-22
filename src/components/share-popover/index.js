import React from "react";
import {
    AiOutlineLink,
    AiFillFacebook,
    AiFillTwitterCircle
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { OverlayTrigger, Popover } from "react-bootstrap";
import CopyToClipboardComponent from "../copy-to-clipboard";

const SharePopover = ({ icon, placement }) => {

    const copy = () => {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    }

    return (
        <>
            <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                    <Popover>
                        <Popover.Body>
                            <AiOutlineLink size={25} onClick={copy} />
                            <AiFillFacebook size={25} style={{color: "#4267B2"}} />
                            <AiFillTwitterCircle size={25} style={{color: "#1DA1F2"}} />
                            <FaTelegramPlane size={25} style={{color: "#0088cc"}} />
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
