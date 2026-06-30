/**
 * Builds the `NowPlaying` view-model from Spotify's player endpoints.
 *
 * Strategy: prefer the live currently-playing track; when nothing is live,
 * fall back to the most recently played track so the widget is never empty.
 * Only track *metadata* (title, artist, album, cover-art URL) is surfaced —
 * no audio or lyrics.
 *
 * The pure mappers (`trackToNowPlaying`, `pickNowPlaying`) are separated from
 * the network fetch so they can be unit-tested without hitting Spotify.
 */
import type {
  CurrentlyPlayingResponse,
  NowPlayingResponse,
  RecentlyPlayedResponse,
  SpotifyTrack,
} from "@/types/spotify";
import { fetchCurrentlyPlaying, fetchRecentlyPlayed } from "@/lib/spotify/client";

/** Maps a raw Spotify track onto the `NowPlaying` view-model. */
export function trackToNowPlaying(track: SpotifyTrack, isLive: boolean): NowPlayingResponse {
  return {
    playing: true,
    isLive,
    title: track.name,
    artist: track.artists.map((a) => a.name).join(", "),
    album: track.album.name,
    albumImageUrl: track.album.images[0]?.url ?? null,
    songUrl: track.external_urls.spotify,
  };
}

/**
 * Chooses what to show from the two endpoint responses: a live track wins;
 * otherwise the recent track is used as a fallback; otherwise "not playing".
 * Pure — takes the already-fetched data so it can be tested in isolation.
 */
export function pickNowPlaying(
  current: CurrentlyPlayingResponse | null,
  recent: RecentlyPlayedResponse | null,
): NowPlayingResponse {
  if (current?.is_playing && current.item) {
    return trackToNowPlaying(current.item, true);
  }
  const recentTrack = recent?.items[0]?.track;
  if (recentTrack) {
    return trackToNowPlaying(recentTrack, false);
  }
  return { playing: false };
}

/**
 * Fetches both endpoints and resolves the widget's state. Returns
 * `{ playing: false }` on any error so the route never throws to the client.
 */
export async function getNowPlaying(): Promise<NowPlayingResponse> {
  try {
    const current = await fetchCurrentlyPlaying();
    // Only spend the second request when nothing is playing live.
    const recent = current?.is_playing && current.item ? null : await fetchRecentlyPlayed();
    return pickNowPlaying(current, recent);
  } catch (error) {
    console.error("Failed to resolve Spotify now-playing:", error);
    return { playing: false };
  }
}
