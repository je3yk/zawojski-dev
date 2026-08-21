import { ChevronRight } from 'lucide-react'

export type ExperienceEntry = {
  id: string
  role: string
  company: string
  period: string
  location: string
  contract: string
  bullets: string[]
  tags: string[]
}

type TimelineEntryProps = {
  entry: ExperienceEntry
  index: number
}

export function TimelineEntry({ entry, index }: TimelineEntryProps) {
  return (
    <div className="group relative pl-8">
      <div className="absolute bottom-0 left-0 top-0 w-px bg-border" />
      <div className="absolute left-[-4px] top-4 h-2 w-2 border border-primary bg-background transition-colors group-has-[details[open]]:bg-primary" />
      <details
        open={index === 0}
        className="group border border-border bg-card transition-colors hover:border-primary/40"
      >
        <summary className="flex w-full list-none items-start justify-between gap-4 px-5 py-4 text-left [&::-webkit-details-marker]:hidden">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground">
              <span className="text-primary">{entry.id}</span>
              <span>·</span>
              <span>{entry.period}</span>
              <span>·</span>
              <span>{entry.location}</span>
              <span>·</span>
              <span
                className={`border px-1.5 py-px ${entry.contract === 'B2B' ? 'border-primary/40 text-primary' : 'border-border text-muted-foreground'}`}
              >
                {entry.contract}
              </span>
            </div>
            <span className="text-sm font-medium text-foreground">{entry.role}</span>
            <span className="text-xs text-muted-foreground">{entry.company}</span>
            <div className="mt-1 flex flex-wrap gap-1.5 group-open:hidden">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <ChevronRight
            size={14}
            className="mt-1 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-90"
          />
        </summary>
        <div className="flex flex-col gap-4 border-t border-border px-5 pb-5">
          <ul className="flex flex-col gap-2 pt-4">
            {entry.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-sm leading-relaxed text-foreground/80"
              >
                <span className="mt-0.5 shrink-0 text-primary">-</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="border border-border px-2 py-0.5 text-[10px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </details>
    </div>
  )
}
