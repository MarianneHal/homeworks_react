
import {User} from "../User/User";
import {useEffect, useState} from "react";
import {getUser, getUsers} from "../../services/usersService";


const Users = () => {

    const [users, setUsers] = useState([])
    const [userDetails, setUserDetails] = useState(null)

    useEffect(() => {getUsers()
        .then(value => value.data)
        .then(value => setUsers([...value]))},[])

    const chooseUser = (id) => {
        getUser(id).then(value => setUserDetails(value.data))
    }


    return (
        <div>
            {userDetails && (<div>{userDetails.email}</div>)}
            <hr/>
            <h1>Users</h1>
            {users.map(user => <User key={user.id} user={user} choseUser={chooseUser}/>)}

        </div>
    )
}


export {Users}