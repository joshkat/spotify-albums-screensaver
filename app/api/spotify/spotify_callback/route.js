import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");

  if (code === null) {
    // when user cancels
    // TODO: Turn this into a proper redirect not JSON response
    return NextResponse.json({ error: error });
  }

  const spotifyJSON = await requestAccessToken(code);
  if (Object.keys(spotifyJSON).includes("error")) {
    return NextResponse.redirect(new URL("/error", request.url));
  }
  return NextResponse.redirect(
    new URL(`/success/${spotifyJSON.access_token}`, request.url)
  );
}

async function requestAccessToken(code) {
  const data = fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: new URLSearchParams({
      code: code,
      redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
      grant_type: "authorization_code",
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        new Buffer.from(
          process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID +
            ":" +
            process.env.SPOTIY_CLIENT_SECRET
        ).toString("base64"),
    },
  });

  const json = (await data).json();
  return json;
}
