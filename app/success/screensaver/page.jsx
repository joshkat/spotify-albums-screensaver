import Loading from "./loading";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import ImageContainer from "./ImageContainer";
import ReturnButton from "../../ReturnButton";
import FullscreenButton from "./FullscreenButton";
import RedirectToPlaylist from "./RedirectToPlaylist";

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
  if (albumImageURLs.length < 1) {
    redirect(
      `/400?error=Your playlist doesn't contain enough songs to generate art`
    );
  }

  return (
    <div>
      <div className="flex justify-center gap-10 py-5">
        <ReturnButton />
        <FullscreenButton />
        <RedirectToPlaylist id={id} />
      </div>
      <Suspense fallback={<Loading />}>
        <ImageContainer imageArray={albumImageURLs} />
      </Suspense>
    </div>
  );
}

async function getImageURLs(albumSet, url, token) {
  if (albumSet.size >= 80 || url === null) {
    // base case when we hit desired num of URLs or when URL is ""
    return [...albumSet].filter((item) => item != "{}");
    // filter out "{}" which comes up when album is local and spotify doesn't have the art
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
    // console.log(await res.text(), res.status, token);
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
