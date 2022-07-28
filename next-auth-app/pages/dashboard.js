import React, {useState, useEffect} from 'react'
import { useSession, signIn, signOut, getSession } from "next-auth/react"

const dashboard = () => {

const [loading, setLoading] = useState(true);
useEffect(()=>{
const securePage = async()=>{
  const session = await getSession();
  console.log('session', session);
  if(!session){
     signIn()
  } else {
    setLoading(false)
  }
}
securePage()
},[])


if(loading){
  return <h2>Loading...</h2>
}

  // const {data:session, status } = useSession() 

  // console.log('session', session, status);



  return (
    <div>Dashboard....</div>
  )
}

export default dashboard