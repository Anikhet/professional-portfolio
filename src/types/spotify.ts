/**
 * Types for the Spotify "now playing" widget.
 *
 * These split into two layers: the raw shapes Spotify's Web API returns
 * (`SpotifyTrack`, the two endpoint responses) and the small `NowPlaying`
 * view-model our route handler returns to the client. The client never sees
 * the raw API shape — only the normalized view-model.
 */

/** A simplified Spotify track image. */
export interface SpotifyImage {
  url: string;
  width: number;
  height: number;
}

/** The subset of a Spotify track object we actually use. */
export interface SpotifyTrack {
  name: string;
  artists: { name: string }[];
  album: { name: string; images: SpotifyImage[] };
  external_urls: { spotify: string };
}

/** `GET /v1/me/player/currently-playing` response (200 when something plays). */
export interface CurrentlyPlayingResponse {
  is_playing: boolean;
  item: SpotifyTrack | null;
}

/** `GET /v1/me/player/recently-played` response. */
export interface RecentlyPlayedResponse {
  items: { track: SpotifyTrack }[];
}

/**
 * The normalized view-model returned to the client. `isLive` distinguishes a
 * track playing right now from the most-recently-played fallback. When the
 * user has no Spotify activity at all, the route returns `{ playing: false }`.
 */
export interface NowPlaying {
  playing: boolean;
  /** True when the track is playing live; false when it's the recent fallback. */
  isLive: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string | null;
  songUrl: string;
}

/** The empty/off state — nothing live and no recent history. */
export interface NotPlaying {
  playing: false;
}

/** What the `/api/now-playing` route responds with. */
export type NowPlayingResponse = NowPlaying | NotPlaying;
