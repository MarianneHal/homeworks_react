import {Component} from "react";

import {userService} from "../../Services/userService";
import {UserClassComponent} from "./UserClassComponent";
import {axiosService} from "../../Services/AxiosService";


class UsersClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {user: []};

    }


    componentDidMount() {
        userService.getAll().then(({response}) => this.setState([...response]))
    }


    render() {
        return(
            <div>
                {this.state.user.map((user) => <UserClassComponent key={user.id} user={user}/>)}
            </div>
        )
    }
}

export {UsersClassComponent}