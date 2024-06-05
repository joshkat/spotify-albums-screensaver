import React from "react";
import GenerateMoreButton from "./GenerateMoreButton";
import Image from "next/image";
import { getPlaylists } from "@/app/lib/getPlaylists";

export default async function SelectionScreen({ params }) {
  let offset = 20;
  const playlists = await getPlaylists(params.token, 0);
  return (
    <main className="flex flex-col items-center min-h-screen p-16">
      <p className="text-center">
        Select the playlist, keep in mind depending on playlist size the grid
        will be resize accordingly.
        <br />
        For largest grid size have at least 80 unique album covers (for an 8 x 5
        grid)
      </p>
      <div className="w-full p-10 flex flex-wrap items-center justify-center gap-10">
        <div className="flex h-40 w-[450px] space-x-4 p-4 border rounded-md shadow-md">
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
          {/* {playlistObj?.images[0].url} <br /> <br /> */}
        </div>
        {playlists.items.map((playlistObj, index) => (
          <div
            key={index}
            className="flex h-40 w-[450px] space-x-4 p-4 border rounded-md shadow-md"
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
                className="text-sm text-white overflow-scroll break-all"
                dangerouslySetInnerHTML={{ __html: playlistObj?.description }}
              ></p>
            </div>
          </div>
        ))}
      </div>

      <GenerateMoreButton offset={offset} />
    </main>
  );
}
