import {Component} from "react";

import {userService} from "../../Services/userService";
import {UserClassComponent} from "./UserClassComponent";


class UsersClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = []
    }
    componentDidMount() {
        userService.getAll().then(({data})=>this.setState(data))
    }

    render() {
        return(
            <div>
                {this.state.map((user) => <UserClassComponent key={user.id} user={user}/>)}
            </div>
        )
    }
}

export {UsersClassComponent}