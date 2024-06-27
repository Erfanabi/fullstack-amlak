"use client";
import { LuShare2 } from "react-icons/lu";

function ShareButton() {
  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(window.location.toString());
  };

  return (
    <div className="share" onClick={copyToClipboard}>
      <LuShare2 />
      <button>اشتراک گذاری</button>
    </div>
  );
}

export default ShareButton;
