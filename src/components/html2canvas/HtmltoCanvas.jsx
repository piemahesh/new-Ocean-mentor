import React from "react";
import html2canvas from "html2canvas";

const useScreenshotShare = () => {
  const takeScreenshotAndShare = () => {
    // Capture the screenshot
    html2canvas(document.getElementById("screenshot")).then((canvas) => {
      // Convert the canvas to base64 image
      const image = canvas.toDataURL("image/png");
      // Open the share dialog
      console.log(image);
      console.log(navigator.share);
      console.log("first");
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
