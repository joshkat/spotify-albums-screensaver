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
    console.error(await res.text(), res.status, token);
    redirect("/403");
  }

  const json = await res.json();
  return [json.items, { next: json.next }];
}
