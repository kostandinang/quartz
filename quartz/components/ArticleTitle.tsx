import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = (props: QuartzComponentProps) => {
  const { fileData, displayClass } = props
  const title = fileData.frontmatter?.title
  const stage = fileData.frontmatter?.stage as string | undefined

  const getStageIcon = (stage:  string | undefined) => {
    switch (stage) {
      case "seed": return { icon: "🌱", title: "Seed – early idea" }
      case "sprout": return { icon: "🌿", title: "Sprout – forming connections" }
      case "bloom": return { icon: "🌳", title: "Bloom – refined and stable" }
      default:
        return null
    }
  }

  const stageData = getStageIcon(stage)

  if (title) {
    return (
      <h1 class={classNames(displayClass, "article-title")}>
        {stageData && (
          <span class="stage-indicator" title={stageData.title}>
            {stageData.icon}
          </span>
        )}
        {title}
      </h1>
    )
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
  display: flex;
  align-items: center;
}

.stage-indicator {
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 1.2em;
  transition: transform 0.2s ease;
}

.stage-indicator:hover {
  transform: scale(1.2);
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
