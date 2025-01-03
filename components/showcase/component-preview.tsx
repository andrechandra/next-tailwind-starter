interface ComponentPreviewProps {
  title: string
  description: string
  children: React.ReactNode
}

export function ComponentPreview({
  title,
  description,
  children,
}: ComponentPreviewProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  )
}
