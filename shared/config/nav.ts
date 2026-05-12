export interface NavItem {
  href: string;
  labelKey: string;
}

export const PRIMARY_NAV: NavItem[] = [
  { href: "/", labelKey: "nav.home" },
  { href: "/biz-haqimizda", labelKey: "nav.about" },
  { href: "/katalog", labelKey: "nav.catalog" },
  { href: "/qanday-ishlaymiz", labelKey: "nav.howWeWork" },
  { href: "/blog", labelKey: "nav.blog" },
  { href: "/kontakt", labelKey: "nav.contact" },
];

export const FOOTER_NAV: NavItem[] = [
  { href: "/katalog", labelKey: "footer.links.catalog" },
  { href: "/qanday-ishlaymiz", labelKey: "footer.links.projects" },
  { href: "/kontakt", labelKey: "footer.links.service" },
  { href: "/privacy", labelKey: "footer.links.privacy" },
];
