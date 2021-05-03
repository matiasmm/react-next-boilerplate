import * as React from "react"

import { RecoilRoot } from "recoil"
import "../styles/globals.css"

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
