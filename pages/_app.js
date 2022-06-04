import '../styles/globals.css'
import '../styles/app.scss'
import HeaderUI from '../comps/HeaderUI'
import FooterUI from '../comps/FooterUI'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <HeaderUI/>
        <Component {...pageProps} />
        <FooterUI/>
    </>

  )
}

export default MyApp
