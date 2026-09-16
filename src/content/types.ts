/** A measured outcome. Only ever use figures the project genuinely supports. */
export type Metric = {
  value: string;
  label: string;
};

/** One labelled layer of the system — Architecture, AI Layer, Platform, … */
export type SpecBlock = {
  label: string;
  items: string[];
};

/**
 * A lead case study: the long-form treatment, broken out by layer, with
 * measured outcomes where they exist.
 */
export type CaseStudy = {
  eyebrow: string;
  id: string;
  name: string;
  client: string;
  kicker: string;
  category: string;
  /** Empty when the delivery year is not being published. */
  year: string;
  status: string;
  summary: string;
  problem: string;
  solution: string;
  /**
   * Cover image, as a path under /public — e.g. "/projects/beauty.png".
   * Leave undefined to fall back to the drawn ProjectArt diagram.
   */
  image?: string;
  /** Required whenever `image` is set. Describes the shot for screen readers. */
  imageAlt?: string;
  specs: SpecBlock[];
  /** Empty when the project has no figures that can be stated honestly. */
  metrics: Metric[];
  /** Where and when the metrics were measured. Required whenever metrics exist. */
  metricsNote: string;
  result: string;
  /**
   * Confidential engagements have no public links. This line explains the
   * absence rather than leaving a gap — e.g. "Name withheld under NDA".
   */
  access?: string;
  liveLabel: string;
  caseStudyLabel: string;
  /** Empty hides the button; both empty hides the row. */
  liveHref: string;
  caseStudyHref: string;
};
