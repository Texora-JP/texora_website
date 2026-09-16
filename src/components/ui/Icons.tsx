import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

/* ---------------- Service icons ---------------- */

export function IconAI(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4.2v15.6" />
      <path d="M12 5.2A2.7 2.7 0 0 0 7.1 6.8 2.6 2.6 0 0 0 5.2 11a2.7 2.7 0 0 0 .5 4.3A2.6 2.6 0 0 0 9 19.4a2.6 2.6 0 0 0 3-1.1" />
      <path d="M12 5.2A2.7 2.7 0 0 1 16.9 6.8 2.6 2.6 0 0 1 18.8 11a2.7 2.7 0 0 1-.5 4.3A2.6 2.6 0 0 1 15 19.4a2.6 2.6 0 0 1-3-1.1" />
      <path d="M8.4 9.4h1.8M13.8 9.4h1.8M8.4 14h1.6M14 14h1.6" />
    </svg>
  );
}

export function IconCode(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m8.6 8.4-4.2 3.6 4.2 3.6" />
      <path d="m15.4 8.4 4.2 3.6-4.2 3.6" />
      <path d="m13.4 5.6-2.8 12.8" />
    </svg>
  );
}

export function IconMobile(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="2.6" width="10" height="18.8" rx="2.4" />
      <path d="M10.8 18.4h2.4" />
    </svg>
  );
}

export function IconCube(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.8 20.2 7v10L12 21.2 3.8 17V7Z" />
      <path d="M3.8 7 12 11.4 20.2 7" />
      <path d="M12 11.4v9.8" />
    </svg>
  );
}

/* ---------------- Stat icons ---------------- */

export function IconMembers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8.4" r="3.1" />
      <path d="M3.4 19.4a5.8 5.8 0 0 1 11.2 0" />
      <path d="M16.2 6a3.1 3.1 0 0 1 0 5.6" />
      <path d="M17.6 14.6a5.8 5.8 0 0 1 3 4.8" />
    </svg>
  );
}

export function IconGlobe(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M3.4 12h17.2" />
      <path d="M12 3.4c2.3 2.4 3.5 5.4 3.5 8.6S14.3 18.2 12 20.6C9.7 18.2 8.5 15.2 8.5 12S9.7 5.8 12 3.4Z" />
    </svg>
  );
}

export function IconImpact(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.6 19.4V13" />
      <path d="M9.6 19.4V8.2" />
      <path d="M14.6 19.4v-8" />
      <path d="M19.4 19.4V4.6" />
    </svg>
  );
}

/* ---------------- Material icons ---------------- */

export function IconPdf(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13.6 2.8H7.4a2 2 0 0 0-2 2v14.4a2 2 0 0 0 2 2h9.2a2 2 0 0 0 2-2V7.8Z" />
      <path d="M13.6 2.8v5h5" />
      <path d="M8.8 14.4h6.4M8.8 17.2h4" />
    </svg>
  );
}

export function IconCv(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.4" y="4.4" width="17.2" height="15.2" rx="2" />
      <circle cx="9" cy="10.4" r="2.1" />
      <path d="M5.8 16.6a3.4 3.4 0 0 1 6.4 0" />
      <path d="M14.8 9.6h3.6M14.8 13h3.6" />
    </svg>
  );
}

export function IconGithub(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M12 1.8a10.2 10.2 0 0 0-3.23 19.88c.51.1.7-.22.7-.49v-1.9c-2.84.62-3.44-1.2-3.44-1.2-.47-1.19-1.14-1.5-1.14-1.5-.93-.64.07-.62.07-.62 1.03.07 1.57 1.06 1.57 1.06.91 1.57 2.4 1.12 2.98.86.09-.66.36-1.12.65-1.38-2.27-.26-4.65-1.14-4.65-5.06 0-1.12.4-2.03 1.05-2.75-.1-.26-.46-1.3.1-2.71 0 0 .86-.28 2.81 1.05a9.7 9.7 0 0 1 5.12 0c1.95-1.33 2.8-1.05 2.8-1.05.57 1.41.21 2.45.11 2.71.65.72 1.05 1.63 1.05 2.75 0 3.93-2.39 4.8-4.66 5.05.37.32.7.94.7 1.9v2.81c0 .27.18.6.7.49A10.2 10.2 0 0 0 12 1.8Z" />
    </svg>
  );
}

