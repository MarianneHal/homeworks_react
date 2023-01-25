

const User = ({user, setUpdateUser}) => {
    const {id, name, email} = user
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
            <button onClick={()=>setUpdateUser(user)}>update</button>

        </div>
    )
}

export {User}