const url = process.env["SITE_URL"] || "https://klogging.io";

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Klogging",
  tagline: "Easy and powerful logging from Kotlin with coroutine support",
  url: url,
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "klogging",
  projectName: "klogging.io",
  trailingSlash: false,
  themeConfig: {
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
      additionalLanguages: ["kotlin", "java"],
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      appId: "J62BLWP5Z6",
      apiKey: "6b12ec4662942998a33bd7a3090dcfd3",
      indexName: "klogging",
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
