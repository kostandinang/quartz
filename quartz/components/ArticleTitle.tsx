import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = (props: QuartzComponentProps) => {
  const { fileData, displayClass } = props
  const title = fileData.frontmatter?.title
  const status = fileData.frontmatter?.status as string | undefined

  const getStatusIcon = (status: string | undefined) => {
    switch (status) {
      case "seedling":
        return { icon: "🌱", title: "Seedling – early idea, needs clarification" }
      case "budding":
        return { icon: "🌿", title: "Growing – being expanded or connected" }
      case "evergreen":
        return { icon: "🌳", title: "Evergreen – refined and ready to use" }
      default:
        return null
    }
  }

  const statusData = getStatusIcon(status)

  if (title) {
    return (
      <h1 class={classNames(displayClass, "article-title")}>
        {statusData && (
          <span class="status-indicator" title={statusData.title}>
            {statusData.icon}
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

.status-indicator {
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 1.2em;
  cursor: help;
  transition: transform 0.2s ease;
}

.status-indicator:hover {
  transform: scale(1.2);
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
