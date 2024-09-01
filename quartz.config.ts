import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Kostandin's Blog",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "umami",
      websiteId: "ce44df40-ffdd-44fa-bdb0-f54031f0f73c",
    },
    baseUrl: "kostand.in",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Avenir",
        body: "Avenir",
        // header: "Montserrat",
        // body: "Montserrat",
        // header: "IBM Plex Mono",
        // body: "IBM Plex Mono",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f1ea", // Warmer light color
          lightgray: "#dcccb1", // Warmer light gray
          gray: "#b09e8f", // Warmer gray
          darkgray: "#735f52", // Warmer dark gray
          dark: "#4a4138", // Warmer dark color
          secondary: "#382c26", // Slightly warmer secondary color
          tertiary: "#8c7d70", // Warmer tertiary color
          highlight: "#f0e7d8", // Warmer highlight color
        },
        darkMode: {
          light: "#2c2b2b", // Warmer light color
          lightgray: "#5d5c5c", // Warmer light gray
          gray: "#a67c69", // Warmer gray
          darkgray: "#e4d8d3", // Warmer dark gray
          dark: "#fff4ec", // Warmer dark color
          secondary: "#f0e7d8", // Slightly warmer secondary color
          tertiary: "#c5b8b0", // Warmer tertiary color
          highlight: "rgba(191, 163, 141, 0.15)", // Warmer highlight color
        },
        // lightMode: {
        //   light: "#faf8f8",
        //   lightgray: "#e5e5e5",
        //   gray: "#b8b8b8",
        //   darkgray: "#4e4e4e",
        //   dark: "#2b2b2b",
        //   secondary: "#000",
        //   tertiary: "#aaa",
        //   highlight: "#efefef",
        // },
        // darkMode: {
        //   light: "#161618",
        //   lightgray: "#393639",
        //   gray: "#888",
        //   darkgray: "#d4d4d4",
        //   dark: "#fff",
        //   secondary: "#efefef",
        //   tertiary: "#afafaf",
        //   highlight: "rgba(143, 159, 169, 0.15)",
        // },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      // Plugin.CreatedModifiedDate({
      //   // you can add 'git' here for last modified from Git
      //   // if you do rely on git for dates, ensure defaultDateType is 'modified'
      //   priority: ["frontmatter", "filesystem"],
      // }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
