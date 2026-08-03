/**
 * View-model types for the Editorial Front Page (Direction A).
 *
 * These describe the *shape the layout consumes*, decoupled from the raw
 * `portfolioData` source. The mapping lives in `@/data/editorial` so the
 * presentational components never reach back into the source data directly.
 */

/** A single titled column heading in the three-column body. */
export type ColumnTitle = "THE LEAD" | "ON THE JOB" | "THE TOOLKIT";

/** Top dateline row: the origin line under the masthead rule. */
export interface Dateline {
  origin: string;
}

/** The centered nameplate. */
export interface Masthead {
  name: string;
  /** Spaced-caps strapline, e.g. "SOFTWARE ENGINEER · AI AT THE CORE". */
  strapline: string;
}

/** An optional real image; when absent the crossed placeholder is shown. */
export interface EditorialImage {
  src: string;
  alt: string;
}

/** "THE LEAD" column content. */
export interface Lead {
  tagline: string;
  /** Portrait image; falls back to a labeled placeholder when missing. */
  portrait: EditorialImage | null;
  /** Extra candid photos shown as thumbnails under the portrait. */
  gallery: EditorialImage[];
  /** Body copy paragraphs (already split). */
  body: string[];
  /** The handwritten accent pull-quote. */
  micro: string;
}

/** A role in the "ON THE JOB" column. */
export interface JobEntry {
  company: string;
  role: string;
  when: string;
  /** External company link; absent when the role has no public URL. */
  url?: string;
}

/** A schooling entry under "ON THE JOB". */
export interface SchoolEntry {
  school: string;
  degree: string;
}

/** An off-duty pursuit in "THE TOOLKIT" column. */
export interface OffDutyEntry {
  label: string;
  /** Icon key resolved by the OffDutyIcon primitive. */
  icon: OffDutyIconName;
}

/** A contact/profile link rendered as a sketch button. */
export interface LinkEntry {
  label: string;
  url: string;
  /** Icon key resolved by the LinkIcon primitive. */
  icon: LinkIconName;
}

/** A front-page "story" in the SELECTED WORK band. */
export interface WorkStory {
  name: string;
  /** Short description / dek shown under the headline. */
  blurb: string;
  /** Cover image; falls back to a labeled placeholder when missing. */
  image: EditorialImage | null;
  tags: string[];
  /** External project link (repo or live demo); absent when none. */
  url?: string;
}

/** A published article shown on the /writing page. */
export interface WritingEntry {
  title: string;
  blurb: string;
  tags: string[];
  url: string;
}

/** Icon keys for the off-duty list. */
export type OffDutyIconName = "telescope" | "music" | "game" | "trophy";

/** Icon keys for the link buttons. */
export type LinkIconName = "mail" | "link" | "git" | "doc";

/**
 * One labeled section of THE TOOLKIT (e.g. "AI & Agents", "Frontend").
 * `muted` dims the chips; used for the brushing-up languages.
 */
export interface StackSection {
  label: string;
  skills: string[];
  muted?: boolean;
}

/** The tech stack as an ordered list of labeled sections. */
export type Stack = StackSection[];

/**
 * A masonry picture in the FRAMES gallery. `span` lets a tile take two rows so
 * the grid reads as a varied masonry rather than a uniform grid.
 */
export interface Picture {
  src: string;
  alt: string;
  /** Row span (1 = normal, 2 = tall). Drives the masonry rhythm. */
  span: 1 | 2;
  /** Short visible caption (e.g. "Saturn", "Waxing gibbous Moon"). */
  caption: string;
}

/**
 * A nav-rail entry. In-page items jump to a section anchor (`href` like
 * "#work"); external items open a URL in a new tab. `hint` is the optional
 * keyboard-shortcut chip shown on the right.
 */
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  hint?: string;
}

/** A game in the OFF DUTY page's cover-art grid. */
export interface Game {
  name: string;
  /** Short playing tag, e.g. "Competitive", "Grinding". */
  status: string;
  /** "Developer · Genre · Year" credit line shown under the title. */
  meta: string;
  /** Portrait cover art (~2:3). */
  cover: EditorialImage;
}

/** The complete editorial front-page view-model. */
export interface EditorialContent {
  /** Left nav-rail items. */
  nav: NavItem[];
  dateline: Dateline;
  masthead: Masthead;
  lead: Lead;
  jobs: JobEntry[];
  schooling: SchoolEntry[];
  stack: Stack;
  offDuty: OffDutyEntry[];
  links: LinkEntry[];
  /** The three featured front-page stories. */
  work: WorkStory[];
  /** The full project catalog for the dedicated /work page. */
  allWork: WorkStory[];
  /** Games for the /off-duty page. */
  games: Game[];
  /** Masonry pictures for the /frames page. */
  pictures: Picture[];
  /** Published articles for the /writing page. */
  writing: WritingEntry[];
  /** Link to the full Medium profile. */
  writingProfileUrl: string;
}
