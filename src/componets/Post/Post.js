
const Post = ({post}) => {
  const  {id, tittle, body} = post;
    return(
        <div>
             <div>{id}</div>
            <div>{tittle}</div>
            <div>{body}</div>
        </div>
    )
}

export {Post};