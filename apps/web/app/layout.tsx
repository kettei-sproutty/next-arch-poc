import './global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Leaderships</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
