import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const ToolTip = ({ icon, placement, content }) => {
    return (
        <>
            <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                    <Tooltip>
                        <strong>{content}</strong>.
                    </Tooltip>
                }
            >
                <span>{icon}</span>
            </OverlayTrigger>
        </>
    );
};

export default ToolTip;
