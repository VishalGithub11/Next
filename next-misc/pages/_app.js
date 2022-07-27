import Footer from '../component/layout/Footer'
import Header from '../component/layout/Header'
import '../styles/globals.css'
import '../styles/layout.css'
import Head
 from 'next/head'

function MyApp({ Component, pageProps }) {

  if(Component.getLayoutss){
    return Component.getLayoutss(<Component {...pageProps}/>)
  }


  return (
  <> 
  <Head>
    <title>Next.JS is awesome</title>
    <meta name='description' content='legend wait for it ary'></meta>
  </Head>
  <Header />
   <Component {...pageProps} />
  <Footer />
  </>

  )
}

export default MyApp
