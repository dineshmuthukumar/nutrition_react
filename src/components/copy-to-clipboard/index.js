import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BiCopyAlt } from "react-icons/bi";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useTranslation } from "react-multi-lang";

const CopyToClipboardComponent = ({ copyText }) => {
  const t = useTranslation();
  const [copyStatus, setCopyStatus] = useState(false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {copyStatus ? t("copied") : t("copytoclipboard")}
    </Tooltip>
  );

  return (
    <div className="d-flex justify-content-between align-items-center bg-light p-2">
      <label className="text-secondary">{copyText}</label>
      <OverlayTrigger placement="left" overlay={renderTooltip}>
        <CopyToClipboard
          text={copyText}
          onCopy={() => {
            setCopyStatus(true);
            setTimeout(async () => {
              setCopyStatus(false);
            }, 5000);
          }}
        >
          <button className="btn btn-secondary">
            <BiCopyAlt size={20} />
          </button>
        </CopyToClipboard>
      </OverlayTrigger>
    </div>
  );
};

export default CopyToClipboardComponent;
