import React from "react";
import PlaylistButtons from "./PlaylistButtons";
import { getPlaylists } from "@/app/lib/getPlaylists";

export default async function SelectionScreen({ params }) {
  const playlists = (await getPlaylists(params.token, 0))[[0]];
  return (
    <main className="flex flex-col items-center min-h-screen p-10">
      <p className="text-center">
        Select the playlist, keep in mind depending on playlist size the grid
        will be resize accordingly.
        <br />
        For largest grid size have at least 80 unique album covers (for an 8 x 5
        grid)
      </p>

      <PlaylistButtons initalPlaylists={playlists} token={params.token} />
    </main>
  );
}
