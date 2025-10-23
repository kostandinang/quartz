# Copilot Instructions for Quartz v4

## Project Overview
Quartz v4 is a modular, extensible static site generator for publishing digital gardens and notes as a website. The architecture is plugin-driven, with a focus on end-user customization and ease of use. See [docs](https://quartz.jzhao.xyz/) for full details.

## Key Architectural Concepts

### Content Processing Pipeline
The core architecture follows a 3-stage pipeline: **Parse → Filter → Emit**
- **Parse** (`quartz/processors/parse.ts`): Markdown → AST → Processed Content using unified.js
- **Filter** (`quartz/processors/filter.ts`): Content filtering (drafts, private pages)
- **Emit** (`quartz/processors/emit.ts`): Generate final HTML, assets, and static resources

### Plugin System Architecture
Plugins are the primary extension mechanism with three distinct types:
- **Transformers** (`quartz/plugins/transformers/`): Modify content during parsing (e.g., `FrontMatter`, `ObsidianFlavoredMarkdown`, `SyntaxHighlighting`)
- **Filters** (`quartz/plugins/filters/`): Determine which content gets published (e.g., `RemoveDrafts`)
- **Emitters** (`quartz/plugins/emitters/`): Generate output files (e.g., `ContentPage`, `TagPage`, `Assets`)

Each plugin type implements specific interfaces defined in `quartz/plugins/types.ts`. Plugins can inject external resources (CSS/JS) via `externalResources` function.

### Configuration Architecture
- **Main Config** (`quartz.config.ts`): Site metadata, theme, plugins, build options
- **Layout Config** (`quartz.layout.ts`): UI component arrangement for different page types
- **Component System** (`quartz/components/`): React-based UI components with TypeScript

## Developer Workflows

### Essential Commands
- **Development:** `npm start` (build + serve with live reload via WebSocket)
- **Production Build:** `npx quartz build`
- **Documentation:** `npm run docs` (serves the docs/ folder)
- **Code Quality:** `npm run check` (TypeScript + Prettier), `npm run format`
- **Performance:** `npm run profile` (0x profiling in prof/ directory)

### Build System Details
- **Entry Point:** `quartz/build.ts` orchestrates the entire build process
- **CLI Interface:** `quartz/cli/handlers.js` (JavaScript, not TypeScript) handles CLI commands
- **Incremental Builds:** Supported via file watching with chokidar
- **Live Reload:** WebSocket server injected during development builds

### Plugin Development Pattern
1. Create plugin in appropriate `quartz/plugins/{transformers|filters|emitters}/` directory
2. Export from `quartz/plugins/{type}/index.ts`
3. Register in `quartz.config.ts` plugins array
4. Implement required interface from `quartz/plugins/types.ts`

## Project-Specific Conventions

### File Organization
- **User Content:** `content/` directory (Markdown files)
- **Build Output:** `public/` directory (generated HTML/assets)
- **Core Logic:** `quartz/` directory (TypeScript-first)
- **Configuration:** Root-level `.ts` files (`quartz.config.ts`, `quartz.layout.ts`)

### Component Layout System
Components are arranged in layout slots defined in `quartz.layout.ts`:
- **Shared Layout:** `sharedPageComponents` (head, header, footer)
- **Content Pages:** `defaultContentPageLayout` (beforeBody, left, right)
- **List Pages:** `defaultListPageLayout` (for tags, folders)

Components support conditional rendering via `ConditionalRender` wrapper.

### Theme and Styling
- **CSS Architecture:** SCSS in `quartz/styles/` compiled via esbuild-sass-plugin
- **Theme Configuration:** Nested `theme` object in `quartz.config.ts` with `colors`, `typography`, `fontOrigin`
- **Component Styling:** Components can inject CSS via `externalResources`

### Content Processing Patterns
- **Path Handling:** Use `FilePath` and `FullSlug` types from `quartz/util/path.ts`
- **Content Metadata:** Frontmatter processed by `FrontMatter` transformer
- **Link Resolution:** `CrawlLinks` transformer handles internal link resolution
- **Asset Pipeline:** Static assets handled by `Assets` and `Static` emitters

## Integration Points

### Adding Custom Functionality
- **New Plugin:** Extend `QuartzTransformerPlugin`, `QuartzFilterPlugin`, or `QuartzEmitterPlugin`
- **UI Component:** Create in `quartz/components/` and reference in layout config
- **Static Resources:** Use `externalResources` function to inject CSS/JS
- **Content Processing:** Hook into unified.js pipeline via `markdownPlugins` or `htmlPlugins`

### Performance Considerations
- **Build Optimization:** Use `--concurrency` flag for parallel processing
- **Resource Injection:** Static resources are concatenated and minified
- **Incremental Builds:** Only changed files are reprocessed in watch mode
- **Profiling:** Use `npm run profile` to generate flame graphs in `prof/`

## Key Files Reference
- **Core Build:** `quartz/build.ts`, `quartz/processors/`
- **Plugin Types:** `quartz/plugins/types.ts`
- **Configuration:** `quartz.config.ts`, `quartz.layout.ts`
- **CLI Commands:** `quartz/cli/handlers.js`
- **Component System:** `quartz/components/`, `quartz/components/types.ts`

For comprehensive documentation, see [official docs](https://quartz.jzhao.xyz/) and inline code comments.
