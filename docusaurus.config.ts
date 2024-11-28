import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const url = process.env["SITE_URL"] || "https://klogging.io";

const config: Config = {
  title: 'Klogging',
  tagline: 'Easy and powerful logging from Kotlin with coroutine support',
  favicon: 'img/favicon.ico',

  url: url,
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'klogging', // Usually your GitHub org/user name.
  projectName: 'klogging.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/klogging.svg',
    navbar: {
      title: "Klogging",
      logo: {
        alt: "Klogging Logo",
        src: "img/klogging.svg",
      },
      items: [
        {
          type: "doc",
          docId: "get-started",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://dokka.klogging.io",
          label: "Dokka",
          position: "right",
        },
        {
          href: "https://github.com/klogging/klogging",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Get started",
              to: "/docs/get-started",
            },
            {
              label: "Klogging with Spring Boot",
              to: "/docs/java/spring-boot",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discussions",
              href: "https://github.com/klogging/klogging/discussions",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/klogging_io",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Klogging source",
              href: "https://github.com/klogging/klogging",
            },
            {
              label: "Klogging Dokka",
              href: "https://dokka.klogging.io",
            },
            {
              label: "Website source",
              href: "https://github.com/klogging/klogging.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Michael Strasser. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["java"]
    },
    algolia: {
      appId: "J62BLWP5Z6",
      apiKey: "6b12ec4662942998a33bd7a3090dcfd3",
      indexName: "klogging",
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
