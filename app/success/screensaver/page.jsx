import { redirect } from "next/navigation";
import ImageContainer from "./ImageContainer";
import { Suspense } from "react";

export default async function Screensaver({ searchParams }) {
  const id = searchParams.id;
  const token = searchParams.token;
  if (id === "" || id === undefined || token === "" || token === undefined) {
    redirect("/403");
  }

  const playlistURL =
    id === "liked"
      ? `https://api.spotify.com/v1/me/tracks?limit=50`
      : `https://api.spotify.com/v1/playlists/${id}/tracks?limit=50`;
  const albumImageURLs = await getImageURLs(new Set(), playlistURL, token);
  if (albumImageURLs.length < 3) {
    redirect(
      `/400?error=Your playlist doesn't contain enough songs to generate art`
    );
  }

  return (
    <div className="flex flex-col gap-12 break-words">
      <Suspense fallback={<p>Loading...</p>}>
        <ImageContainer imageArray={albumImageURLs} />
      </Suspense>
    </div>
  );
}

async function getImageURLs(albumSet, url, token) {
  if (albumSet.size >= 80 || url === null) {
    // base case when we hit desired num of URLs or when URL is ""
    return [...albumSet];
  }

  const req = fetch(url, {
    cache: "no-cache",
    method: "GET",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
  });

  let res = await req;
  if (res.status != 200) {
    // something went down, redirect out of here
    console.log(await res.text(), res.status, token);
    redirect("/403");
  }

  const json = await res.json();
  let newSet = new Set(albumSet);

  json.items.map((itemsObj) => {
    const setObj = {
      albumURL: itemsObj?.track?.album?.external_urls?.spotify,
      songCover: itemsObj?.track?.album?.images[0]?.url,
    };
    newSet.add(JSON.stringify(setObj));
  });
  // recurse!
  return getImageURLs(newSet, json.next, token);
}
