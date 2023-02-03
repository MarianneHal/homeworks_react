import {Component} from "react";



class UserClassComponent extends Component {


    render() {
        const {id, name, username} = this.props.user
        return(
            <div>
            <div>{id}</div>
                <div>{name}</div>
                <div>{username}</div>
            </div>
        )
    }
}

export {UserClassComponent}