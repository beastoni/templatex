const name = "onicodex/oni";
const url = "https://onicodex.com";
const ogImage = "https://onicodex.com/og.jpg";
const description = "This a template project for me:)";
const links = {
  twitter: "https://twitter.com/onicodex",
  github: "https://github.com/onicodex",
};
const title = {
  default: name,
  template: `%s - ${name}`,
};
const metadataBase = new URL(url);
const keywords = ["Next.js", "React", "Tailwind CSS", "RSC"];
const authors = [
  {
    name,
    url,
  },
];
const openGraph = {
  type: "website",
  locale: "en_US",
  url,
  title: name,
  description,
  siteName: name,
  images: [
    {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: name,
    },
  ],
};
const twitter = {
  card: "summary_large_image",
  title: name,
  description,
  images: [ogImage],
  creator: name,
};
const icons = {
  icon: "/favicon.ico",
  shortcut: "/favicon-16x16.png",
  apple: "/apple-touch-icon.png",
};
const manifest = `${url}/site.webmanifest`;

export const siteConfig = {
  title,
  metadataBase,
  description,
  keywords,
  authors,
  creator: name,
  openGraph,
  twitter,
  icons,
  manifest,
  links,
};

export type SiteConfig = typeof siteConfig;
