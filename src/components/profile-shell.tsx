import type React from "react"
import { UserNav } from "@/components/user-nav"

interface ProfileShellProps {
  children: React.ReactNode
}

export function ProfileShell({ children }: ProfileShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold">MyApp</h2>
          </div>
          <UserNav />
        </div>
      </header>
      <div className="container flex-1 items-start py-6 md:grid md:grid-cols-[1fr_250px] md:gap-6 lg:grid-cols-[1fr_300px]">
        <main className="relative w-full overflow-hidden md:col-span-2">
          <div className="mx-auto w-full min-w-0">{children}</div>
        </main>
      </div>
    </div>
  )
}
