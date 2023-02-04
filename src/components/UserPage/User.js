import {useAppReducer} from "../../hooks/useAppReducer";
import {userAction} from "../../reducers/userReducer";

const User = ({user}) => {

const {id, name, surname, age} = user;

const [, dispatch] = useAppReducer(value => value.userReducer)

    return(
        <div>
            <div> id: {id}</div>
            <div> name: {name}</div>
            <div> surname: {surname}</div>
            <div> age: {age}</div>
            <button onClick={() => dispatch(userAction.DELETE_BY_ID(id))}>Delete</button>
        </div>
    )
}

export {User}