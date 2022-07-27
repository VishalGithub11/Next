//ofcourse some setting is done in _app.js for getLayout

import Footer from "../component/layout/Footer"

const onlyFooter = () => {

  return (
    <div className="content">onlyFooter</div>
  )
}

export default onlyFooter

onlyFooter.getLayoutss = function PageLayoutss(page){
    return (
        <>
        {page}
        <Footer />
        </>
    )
}