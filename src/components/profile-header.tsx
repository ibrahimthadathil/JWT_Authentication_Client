import type React from "react"

interface ProfileHeaderProps {
  heading: string
  text?: string
  children?: React.ReactNode
}

export function ProfileHeader({ heading, text, children }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col gap-1 px-2 pb-8 pt-6 md:flex-row md:items-center md:justify-between">
      <div className="space-y-0.5">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{heading}</h1>
        {text && <p className="text-muted-foreground">{text}</p>}
      </div>
      {children}
    </div>
  )
}

