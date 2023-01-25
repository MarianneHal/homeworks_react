import {useEffect, useState} from "react";
import {userService} from "../../services";

import {User} from "../User/User";


const Users = ({users, setUpdateUser}) =>{

    return(
        <div>
            {users.map(user => <User key={user.id} user={user} setUpdateUser={setUpdateUser} />)}
        </div>
    )
}

export {Users}