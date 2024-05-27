"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageContainer({ imageArray }) {
  //split array into front and back
  const [frontSides, setFrontSides] = useState(imageArray.slice(0, 40));
  const [backSides, setBackSides] = useState(imageArray.slice(40, 80));
  const imgSide = 640;

  useEffect(() => {
    const intervalId = setInterval(() => {
      try {
        let randomIndex = Math.floor(Math.random() * 40);
        let img = document.getElementById(`image-${randomIndex}`);
        if (img !== null) img.click();
      } catch (err) {
        console.log("Error flipping cards");
      }
    }, 2000); // Flips every 2 second(s) (2000 milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  function handleFlip(index) {
    const front = document.getElementById(`front_${index}`);
    const back = document.getElementById(`back_${index}`);

    const frontTrue = front.classList.toggle("flipped");
    const backTrue = back.classList.toggle("flipped");

    // when theyre false update front
    if (!frontTrue && !backTrue) {
      front.children[0].src = JSON.parse(
        frontSides[Math.floor(Math.random() * 40)]
      ).songCover;
      front.children[0].srcset = JSON.parse(
        frontSides[Math.floor(Math.random() * 40)]
      ).songCover;
    } else {
      // when theyre true update back
      back.children[0].src = JSON.parse(
        backSides[Math.floor(Math.random() * 40)]
      ).songCover;
      back.children[0].srcset = JSON.parse(
        backSides[Math.floor(Math.random() * 40)]
      ).songCover;
    }
  }

  return (
    <div className="grid grid-cols-8 grid-rows-5" id="image-container">
      {imageArray.slice(0, 40).map((imgObj, index) => (
        <div
          key={index}
          className="flex flex-col items-center"
          id={`image-${index}`}
          onClick={(e) => {
            handleFlip(index);
          }}
        >
          <div className="relative">
            <div id={`front_${index}`} className="cardFront absolute">
              <Image
                src={JSON.parse(imgObj).songCover}
                width={imgSide}
                height={imgSide}
                alt="image"
              />
            </div>
            <div id={`back_${index}`} className="cardBack">
              <Image
                src={
                  JSON.parse(backSides[Math.floor(Math.random() * 40)])
                    .songCover
                }
                width={imgSide}
                height={imgSide}
                alt="image"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
