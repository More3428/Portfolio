"use client"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { ProjectsProvider } from "./components/Projects/ProjectsContext"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ProjectsProvider>
      <body>
        
        <main>
          {children}
          <SpeedInsights />
          <Analytics />
          </main>
        
      </body>
      </ProjectsProvider>
    </html>
  )
}
