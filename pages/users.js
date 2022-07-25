
import User from "../component/user";

const users = ({users}) => {
  return (

    <>    <div>users</div>
           <h1>username &amp; email: </h1>   
          { users.map((e)=>(
            
            <div key={e.id}>
            <User user={e} />
            </div>
        
           ))  }
    </>
  )
}

export default users

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    return {
        props:{
            users: data
        }
    }
}