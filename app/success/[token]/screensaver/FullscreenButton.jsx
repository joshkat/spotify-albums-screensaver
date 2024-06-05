"use client";

export default function FullscreenButton() {
  function handleFullScreen() {
    const imageContainer = document.getElementById("image-container");
    imageContainer.requestFullscreen();
  }

  return (
    <button className="btn" onClick={() => handleFullScreen()}>
      Make Full Screen
    </button>
  );
}
