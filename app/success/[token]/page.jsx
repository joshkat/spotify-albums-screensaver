import React from "react";
import PlaylistButtons from "./PlaylistButtons";
import { getPlaylists } from "@/app/lib/getPlaylists";

export default async function SelectionScreen({ params }) {
  const playlists = (await getPlaylists(params.token, 0))[[0]];
  return (
    <main className="flex flex-col items-center min-h-screen p-10 gap-3">
      <p className="text-center">
        Select the playlist, keep in mind the more unique album covers there are
        in your playlist the better it&apos;ll turn out (since it&apos;s an 8*5
        grid).
        <br />
        (Unless you like a bunch of repeating art)
      </p>

      <PlaylistButtons initalPlaylists={playlists} token={params.token} />
    </main>
  );
}
