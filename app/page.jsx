import Link from "next/link";

export default function Home() {
  const scope = "user-library-read playlist-read-private";
  const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;
  const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const redirect_link = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}&show_dialog=true`;
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      suppressHydrationWarning
    >
      login to get started
      <Link href={redirect_link} className="btn">
        Login to Spotify
      </Link>
    </main>
  );
}
