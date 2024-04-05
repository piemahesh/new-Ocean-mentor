import React, { useEffect } from "react";
import html2canvas from "html2canvas";

const useScreenshotShare = () => {
  const takeScreenshotAndShare = () => {
    // Capture the screenshot
    html2canvas(document.getElementById("screenshot")).then((canvas) => {
      // Convert the canvas to base64 image
      const image = canvas.toDataURL("image/png");
      // Open the share dialog
      const link = document.createElement("a");
      link.href = image;
      link.download = "screenshot.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      if (navigator.share) {
        navigator
          .share({
            title: "Share Screenshot",
            text: "Check out this screenshot!",
            url: image,
          })
          .then(() => {
            console.log("Shared successfully");
          })
          .catch((error) => {
            console.error("Error sharing:", error);
          });
      } else {
        console.error("Web Share API is not supported.");
      }
    });
  };

  return takeScreenshotAndShare;
};

export default useScreenshotShare;
