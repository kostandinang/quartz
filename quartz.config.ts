import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "/Kostandin Ang.",
    enableSPA: false,
    enablePopovers: true,
    analytics: {
      provider: "umami",
      websiteId: "ce44df40-ffdd-44fa-bdb0-f54031f0f73c",
    },
    locale: "en-US",
    baseUrl: "kostand.in",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // header: "DM Mono",
        // body: "DM Mono",
        // title: "DM Mono",
        header: "Cormorant Garamond",
        body: "Cormorant Garamond",
        title: "Cormorant Garamond",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f5", // Softer, more neutral warm white
          lightgray: "#e8ddd4", // Better contrast warm light gray
          gray: "#a89080", // More balanced warm gray
          darkgray: "#6b5b4f", // Improved contrast warm dark gray
          dark: "#3d342b", // Richer, more readable dark brown
          secondary: "#2c1810", // Deep warm brown for emphasis
          tertiary: "#8b7355", // Refined warm tertiary
          highlight: "#f5ede1", // Subtle warm highlight
          textHighlight: "#f5ede1", // Match tag background color
        },
        darkMode: {
          light: "#1a1918", // Deeper, warmer dark background
          lightgray: "#2f2d2c", // Better contrast warm dark gray
          gray: "#b8a082", // Warmer, more vibrant gray
          darkgray: "#d4c4b0", // Softer warm light text
          dark: "#f7f0e8", // Warm white for primary text
          secondary: "#e8dcc6", // Warm secondary text
          tertiary: "#c9b896", // Balanced warm tertiary
          highlight: "rgba(184, 160, 130, 0.2)", // More visible warm highlight
          textHighlight: "rgba(184, 160, 130, 0.2)", // Match tag background color
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
        //   textHighlight: "#efefef",
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
        //   textHighlight: "#efefef",
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
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
