"use client";

/**
 * "NOW PLAYING" widget for the OFF DUTY page.
 *
 * Polls `/api/now-playing` on an interval and shows the live Spotify track (or
 * the most recently played as a fallback). Renders inside a fixed-height row so
 * the layout reserves space before data arrives — no Cumulative Layout Shift.
 * It shows nothing until the first response resolves with a track.
 */
import Image from "next/image";
import { useEffect, useState } from "react";
import type { NowPlayingResponse } from "@/types/spotify";

/** How often to re-poll the now-playing endpoint (ms). */
const POLL_INTERVAL = 45_000;

/** A reserved-height shell so the widget never shifts the page as it loads. */
function WidgetShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, minHeight: 64 }}>{children}</div>
  );
}

export function NowPlaying() {
  const [data, setData] = useState<NowPlayingResponse | null>(null);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const res = await fetch("/api/now-playing");
        if (!res.ok) return;
        const json = (await res.json()) as NowPlayingResponse;
        if (active) setData(json);
      } catch (error) {
        console.error("Failed to load now-playing:", error);
      }
    }

    load();
    const id = setInterval(load, POLL_INTERVAL);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, []);

  // Nothing to show until we have a track (avoids an empty labeled row).
  if (!data || !data.playing) return null;

  return (
    <WidgetShell>
      {data.albumImageUrl ? (
        <Image
          src={data.albumImageUrl}
          alt={`${data.album} album art`}
          width={56}
          height={56}
          className="ed-radius-1"
          style={{ objectFit: "cover", flex: "0 0 auto" }}
        />
      ) : (
        <div className="ed-img ed-radius-1" style={{ width: 56, height: 56, flex: "0 0 auto" }} />
      )}

      <div style={{ minWidth: 0 }}>
        <div className="ed-meta" style={{ fontSize: "var(--ed-fs-badge)", marginBottom: 2 }}>
          {data.isLive ? "● Now playing" : "Last played"}
        </div>
        <a
          href={data.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ed-job-link ed-serif"
          style={{
            fontWeight: 400,
            fontSize: "var(--ed-fs-title)",
            color: "inherit",
            textDecoration: "none",
            display: "block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {data.title}
        </a>
        <div className="ed-body" style={{ fontSize: "var(--ed-fs-role)", opacity: 0.8 }}>
          {data.artist}
        </div>
      </div>
    </WidgetShell>
  );
}
