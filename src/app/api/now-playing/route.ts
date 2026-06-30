/**
 * GET /api/now-playing
 *
 * Returns the `NowPlaying` view-model for the OFF DUTY widget: the live Spotify
 * track, the recently-played fallback, or `{ playing: false }`. All Spotify
 * secrets are read server-side in `@/lib/spotify/client`; this handler only
 * shapes the response and sets a short cache window so the client can poll
 * without hammering Spotify's rate limits.
 */
import { NextResponse } from "next/server";
import { getNowPlaying } from "@/lib/spotify/now-playing";

// Always run fresh (the data is time-sensitive) but allow a short CDN cache.
export const dynamic = "force-dynamic";

export async function GET() {
  const data = await getNowPlaying();
  return NextResponse.json(data, {
    headers: {
      // Edge/CDN may serve a cached copy for 30s, revalidating in the background.
      "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
    },
  });
}
