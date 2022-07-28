import Image from "next/image"
import img1 from 'public/4.jpg'


//Image component benefits: 
// 1. Image optimigation (browser no need to download 2000px x 700px image, when only using 320px x 240px)
// 2. uses of placeholder and 




const pets = () => {
  return (
    <>    <div className="content"><h1>Pets</h1>

    <Image src={img1} placeholder='blur' alt="first"  width={'280'} height={'420'} />

    <Image src={`/5.jpg`} alt='cat' width={'280'} height={'420'} />
    
    {['1', '2', '3'].map(path => {
        return (
            <div key={path}>
            <img src={`/${path}.jpg`} alt='pets' width={'280'} height={'420'} />
        </div>
        )
       
})}
    
    
    </div>
    </>

  )
}

export default pets