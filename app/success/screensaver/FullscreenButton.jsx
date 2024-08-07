"use client";

export default function FullscreenButton() {
  function handleFullScreen() {
    const imageContainer = document.getElementById("image-container");
    imageContainer.requestFullscreen();
  }

  return (
    <button className="btn" onClick={() => handleFullScreen()}>
      <svg
        className="h-6 w-6"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 15H15V10H13.2V13.2H10V15ZM6 15V13.2H2.8V10H1V15H6ZM10 2.8H12.375H13.2V6H15V1H10V2.8ZM6 1V2.8H2.8V6H1V1H6Z"
            fill="#ffffff"
          ></path>{" "}
        </g>
      </svg>
      Full Screen
    </button>
  );
}
