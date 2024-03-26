"use client";
import { useSearchParams } from "next/navigation";
import ImageContainer from "./ImageContainer";
import { useState } from "react";

export default function Success() {
  const searchParams = useSearchParams();
  const [albumImageURLs, setAlbumImageURLs] = useState([]);
  const [length, setLength] = useState(0);

  async function getTopItems(event) {
    setAlbumImageURLs([-1]);
    const range = event.currentTarget.id;
    const user_token = searchParams.get("user_token");

    const req = fetch(
      `/api/spotify/get_top_items?user_token=${user_token}&range=${range}`
    );
    const res = (await req).json();
    const URLArray = await res;
    setAlbumImageURLs(URLArray);
    setLength(URLArray.length);
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-16 gap-12">
      <div>
        <p className="mb-5">
          Great you&apos;re logged in! Now pick a time frame of your top
          listens:
        </p>
        <div className="flex justify-evenly w-full">
          <button className="btn" id="short_term" onClick={getTopItems}>
            4 weeks
          </button>
          <button className="btn" id="medium_term" onClick={getTopItems}>
            6 months
          </button>
          <button className="btn" id="long_term" onClick={getTopItems}>
            1 year
          </button>
        </div>
      </div>

      <ImageContainer
        imageArray={albumImageURLs}
        length={albumImageURLs.length}
      />
    </main>
  );
}
