export const metadata = {
  title: 'Conference Calendar',
  description: 'Conference attendee tracker',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
