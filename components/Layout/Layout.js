import Head from "next/head"
import Router from "next/router"

const Layout = ({ children }) => {
  return (
    <div className="px-3 pt-3 xl:px-32 xl:pt-8 bg-gray-cF6F7FB">
      <Head>
        <title>Github Jobs</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Poppins:wght@300;500;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
      </Head>

      <header>
        <div className="pb-8 flex gap-1 font-pop text-2xl text-black-c282538">
          <h1 className="font-bold ">Github</h1>
          <h1 className="font-light">Jobs</h1>
        </div>
      </header>

      <main>{children}</main>

      <footer>
        <p className="text-center pb-4 pt-20 xl:py-10 font-mon text-gray-cB9BDCF text-sm font-semibold">
          <a href="https://github.com/durashere">durashere</a> @{" "}
          <a href="https://devchallenges.io">DevChallenges.io</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
