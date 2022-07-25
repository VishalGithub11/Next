import {useRouter} from 'next/router'

const id = () => {
const router  = useRouter();
let number = router.query.id
  return (
    <div> 
        <h1>this is page number {number}</h1>
    </div>
  )
}

export default id