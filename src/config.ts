import type { WebsiteConfig, MenuLink } from 'types';

export const defaultWebsiteConfig: WebsiteConfig = {
  siteURL: new URL('http://localhost:4321/'),
  siteName: 'Astro starter Template',
  title: 'Default Site Title',
  titleSuffix: 'Astro Starter Template',
  description: 'A starter template for Astro projects.',
  tags: [
    'Astro',
    'TypeScript',
    'Tailwind',
    'Prettier',
    'ESLint',
    'Web development',
  ],
  htmlLang: 'en',
  locale: 'en-US',
  alternateLocales: [],
  author: {
    type: 'Organization',
    displayName: 'atkinson.digital',
    profileURL: new URL(
      'https://www.facebook.com/profile.php?id=61567199167523'
    ),
  },
  publisher: {
    type: 'Organization',
    displayName: 'atkinson.digital',
    profileURL: new URL(
      'https://www.facebook.com/profile.php?id=61567199167523'
    ),
  },
  ogImage: {
    fileName: 'assets/images/og-image.jpg',
    imageType: 'image/jpeg',
    width: 1200,
    height: 630,
    alt: 'The default Open Graph image',
  },
  twitterImage: {
    fileName: 'assets/images/twitter-image.jpg',
    imageType: 'image/jpeg',
    width: 1200,
    height: 600,
    alt: 'The default X (Twitter) social image',
  },
  socialMedia: {
    facebook: {
      platformName: 'Facebook',
      profileURL: new URL(
        'https://www.facebook.com/profile.php?id=61567199167523'
      ),
    },
    twitter: {
      platformName: 'X',
      username: '@username',
      profileURL: new URL('https://x.com/kinson_digital'),
    },
  },
};

export const mainNavMenuLinks: MenuLink[] = [
  { linkText: 'Home', href: '/' },
  { linkText: 'About', href: '/' },
  { linkText: 'Blog', href: '/' },
  { linkText: 'Contact', href: '/' },
];
