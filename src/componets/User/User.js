import {useDispatch} from "react-redux";

import {userAction} from "../../redux";


const User = ({user}) => {
  const {name, id, username} = user;
  const dispatch = useDispatch();

  return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <button onClick={() => dispatch(userAction.setSelectedUser(user))}>SELECT</button>
            <button onClick={() => dispatch(userAction.getById({id}))}>apiSelect</button>
        </div>
    )
}

export {User}