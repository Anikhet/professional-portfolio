/**
 * Server-only Spotify Web API client.
 *
 * Spotify has no webhooks, so "now playing" works by polling. This module
 * exchanges a long-lived refresh token for a short-lived access token (the
 * Authorization Code flow's refresh step), then calls the player endpoints.
 *
 * Secrets (`SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN`)
 * live in env vars and are read only here, on the server; they never reach the
 * client. See the setup guide returned by the route's error path.
 */
import type { CurrentlyPlayingResponse, RecentlyPlayedResponse } from "@/types/spotify";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

/** Reads and validates the three required Spotify env vars. Throws if missing. */
function readCredentials(): { clientId: string; clientSecret: string; refreshToken: string } {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Spotify credentials are not configured");
  }
  return { clientId, clientSecret, refreshToken };
}

/**
 * Exchanges the refresh token for a fresh access token.
 *
 * @throws if credentials are missing or Spotify rejects the refresh.
 */
async function getAccessToken(): Promise<string> {
  const { clientId, clientSecret, refreshToken } = readCredentials();
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: refreshToken }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Spotify token refresh failed: ${res.status}`);
  }
  const data = (await res.json()) as { access_token?: string };
  if (!data.access_token) {
    throw new Error("Spotify token refresh returned no access_token");
  }
  return data.access_token;
}

/**
 * Fetches the currently-playing track. Spotify returns 204 (no content) when
 * nothing is playing, so we resolve to `null` in that case rather than error.
 */
export async function fetchCurrentlyPlaying(): Promise<CurrentlyPlayingResponse | null> {
  const token = await getAccessToken();
  const res = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (res.status === 204 || res.status > 400) return null;
  return (await res.json()) as CurrentlyPlayingResponse;
}

/** Fetches the single most recently played track (used as the fallback). */
export async function fetchRecentlyPlayed(): Promise<RecentlyPlayedResponse | null> {
  const token = await getAccessToken();
  const res = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) return null;
  return (await res.json()) as RecentlyPlayedResponse;
}
