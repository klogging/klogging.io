const copyright = "Copyright © 2021 Michael Strasser";
const url = process.env["SITE_URL"] || "https://klogging.io";

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Klogging',
    tagline: 'Easy and powerful logging from Kotlin with coroutine support',
    url: url,
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'klogging',
    projectName: 'klogging.io',
    themeConfig: {
        navbar: {
            title: 'Klogging',
            logo: {
                alt: 'Klogging Logo',
                src: 'img/klogging.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'get-started',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    href: 'https://github.com/klogging/klogging.io',
                    label: 'Website source',
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
                            label: 'Get started',
                            to: '/docs/get-started',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discussions',
                            href: 'https://github.com/klogging/klogging/discussions',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/ktlogging',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        // {
                        //     label: 'Blog',
                        //     to: '/blog',
                        // },
                        {
                            label: 'Klogging GitHub',
                            href: 'https://github.com/klogging',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Michael Strasser. Built with Docusaurus.`,
        },
        prism: {
            additionalLanguages: ['kotlin'],
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
