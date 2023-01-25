import {User} from "../User/User";


const Comments = ({comments}) => {

    return (
        <div>
            {comments.map(item => {const {id, body} = item
            return (
                <div key={id}>{id} -- {body}</div>
            )
            })}
        </div>
    )
}

export {Comments}