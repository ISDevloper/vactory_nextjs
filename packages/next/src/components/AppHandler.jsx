import { NextIntlProvider } from "next-intl"
import { SessionProvider } from "next-auth/react"
// import Router from "next/router"
import dynamic from "next/dynamic"
// import NProgress from "nprogress"

// Router.events.on("routeChangeStart", function () {
//   NProgress.start()
// })
// Router.events.on("routeChangeComplete", () => NProgress.done())
// Router.events.on("routeChangeError", () => NProgress.done())
const TopProgressBar = dynamic(
  () => {
    return import("./TopProgressBar")
  },
  { ssr: false }
)

export const AppHandler = ({
  children,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <TopProgressBar />
      <SessionProvider session={session}>
        <NextIntlProvider
          messages={pageProps?.i18n || {}}
          locale={pageProps?.locale || "fr"}
        >
          {children}
        </NextIntlProvider>
      </SessionProvider>
    </>
  )
}
