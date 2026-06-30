/**
 * NOW PLAYING cover-art grid for the /off-duty page.
 *
 * Each game renders as a portrait cover (2:3) with a hover-revealed credit
 * overlay, plus a title + status line beneath it. Covers sit in a fixed
 * `aspect-ratio` box so the grid reserves its full height before the images
 * load — no Cumulative Layout Shift.
 */
import Image from "next/image";
import type { Game } from "@/types/editorial";

/** A single cover tile: portrait art, hover credit, title, and status tag. */
function GameCard({ game }: { game: Game }) {
  return (
    <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
      <div
        className="ed-game-cover"
        style={{
          position: "relative",
          aspectRatio: "2 / 3",
          width: "100%",
          overflow: "hidden",
          borderRadius: 6,
          border: "1.5px solid var(--ed-image-line)",
          background: "var(--ed-paper2)",
        }}
      >
        <Image
          src={game.cover.src}
          alt={game.cover.alt}
          fill
          sizes="(max-width: 600px) 33vw, (max-width: 1024px) 22vw, 140px"
          style={{ objectFit: "cover" }}
        />
        <figcaption
          className="ed-game-meta ed-meta"
          style={{
            position: "absolute",
            inset: "auto 0 0 0",
            padding: "18px 10px 8px",
            fontSize: "var(--ed-fs-meta)",
            letterSpacing: "1.5px",
            color: "#f0e8dc",
            background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
          }}
        >
          {game.meta}
        </figcaption>
      </div>

      <span className="ed-serif" style={{ fontWeight: 400, fontSize: "var(--ed-fs-title)", lineHeight: 1.2 }}>
        {game.name}
      </span>
    </figure>
  );
}

/** The full grid of game covers. */
export function GamesGrid({ games }: { games: Game[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
        gap: 22,
      }}
    >
      {games.map((game) => (
        <GameCard key={game.name} game={game} />
      ))}
    </div>
  );
}
