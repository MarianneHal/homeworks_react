import {UsersForm} from "./components/UserForm/UserForm";
import {Users} from "./components/Users/Users";
import {useEffect, useState} from "react";
import {commentsService, userService} from "./services";
import {Comments} from "./components/Comments/Comments";
import {CommentsForm} from "./components/CommentsForm/CommentsForm";


function App() {
    const [users, setUsers] = useState([])
    const [updateUser, setUpdateUser] = useState(null)
    const [comments, setComments] = useState([])

    useEffect(() => {
        userService.getAll().then(({data})=>setUsers([...data]))
    },[])
    useEffect(() => {
        commentsService.getAll().then(({data})=>setComments([...data]))
    },[])

        return (
    <div className="App">
      <UsersForm setUsers={setUsers} updateUser={updateUser}/>
        <hr/>
       <Users users={users} setUpdateUser={setUpdateUser}/>
        <hr/>
        <CommentsForm setComments={setComments}/>
        <hr/>
        <Comments comments={comments}/>
        <hr/>
        
    </div>
  );
}


export default App
