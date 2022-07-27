import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import 'styles/globals.css'
import 'styles/layout.css'
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
