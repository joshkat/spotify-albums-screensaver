import Link from "next/link";
import { redirect } from "next/navigation";

export default async function RedirectToPlaylist({ id, token }) {
  const url =
    id === "liked"
      ? "https://open.spotify.com/collection/tracks"
      : (await getPlaylistURL(id, token)) || "https://open.spotify.com";
  return (
    <Link href={url} className="btn">
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM9 19V5L21 3V17M21 17C21 18.1046 19.6569 19 18 19C16.3431 19 15 18.1046 15 17C15 15.8954 16.3431 15 18 15C19.6569 15 21 15.8954 21 17ZM9 9L21 7"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>
      </svg>
      To Playlist
    </Link>
  );
}

async function getPlaylistURL(id, token) {
  const req = fetch(
    `https://api.spotify.com/v1/playlists/${id}?fields=external_urls`,
    {
      method: "GET",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const res = await req;
  const json = await res.json();
  if (res.status != 200) {
    return `/400?error=There was a problem fetching the URL from Spotify, they said: ${json?.error?.message}`;
  }
  return json?.external_urls?.spotify;
}
