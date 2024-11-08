"use client"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">   
      <body>
        <main>
          {children}
          <SpeedInsights />
          <Analytics />
          </main>
        
      </body>
    </html>
  )
}
