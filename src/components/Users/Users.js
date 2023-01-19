
import {User} from "../User/User";
import {useEffect, useState} from "react";
import {getPosts, getUser, getUsers} from "../../services/usersService";
import {Post} from "../Post/Post";


const Users = () => {

    const [users, setUsers] = useState([])
    const [userDetails, setUserDetails] = useState(null)
    const [posts, setPosts] = useState(null)

    useEffect(() => {getUsers()
        .then(value => value.data)
        .then(value => setUsers([...value]))},[])

    const chooseUser = (id) => {
        getUser(id).then(value => setUserDetails(value.data))
    }
   const userPosts = (id) => {
        getPosts(id).then(value => setPosts(value.data))
   }

    return (
        <div>
            {userDetails && (<div>{userDetails.email}</div>)}
            <hr/>
            <h1>Users</h1>
            {users.map(user => <User key={user.id} user={user} choseUser={chooseUser} addPosts={userPosts}/>)}
            <hr/>
            {posts && (<div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>)}
        </div>
    )
}


export {Users}