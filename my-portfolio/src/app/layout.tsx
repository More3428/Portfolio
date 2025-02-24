"use client"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { AuthProvider } from "./AuthContext"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">   
      <body>
        <main>
          <AuthProvider>
          {children}
          </AuthProvider>
          <SpeedInsights />
          <Analytics />
          </main>
        
      </body>
    </html>
  )
}
