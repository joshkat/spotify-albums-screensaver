"use client";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();
  return (
    <button
      className="btn"
      onClick={() => {
        const state = "asdf1234";
        const scope = "user-library-read playlist-read-private";
        const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;
        const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
        router.push(
          `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}&state=${state}&show_dialog=true`
        );
      }}
    >
      Login to Spotify
    </button>
  );
}
