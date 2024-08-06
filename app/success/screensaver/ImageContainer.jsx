"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function ImageContainer({ imageArray }) {
  //split array into front and back
  const midPoint = Math.floor(imageArray.length / 2);
  const imgSide = 640;

  useEffect(() => {
    const intervalId = setInterval(() => {
      try {
        let randomIndex = Math.floor(Math.random() * imageArray.length);
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

    let selectedURL = JSON.parse(
      imageArray[Math.floor(Math.random() * imageArray.length)]
    ).songCover; // pick a random URL

    // when theyre false update front
    if (!frontTrue && !backTrue) {
      front.children[0].src = selectedURL;
      front.children[0].srcset = selectedURL;
    } else {
      // when theyre true update back
      back.children[0].src = selectedURL;
      back.children[0].srcset = selectedURL;
    }
  }

  function renderDivs() {
    const divs = [];
    for (let i = 0; i < 40; i++) {
      const imgObj = imageArray[i % imageArray.length]; // Repeat images if not enough
      divs.push(
        <div
          key={i}
          className="flex flex-col items-center"
          id={`image-${i}`}
          onClick={(e) => {
            handleFlip(i);
          }}
        >
          <div className="relative">
            <div id={`front_${i}`} className="cardFront absolute">
              <Image
                src={JSON.parse(imgObj).songCover}
                width={imgSide}
                height={imgSide}
                alt="image"
              />
            </div>
            <div id={`back_${i}`} className="cardBack">
              <Image
                src={JSON.parse(imgObj).songCover}
                width={imgSide}
                height={imgSide}
                alt="image"
              />
            </div>
          </div>
        </div>
      );
    }
    return shuffle(divs);
  }

  return (
    <div className="grid grid-cols-8 grid-rows-5" id="image-container">
      {/* {imageArray.map((imgObj, index) => (
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
                src={JSON.parse(imgObj).songCover}
                width={imgSide}
                height={imgSide}
                alt="image"
              />
            </div>
          </div>
        </div>
      ))} */}
      {renderDivs()}
    </div>
  );
}

function shuffle(arr) {
  let i = arr.length,
    j,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
