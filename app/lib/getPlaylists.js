import { redirect } from "next/navigation";

export async function getPlaylists(token, offset) {
  const req = fetch(
    `https://api.spotify.com/v1/me/playlists?offset=${offset}&limit=20`,
    {
      cache: "no-cache",
      method: "GET",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  let res = await req;
  if (res.status != 200) {
    // something went down, redirect out of here
    console.log(await res.text(), res.status, token);
    redirect("/403");
  }

  const json = await res.json();
  return json;
  // let newSet = new Set(albumSet);

  // json.items.map((itemsObj) => {
  //   const setObj = {
  //     albumURL: itemsObj?.track?.album?.external_urls?.spotify,
  //     songCover: itemsObj?.track?.album?.images[0]?.url,
  //   };
  //   newSet.add(JSON.stringify(setObj));
  // });
}
