import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  const user_token = url.searchParams.get("user_token") || null;
  const range = url.searchParams.get("range") || null;

  if (user_token === null || range === null) {
    return NextResponse.json({ bruh: "bruh" });
  }

  const data = fetch(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${range}&limit=50`,
    {
      method: "GET",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${user_token}`,
      },
    }
  );

  const json = (await data).json();
  const spotifyJSON = await json;

  const albumImageURLs = new Set();
  await spotifyJSON.items.map((itemObj) => {
    albumImageURLs.add(itemObj?.album?.images[0]?.url);
  });

  return NextResponse.json([...albumImageURLs]);
}
