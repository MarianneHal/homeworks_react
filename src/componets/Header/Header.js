import {useSelector} from "react-redux";


const Header = () => {
 const {selectedUser} = useSelector(state => state.users)
    const {selectedPost} = useSelector(state => state.posts)
    return (
        <div>
            {selectedUser && selectedUser.name}
            {selectedPost && selectedPost.body}
        </div>
    )
}

export {Header}