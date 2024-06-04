import { redirect } from "next/navigation";
import FullscreenButton from "./FullscreenButton";
import ImageContainer from "./ImageContainer";

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

export default async function Success({ params }) {
  const albumImageURLs = await getImageURLs(
    new Set(),
    "https://api.spotify.com/v1/me/tracks?limit=50",
    params.token
  );
  return (
    <main className="flex flex-col items-center min-h-screen p-16">
      <p className="text-center">
        Here&rsquo;s the grid, taken straight from your liked songs!
        <br />
        Keep in mind if you didn&rsquo;t have 80 songs from unique albums saved
        there will be repeats :)
      </p>

      <FullscreenButton />
      <ImageContainer imageArray={albumImageURLs} />
    </main>
  );
}
