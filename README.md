# Spotify Album Screensaver

Let's users login to spotify, pick one of their playlists and have it display an 8 \* 5 grid of artwork. That's literally it.

> Disclaimer: Built specifcally for my laptop to use within Firefox. If there are any UI bugs create an issue.

## Run Locally
1. Setup a Spotify developer app [here](https://developer.spotify.com/dashboard)
2. Fork the repo
3. `npm i` to get all your dependencies installed and configured
4. Create `.env.local` file within the root of the repo
5. Add the following variables to the env file
```env
  NEXT_PUBLIC_SPOTIFY_CLIENT_ID=YOUR_ID
  NEXT_PUBLIC_REDIRECT_URI=http://localhost:3000/api/spotify/spotify_callback // Set this up with spotify
  SPOTIY_CLIENT_SECRET=YOUR_SECRET
```

## Example:

It'll flip an artwork every 2 seconds (assuming JS doesn't forget how to count)

![image](./public/example.gif)
