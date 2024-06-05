"use client";

import Image from "next/image";
import { useState } from "react";
import { getPlaylists } from "@/app/lib/getPlaylists";

export default function PlaylistButtons({ initalPlaylists, token }) {
  const [playlists, setPlaylists] = useState(initalPlaylists);
  const [offset, setOffset] = useState(20);
  const [isNextNull, setIsNextNull] = useState(false);

  return (
    <>
      <div className="w-full flex flex-wrap items-center justify-center gap-10">
        <div
          className="flex h-40 w-[450px] space-x-4 p-4 border rounded-md shadow-md playlist-button"
          onClick={() => {
            console.log("https://api.spotify.com/v1/me/tracks?limit=50");
          }}
        >
          {/* preset liked songs box since spotify doesn't consider this a playlist */}
          <Image
            alt={"Liked Songs"}
            src={"https://misc.scdn.co/liked-songs/liked-songs-300.png"}
            className="object-cover rounded-md"
            width={128}
            height={128}
          />
          <div className="flex flex-col justify-center max-w-[250px]">
            <p className="text-lg font-semibold">{"Liked Songs"}</p>
            <p className="text-sm text-white">Your liked songs</p>
          </div>
        </div>
        {playlists.map((playlistObj, index) => (
          <div
            key={index}
            className="flex h-40 w-[450px] space-x-4 p-4 border rounded-md shadow-md playlist-button"
            onClick={() => {
              console.log(playlistObj?.href);
            }}
          >
            {/* playlistObj?.description , playlistObj?.href, playlistObj?.images, playlistObj?.name*/}
            <Image
              alt={playlistObj?.name}
              src={playlistObj?.images[0].url || ""}
              className="object-cover rounded-md"
              width={128}
              height={128}
            />
            <div className="flex flex-col justify-center max-w-[250px]">
              <p className="text-lg font-semibold">{playlistObj?.name}</p>
              <p
                className="text-sm text-white overflow-y-scroll overflow-x-hidden break-keep"
                dangerouslySetInnerHTML={{ __html: playlistObj?.description }}
              ></p>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`btn ${isNextNull ? "hidden" : ""}`}
        onClick={async (e) => {
          const morePlaylists = await getPlaylists(token, offset);
          if (morePlaylists[1].next === null) {
            setIsNextNull(true);
          }

          let updatedOffset = offset;
          updatedOffset += 20;
          setOffset(updatedOffset);

          let updatedPlaylists = [...playlists, ...morePlaylists[0]];
          setPlaylists(updatedPlaylists);
        }}
      >
        Generate More
      </button>{" "}
    </>
  );
}
