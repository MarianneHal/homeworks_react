


const User = ({user,choseUser, addPosts}) => {

    const {id, name, username} = user

    return(
        <div>
            <h2>{name} -- {id}</h2>
            <div>{username}</div>
            <button onClick={()=>{choseUser(user.id)}}>GetDetails</button>
            <button onClick={()=>{addPosts(user.id)}}>AddPosts</button>
        </div>
    )

}


export {User}