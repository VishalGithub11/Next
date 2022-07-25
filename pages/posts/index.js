import Link from 'next/link'

function PostList({posts}){
    return (
        <>
        <h1>PostList</h1>
        {posts.map(post=>(
            <div key={post.id}>
                <Link href={`/posts/${post.id}`} passHref>
                    <a>
                <h2>{post.id} {post.title}</h2>
                </a>
                </Link>
                <hr />
            </div>
        ))}
        </>
    )
}

export default PostList

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    const data = await response.json();

    return {
        props:{
            // posts: data.slice(0,5)
            posts: data

        }
    }
}