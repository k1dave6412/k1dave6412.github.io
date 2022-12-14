// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "S.Feng 技術手扎",
  tagline: "Create by Dinosaurs",
  url: "https://docusaurus.k1dav.fun",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "k1dave6412", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant"],
  },

  themes: [
    "@docusaurus/theme-live-codeblock",
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "G-93B6F2CSRB",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "S.Feng 技術手扎",
        logo: {
          alt: "S.Feng 技術手扎",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Wiki",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/k1dave6412",
            label: "My GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docusaurus",
            items: [
              {
                label: "Docusaurus.io",
                href: "https://docusaurus.io/",
              },
              {
                label: "Docusaurus Docs",
                href: "https://docusaurus.io/docs",
              },
            ],
          },
          {
            title: "Topic",
            items: [
              {
                label: "標籤的家",
                to: "/blog/tags",
              },
            ],
          },
          {
            title: "About Me",
            items: [
              {
                label: "Work At APMIC",
                href: "http://www.ap-mic.com/",
              },
              {
                label: "APMIC Discord",
                href: "https://discord.gg/An6nENWA",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/fengjie-sung-243984179/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} S.Feng, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "UJHZFVFSAP", // The application ID provided by Algolia
        apiKey: "08c82872983a8150c0783fbf5ac59e99", // Public API key: it is safe to commit it
        indexName: "k1dave6412.github.io",
        contextualSearch: true, // Optional: see doc section below
        searchPagePath: "search", // Optional: path for search page that enabled by default (`false` to disable it)
      },
    }),
};

module.exports = config;
