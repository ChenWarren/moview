import '../styles/globals.css'
import '../styles/app.scss'
import HeaderUI from '../comps/HeaderUI'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <HeaderUI/>
        <Component {...pageProps} />
    </>

  )
}

export default MyApp
