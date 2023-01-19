const Post = ({post}) => {



    return (
        <div>
            <h2>{post.id}</h2>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    )
}
 export {Post}