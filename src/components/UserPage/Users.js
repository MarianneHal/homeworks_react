import {useAppReducer} from "../../hooks/useAppReducer";

import {User} from "./User";


const Users = () => {
  const [users, dispatch] = useAppReducer((reducers) => reducers.userReducer)

    return(
        <div>
            {users.map(user => <User id={user.id} user={user}/>)}
        </div>
    )
}

export {Users}