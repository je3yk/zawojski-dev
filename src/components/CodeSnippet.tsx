import { cn } from "@/lib/utils"

type CodeTokenTone =
  | "default"
  | "lineNumber"
  | "keyword"
  | "string"
  | "punctuation"

export type CodeSnippetToken = {
  text: string
  tone?: CodeTokenTone
}

type CodeSnippetProps = {
  lines: CodeSnippetToken[][]
  className?: string
}

const toneClassMap: Record<CodeTokenTone, string> = {
  default: "text-foreground",
  lineNumber: "text-muted-foreground",
  keyword: "text-primary",
  string: "text-emerald-600 dark:text-emerald-400",
  punctuation: "text-muted-foreground",
}

export function CodeSnippet({ lines, className }: CodeSnippetProps) {
  return (
    <pre
      className={cn(
        "overflow-x-auto whitespace-nowrap font-mono text-[11px] leading-[1.8]",
        className
      )}
    >
      <code className="block w-fit min-w-full text-foreground">
        {lines.map((line, lineIndex) => (
          <p key={lineIndex}>
            {line.map((token, tokenIndex) => (
              <span
                key={`${lineIndex}-${tokenIndex}`}
                className={toneClassMap[token.tone ?? "default"]}
              >
                {token.text}
              </span>
            ))}
          </p>
        ))}
      </code>
    </pre>
  )
}
