import Favicon from '@/components/ui/Favicon'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Freestar.gg</title>
      <Favicon/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
