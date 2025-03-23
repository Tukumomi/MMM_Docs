// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MofuMofuMotion',
  tagline: '【VRChat用/MA前提】　けもみみ/尻尾を自由に動かすギミック',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/MMM_Docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Tukumomi', // Usually your GitHub org/user name.
  projectName: 'MMM_Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
   [
     '@docusaurus/preset-classic',
     /** @type {import('@docusaurus/preset-classic').Options} */
     ({
       docs: {
         sidebarPath: require.resolve('./sidebars.js'),
         // Please change this to your repo.
         editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
       },
       gtag: {
         trackingID: '-',
         anonymizeIP: true,
       },
       blog: {
         showReadingTime: true,
         // Please change this to your repo.
         editUrl:
           'https://github.com/facebook/docusaurus/edit/main/website/blog/',
       },
       theme: {
         customCss: require.resolve('./src/css/custom.css'),
       },
     }),
   ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MofuMofuMotion',
        //logo: {
        //  alt: 'My Site Logo',
        //  src: 'img/logo.svg',
        //},
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '説明書',
          },
          {
            href: 'https://momiji-maples.booth.pm/',
            label: 'Booth',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'link',
            items: [
              /**{
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },*/
              {
                label: 'X(VR関連)',
                href: 'https://x.com/Tukumomi_VR',
              },
            ],
          },
          /**
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },*/
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
