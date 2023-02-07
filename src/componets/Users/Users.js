import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {User} from "../User/User";
import {userAction} from "../../redux";

const Users = () => {

    const {users, errors, loading} = useSelector(state => state.users);
    const dispatch = useDispatch();

   useEffect(() => {
       dispatch(userAction.getAll())
   }, [])


    return (
        <div>
            {errors && JSON.stringify(errors)}
            {loading && <h1>LOADING. PLEASE WAIT!</h1>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    )
}

export {Users}