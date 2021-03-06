import "../styles/globals.css"
import * as React from "react"

function MyApp({ Component, pageProps }): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
