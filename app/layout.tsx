import "./globals.css"
import type { Metadata } from "next"
import Link from "next/link"
import DarkModeToggle from "./components/DarkModeToggle"

export const metadata: Metadata = {
  title: "Behind Computer",
  description: "Writings by behind computer.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h1>Behind Computer</h1>
              <DarkModeToggle />
            </div>
            <nav className="nav">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}

