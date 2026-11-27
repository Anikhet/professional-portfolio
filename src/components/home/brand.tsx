/**
 * Official platform logos (Simple Icons paths), drawn in currentColor so they sit
 * quietly in the palette. LinkedIn is not in Simple Icons and its Medium entry is the wordmark,
 * so those two marks are inlined.
 */
import { siAppstore, siDiscord, siGithub, siX } from "simple-icons";
import type { SVGProps } from "react";

/** Medium's mark: three ellipses ("the dots"). */
const MEDIUM_PATH =
  "M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z";

const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

function Brand({ path, title, ...props }: { path: string; title: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" role="img" aria-label={title} {...props}>
      <path d={path} />
    </svg>
  );
}

type P = SVGProps<SVGSVGElement>;
export const GitHubIcon = (p: P) => <Brand path={siGithub.path} title="GitHub" {...p} />;
export const XIcon = (p: P) => <Brand path={siX.path} title="X" {...p} />;
export const MediumIcon = (p: P) => <Brand path={MEDIUM_PATH} title="Medium" {...p} />;
export const LinkedInIcon = (p: P) => <Brand path={LINKEDIN_PATH} title="LinkedIn" {...p} />;
export const AppStoreIcon = (p: P) => <Brand path={siAppstore.path} title="App Store" {...p} />;
export const DiscordIcon = (p: P) => <Brand path={siDiscord.path} title="Discord" {...p} />;

/** Email has no brand; a plain envelope in the same weight as the logos. */
export const EmailIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Email" {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3 6.5 9 6.5 9-6.5" />
  </svg>
);

/** Which logo to show for a project link, by URL. */
export function linkIcon(url: string) {
  if (url.includes("apps.apple.com")) return { Icon: AppStoreIcon, label: "App Store" };
  if (url.includes("github.com")) return { Icon: GitHubIcon, label: "GitHub" };
  if (url.includes("medium.com")) return { Icon: MediumIcon, label: "Medium" };
  return null;
}
