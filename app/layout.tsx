import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Docs Freshness Enforcer — Keep Docs in Sync with Code',
  description: 'Monitors API changes via git hooks and automatically flags outdated documentation sections, creates update tasks for your team.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7d70aaba-454d-4abe-b39c-a7dc94f255d4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
