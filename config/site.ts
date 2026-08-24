/**
 * Single source of truth for identity, links and SEO strings.
 * Anything user-facing that appears in more than one place lives here.
 */
export const site = {
  name: 'Çağrı Bilginer',
  givenName: 'Çağrı',
  familyName: 'Bilginer',
  title: 'Çağrı Bilginer — Software Engineering Portfolio',
  description:
    'Software engineering portfolio of Çağrı Bilginer — Computer Engineering graduate of Koç University, spanning full-stack development, Unity/C# game development, and mobile apps. Explore it as a 2D physics playground, or as a plain list.',
  url: 'https://cagribilginer.github.io',
  email: 'cagribilginer.dev@gmail.com',
  resume: '/assets/Cagri_Bilginer_CV.pdf',
  location: 'İstanbul, Sarıyer',
  social: {
    github: 'https://github.com/cagribilginer',
    linkedin: 'https://www.linkedin.com/in/cagribilginer',
    instagram: 'https://www.instagram.com/cagri.bilginer',
  },
} as const;

/** FormSubmit works from a fully static export — no server route required. */
export const formSubmitAjaxUrl = `https://formsubmit.co/ajax/${site.email}`;

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: site.social.github, handle: 'cagribilginer' },
  { label: 'LinkedIn', href: site.social.linkedin, handle: 'cagribilginer' },
  { label: 'Instagram', href: site.social.instagram, handle: 'cagri.bilginer' },
];