export function IconCases(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.4" y="6.4" width="17.2" height="13.2" rx="2" />
      <path d="M8.8 6.4V5a1.6 1.6 0 0 1 1.6-1.6h3.2A1.6 1.6 0 0 1 15.2 5v1.4" />
      <path d="M3.4 11.8h17.2" />
    </svg>
  );
}

/* ---------------- UI icons ---------------- */

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.8 12h14" />
      <path d="m13.4 6.6 5.4 5.4-5.4 5.4" />
    </svg>
  );
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8.6 7H17v8.4" />
    </svg>
  );
}

export function IconSun(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7" />
    </svg>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 14.4A8.4 8.4 0 0 1 9.6 4a8.4 8.4 0 1 0 10.4 10.4Z" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.8 7.6h16.4M3.8 12h16.4M3.8 16.4h16.4" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6.4 6.4 11.2 11.2M17.6 6.4 6.4 17.6" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.8" y="5.2" width="18.4" height="13.6" rx="2.2" />
      <path d="m3.6 7 7.3 5.3a2 2 0 0 0 2.2 0L20.4 7" />
    </svg>
  );
}

export function IconLinkedin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.25h4v11.25H3V9.25Zm6.5 0h3.83v1.54h.05a4.2 4.2 0 0 1 3.78-2.08c4.04 0 4.79 2.66 4.79 6.12v5.67h-4v-5.03c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65v5.12h-3.99V9.25Z" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s6.4-5.6 6.4-10.2a6.4 6.4 0 0 0-12.8 0C5.6 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.6" r="2.4" />
    </svg>
  );
}

export function IconLock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4.6" y="10.4" width="14.8" height="10.4" rx="2.2" />
      <path d="M8.2 10.4V7.6a3.8 3.8 0 0 1 7.6 0v2.8" />
      <path d="M12 14.4v2.4" />
    </svg>
  );
}

/* ---------------- Technology marks ----------------
   Geometric interpretations, not official brand assets — swap in the real
   logos before launch if the trademark owners' guidelines allow it.       */

export function MarkReact(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} aria-hidden focusable="false" {...props}>
      <circle cx="12" cy="12" r="1.9" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9.2" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9.2" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.2" ry="3.6" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function MarkNext(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden focusable="false" {...props}>
      <circle cx="12" cy="12" r="9.4" fill="currentColor" />
      <path d="M8.6 16.4V7.6l7.2 9.2M15.2 7.6v6.2" stroke="var(--surface)" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

export function MarkTypeScript(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden focusable="false" {...props}>
      <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="3" fill="currentColor" />
      <path d="M7 10.4h5M9.5 10.4v7.1" stroke="var(--surface)" strokeWidth={1.5} strokeLinecap="round" />
      <path d="M18 11c-.5-.6-1.3-.9-2.1-.8-1.1.1-1.8.8-1.8 1.7 0 2 3.9 1.3 3.9 3.4 0 1.1-1 1.9-2.3 1.9a2.9 2.9 0 0 1-2.3-1" stroke="var(--surface)" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}

export function MarkPython(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round" aria-hidden focusable="false" {...props}>
      <path d="M11.9 2.8c-2.6 0-4.3.8-4.3 2.6v2.4h4.6v.8H5.9c-1.9 0-3.1 1.4-3.1 3.6s1 3.6 2.9 3.6h1.4v-2.3c0-1.9 1.6-3.3 3.5-3.3h3.7c1.6 0 2.9-1.2 2.9-2.8V5.4c0-1.6-1.6-2.6-4.1-2.6Z" />
      <path d="M12.1 21.2c2.6 0 4.3-.8 4.3-2.6v-2.4h-4.6v-.8h6.3c1.9 0 3.1-1.4 3.1-3.6s-1-3.6-2.9-3.6h-1.4v2.3c0 1.9-1.6 3.3-3.5 3.3H9.7c-1.6 0-2.9 1.2-2.9 2.8v2c0 1.6 1.6 2.6 4.1 2.6Z" />
    </svg>
  );
}

export function MarkFastApi(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden focusable="false" {...props}>
      <circle cx="12" cy="12" r="9.4" fill="currentColor" />
      <path d="M12.8 5.6 7.4 13h3.9l-.7 5.4 5.6-7.6h-4.1Z" fill="var(--surface)" />
    </svg>
  );
}

export function MarkNode(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round" aria-hidden focusable="false" {...props}>
      <path d="M12 2.6 20.3 7.3v9.4L12 21.4 3.7 16.7V7.3Z" />
      <path d="M12.9 9.4v5.4c0 .9-.7 1.4-1.7 1.4-.9 0-1.6-.4-1.9-1.2" strokeLinecap="round" />
    </svg>
  );
}

