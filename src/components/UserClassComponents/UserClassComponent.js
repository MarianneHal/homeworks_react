import {Component} from "react";



class UserClassComponent extends Component {
    constructor({user}) {
        super({user});

    }


    render() {
        return(
            <div>
            <div>{this.props.name}</div>
            </div>
        )
    }
}

export {UserClassComponent}