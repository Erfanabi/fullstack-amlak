"use client";
import { LuShare2 } from "react-icons/lu";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";

function ShareButton2() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  });

  const onCopyHandler = () => {
    toast("! Copied", {
      icon: "👏",
    });
  };

  return (
    <CopyToClipboard text={url} onCopy={onCopyHandler}>
      <div className="share">
        <LuShare2 />
        <button>اشتراک گذاری</button>
      </div>
    </CopyToClipboard>
  );
}

export default ShareButton2;
