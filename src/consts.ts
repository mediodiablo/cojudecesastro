// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  }
}

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
}

export const siteConfig: Config = {
  title: "cojudeces.com",
  description: "descubre al cojudazo que llevas dentro",
  lang: "es",
  profile: {
    author: "mediodiablo",
    description: "miembro fundador, managing partner, principal contribuyente"
  }
}

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const socialLinks: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/mediodiablo/cojudecesastro",
  },
  /**{
    icon: "mdi:linkedin",
    friendlyName: "LinkedIn",
    link: "#",
  },*/
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:mediodiablo@cojudeces.com",
  },
  {
    icon: "mdi:rss",
    friendlyName: "rss",
    link: "/rss.xml"
  }
];

export const NAV_LINKS: Array<{ title: string, path: string }> = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "escuadron",
    path: "/about",
  },
  {
    title: "blog",
    path: "/blog",
  },
  /**
  {
    title: "problemas técnicos",
    path: '/projects'
  },*/
  {
    title: "arch.chivos",
    path: "/archive",
  }
];
