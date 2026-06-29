/**
 * View-model types for the Editorial Front Page (Direction A).
 *
 * These describe the *shape the layout consumes*, decoupled from the raw
 * `portfolioData` source. The mapping lives in `@/data/editorial` so the
 * presentational components never reach back into the source data directly.
 */

/** A single titled column heading in the three-column body. */
export type ColumnTitle = "THE LEAD" | "ON THE JOB" | "THE TOOLKIT";

/** Top dateline row — the small-caps spans under the masthead rule. */
export interface Dateline {
  publication: string;
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
  /** Cover image; falls back to a labeled placeholder when missing. */
  image: EditorialImage | null;
  tags: string[];
}

/** Icon keys for the off-duty list. */
export type OffDutyIconName = "telescope" | "music" | "game" | "trophy";

/** Icon keys for the link buttons. */
export type LinkIconName = "mail" | "link" | "git" | "doc";

/**
 * The tech stack split into two tiers: `core` is the current daily stack,
 * `familiar` is languages worked in before but not recently (brushing-up).
 */
export interface Stack {
  core: string[];
  familiar: string[];
}

/** The complete editorial front-page view-model. */
export interface EditorialContent {
  dateline: Dateline;
  masthead: Masthead;
  lead: Lead;
  jobs: JobEntry[];
  schooling: SchoolEntry[];
  stack: Stack;
  offDuty: OffDutyEntry[];
  links: LinkEntry[];
  work: WorkStory[];
}
