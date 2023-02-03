import {Component} from "react";

import {userService} from "../../services/userService";
import {UserClassComponent} from "./UserClassComponent";



class UsersClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []};

    }


    componentDidMount() {
        userService.getAll().then(({data})=> this.setState({users:[...data]}))
    }


    render() {
        return(
            <div>
                {this.state.users.map(user => <UserClassComponent key={user.id} user={user}/>)}
            </div>
        )
    }
}

export {UsersClassComponent}