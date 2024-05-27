"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function ImageContainer({ imageArray, length }) {
  useEffect(() => {
    if (length > 0) {
      const intervalId = setInterval(() => {
        try {
          let randomIndex = Math.floor(Math.random() * length);
          let img = document.getElementById(`image-${randomIndex}`);
          if (img !== null) img.click();
        } catch (err) {
          console.log("no");
        }
      }, 1000); // Click every second (1000 milliseconds)

      return () => clearInterval(intervalId);
    }
  }, [length]);

  function handleFlip(index) {
    const front = document.getElementById(`front_${index}`);
    const back = document.getElementById(`back_${index}`);

    front.classList.toggle("flipped");
    back.classList.toggle("flipped");
  }

  if (imageArray[0] === -1) {
    return <span className="loading loading-spinner w-32"></span>;
  }

  return imageArray.length > 0 ? (
    <div className="grid grid-cols-6 grid-rows-4">
      {imageArray.map((url, index) => (
        <div
          key={index}
          className="flex flex-col items-center"
          id={`image-${index}`}
          onClick={(e) => {
            // console.log(e);
            handleFlip(index);
          }}
        >
          <div className="relative">
            <div id={`front_${index}`} className="cardFront absolute">
              <Image src={url} width={280} height={280} alt="image" />
            </div>
            <div id={`back_${index}`} className="cardBack">
              <Image
                src={imageArray[index + 1] || imageArray[index - 3]}
                width={280}
                height={280}
                alt="image"
              />
            </div>
          </div>
        </div>
      ))}

      <div
        className="flex flex-col items-center"
        id={`image-100`}
        onClick={(e) => {
          console.log(e);
          handleFlip(200);
        }}
      >
        <div className="relative">
          <div id={`front_100`} className="cardFront absolute">
            <Image
              src={imageArray[0 + 1]}
              width={280}
              height={280}
              alt="image"
              id="front-img-100"
            />
          </div>
          <div id={`back_100`} className="cardBack">
            <Image
              src={imageArray[3]}
              width={280}
              height={280}
              alt="image"
              id="back-img-100"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    "array empty"
  );
}
