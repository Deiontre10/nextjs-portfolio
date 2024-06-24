import { Icons } from "@/components/icons";

export const DATA = {
  name: "Travontaz Lowry",
  initials: "TL",
  url: "",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer & Entrepreneur. I love building things and helping people.",
  summary:
    "Software engineer by day and entrepreneur by night. am currently working on a few side projects and I am always looking for new opportunities to learn and grow.",
  avatarUrl: "/me.jpg",
  skills: ["React", "Next.js", "Typescript", "Node.js", "Postgres", "Remix"],
  contact: {
    email: "travontazlowry@gmail.com",
    tel: "704-***-****",
    social: {
      GitHub: {
        url: "https://github.com/deiontre10",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/travontazlowry/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/",
        icon: Icons.x,
      },
      Youtube: {
        url: "https://youtube.com/c/deiontre10",
        icon: Icons.youtube,
      },
    },
  },

  work: [
    {
      company: "Onward Platformss",
      href: "https://www.onwardplatforms.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/onward.jpg",
      start: "July 2024",
      end: "Present",
      description:
        "I am currently working as a software engineer at Onward Platforms.",
    },
  ],
  education: [
    {
      school: "UNCC",
      href: "https://uncc.edu",
      degree: "Computer Science",
      logoUrl: "/uncc-logo.png",
      start: "2012",
      end: "2014",
    },
  ],
  projects: [
    {
      title: "Decadent AI",
      href: "https://decadent-ai.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description: "I built a SaaS platform that utilizes chatGPT API.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://decadent-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
  ],
  hackathons: [
    {
      title: "Hackathon 1",
      href: "https://hackathon1.com",
      dates: "Jan 2024",
      description: "I built a SaaS platform that utilizes chatGPT API.",
      technologies: ["Next.js", "Typescript", "PostgreSQL", "Prisma"],
      links: [
        {
          type: "Website",
          href: "https://hackathon1.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;
