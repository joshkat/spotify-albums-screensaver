import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const scope = "user-library-read playlist-read-private";
  const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;
  const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const redirect_link = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}&show_dialog=true`;

  const spotify_svg = (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="#FFFFFF"
          fillRule="evenodd"
          d="M19.0983701,10.6382791 C15.230178,8.34118115 8.85003755,8.12986439 5.15729493,9.25058527 C4.56433588,9.43062856 3.93727638,9.09580812 3.75758647,8.50284907 C3.57789655,7.90953664 3.91236362,7.28283051 4.50585273,7.10261054 C8.74455585,5.81598127 15.7909802,6.06440214 20.2440037,8.70780512 C20.7774195,9.02442687 20.9525156,9.71332656 20.6362472,10.2456822 C20.3198021,10.779098 19.6305491,10.9549008 19.0983701,10.6382791 M18.971686,14.0407262 C18.7004726,14.4810283 18.1246521,14.6190203 17.6848801,14.3486903 C14.4600027,12.3664473 9.54264764,11.792217 5.72728477,12.9503953 C5.23256328,13.0998719 4.70992535,12.8208843 4.55974204,12.3270462 C4.41061884,11.8323247 4.68978312,11.3107469 5.18362118,11.1602103 C9.5419409,9.83771368 14.9600247,10.4782013 18.6638986,12.7544503 C19.1036707,13.0253103 19.242016,13.6013075 18.971686,14.0407262 M17.5034233,17.308185 C17.2876894,17.6617342 16.827245,17.7725165 16.4749326,17.5571359 C13.6571403,15.8347984 10.1101639,15.4459119 5.93312425,16.4000177 C5.53063298,16.4922479 5.12937851,16.2399399 5.03767834,15.8376253 C4.94544812,15.4351341 5.19669597,15.0338796 5.60024736,14.9420027 C10.1712973,13.8970803 14.0923186,14.3467468 17.2551791,16.2796943 C17.6078449,16.4948982 17.7189805,16.9556959 17.5034233,17.308185 M12,0 C5.37267547,0 0,5.37249879 0,11.9998233 C0,18.6278546 5.37267547,24 12,24 C18.6275012,24 24,18.6278546 24,11.9998233 C24,5.37249879 18.6275012,0 12,0"
        ></path>
      </g>
    </svg>
  );
  return (
    <main
      className="flex min-h-screen flex-col items-center gap-12 p-24 sm:p-20 md:px-40 lg:px-72"
      suppressHydrationWarning
    >
      <div>
        <p className="pb-3">
          You probably know what this site does. If not here&apos;s a word for
          word rip from the Github README
        </p>
        <div className="mockup-code">
          <pre data-prefix=">" className="">
            <code className="text-success">sed </code>
            <code>
              -n <code className="text-warning">&apos;3p&apos;</code> README.md
            </code>
          </pre>
          <div className="px-5">
            <code className="text-warning">
              Let&apos;s users login to spotify, pick one of their playlists and
              have it display an 8 * 5 grid of artwork. That&apos;s literally
              it.
            </code>
          </div>
        </div>
      </div>
      <div className="flex w-full max-h-96">
        <p>
          Still confused? Best way to learn is by trying isn&apos;t it? Login
          below to get started
        </p>
      </div>
      <Link href={redirect_link} className="btn">
        {spotify_svg}
        Login with Spotify
      </Link>

      <div className="flex flex-col gap-3 text-center w-full justify-center">
        <p>Links</p>
        <div className="flex gap-3 items-center justify-center flex-wrap">
          <Link
            href={"https://open.spotify.com/user/senior_fuego"}
            className="btn btn-wide"
          >
            {spotify_svg}
            Follow me on Spotify
          </Link>
          <Link
            href={"https://github.com/joshkat/spotify-albums-screensaver"}
            className="btn btn-wide"
          >
            <svg
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
              className="h-6 w-6"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-140.000000, -7559.000000)"
                    fill="#FFFFFF"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#142]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            Project Github
          </Link>
        </div>
      </div>
    </main>
  );
}
