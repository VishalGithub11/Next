
const PostId = ({post}) => {
  return (
    <div>
        <h2>{post.id} {post.title}</h2>
        <p>{post.body}</p>
    </div>

  )
}

export default PostId


export async function getStaticPaths(){

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    const data = await response.json();
    const paths = data.map(post=>{
        return {
            params:{
                postIds:`${post.id}`
            }
        }
    })

    return {
        // paths:[
        //     {
        //         params:{ postIds:'1' }
        //     },
        //     {
        //         params:{ postIds:'2' }
        //     },
        //     {
        //         params:{ postIds:'3' }
        //     },
        //     {
        //         params:{ postIds:'4' }
        //     },
        //     {
        //         params:{ postIds:'5' }
        //     },
        // ],
        paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postIds}`)

    const data = await response.json();

    return {
        props:{
            post: data
        }
    }
}