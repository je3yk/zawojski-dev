export type StackEntry = { key: string; value: string | string[] };

export const profile = {
  id: "00",
  name: "Jędrzej Zawojski",
  role: "Full Stack Web Developer",
  location: "Based in Wroclaw, Poland, open to remote work.",
  bio: "I combine years of engineering experience with the speed of the AI era to build end-to-end web and mobile applications, from spec to deployment.",
  socials: [
    { label: "GitHub", href: "https://github.com/je3yk" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jedrzej-zawojski" },
    { label: "Email", href: "mailto:jedrzej.zawojski95@gmail.com" },
  ],
};

export const stack: StackEntry[] = [
  { key: "ui", value: "React" },
  { key: "lang", value: "TypeScript" },
  { key: "backend", value: "Node.js" },
  { key: "mobile", value: "React Native · Expo" },
  { key: "frameworks", value: ["Next.js", "TanStack"] },
  { key: "ai", value: ["Claude", "Cursor", "Codex"] },
];