export function MarkPostgres(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" aria-hidden focusable="false" {...props}>
      <ellipse cx="12" cy="6.4" rx="7.4" ry="3.2" />
      <path d="M4.6 6.4v11.2c0 1.8 3.3 3.2 7.4 3.2s7.4-1.4 7.4-3.2V6.4" />
      <path d="M4.6 12c0 1.8 3.3 3.2 7.4 3.2s7.4-1.4 7.4-3.2" />
    </svg>
  );
}

export function MarkSolidity(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M8.9 2.6h6.2l-2.6 4.6H6.3Z" opacity="0.55" />
      <path d="M15.1 21.4H8.9l2.6-4.6h6.2Z" opacity="0.55" />
      <path d="m6.3 7.2 6.2-.1-3 5.3H3.3Z" opacity="0.85" />
      <path d="m17.7 16.8-6.2.1 3-5.3h6.2Z" opacity="0.85" />
    </svg>
  );
}

export function MarkRust(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round" aria-hidden focusable="false" {...props}>
      <circle cx="12" cy="12" r="6.6" />
      <path d="M12 2.9v1.8M12 19.3v1.8M2.9 12h1.8M19.3 12h1.8M5.6 5.6l1.3 1.3M17.1 17.1l1.3 1.3M18.4 5.6l-1.3 1.3M6.9 17.1l-1.3 1.3" strokeLinecap="round" />
      <path d="M9.9 15.4V8.6h3a1.9 1.9 0 0 1 0 3.8h-3l3.4 3" strokeLinecap="round" />
    </svg>
  );
}

export function MarkAws(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" aria-hidden focusable="false" {...props}>
      <path d="M4.4 8.4v4.4c0 .9.6 1.5 1.5 1.5s1.6-.6 1.6-1.6V8.4" />
      <path d="m9.6 8.4 1.7 6 1.6-4.4 1.6 4.4 1.7-6" />
      <path d="M2.8 18.2c3.2 1.8 6.4 2.6 9.4 2.6s5.9-.8 8.6-2.4" />
      <path d="M18.4 16.8c1.6-.5 3-.4 3.1.2.1.6-.8 1.6-2 2.3" />
    </svg>
  );
}

export function MarkDocker(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round" aria-hidden focusable="false" {...props}>
      <rect x="4.2" y="11.4" width="3" height="2.8" />
      <rect x="7.7" y="11.4" width="3" height="2.8" />
      <rect x="11.2" y="11.4" width="3" height="2.8" />
      <rect x="7.7" y="8.2" width="3" height="2.8" />
      <rect x="11.2" y="8.2" width="3" height="2.8" />
      <rect x="11.2" y="5" width="3" height="2.8" />
      <path d="M2.6 14.6c0 3.4 2.4 5.6 6.4 5.6 5 0 8.8-2.4 10.2-6.8 1.4.6 2.6.2 3-1-1.1-.8-2.4-.8-3.4-.2" strokeLinecap="round" />
    </svg>
  );
}

export function MarkStripe(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden focusable="false" {...props}>
      <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="4" fill="currentColor" />
      <path
        d="M15.2 9.4c-.8-.5-1.7-.7-2.6-.7-1.5 0-2.4.6-2.4 1.5 0 2.2 5.2 1.3 5.2 4.3 0 1.6-1.4 2.6-3.5 2.6a7 7 0 0 1-3-.7"
        stroke="var(--surface)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const techMarks: Record<string, (props: IconProps) => React.ReactElement> = {
  React: MarkReact,
  "Next.js": MarkNext,
  TypeScript: MarkTypeScript,
  Python: MarkPython,
  FastAPI: MarkFastApi,
  "Node.js": MarkNode,
  PostgreSQL: MarkPostgres,
  Stripe: MarkStripe,
  Solidity: MarkSolidity,
  Rust: MarkRust,
  AWS: MarkAws,
  Docker: MarkDocker,
};

export const serviceIcons: Record<string, (props: IconProps) => React.ReactElement> = {
  ai: IconAI,
  code: IconCode,
  mobile: IconMobile,
  cube: IconCube,
};

export const statIcons: Record<string, (props: IconProps) => React.ReactElement> = {
  members: IconMembers,
  globe: IconGlobe,
  impact: IconImpact,
};

export const materialIcons: Record<string, (props: IconProps) => React.ReactElement> = {
  pdf: IconPdf,
  cv: IconCv,
  github: IconGithub,
  cases: IconCases,
};
