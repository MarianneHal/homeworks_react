


const User = ({user,choseUser}) => {
    const {id, name, username} = user
    return(
        <div>
            <h2>{name} -- {id}</h2>
            <div>{username}</div>
            <button onClick={()=>{choseUser(user.id)}}>GetDetails</button>
        </div>
    )

}
export {User}