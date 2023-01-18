import {findAllByDisplayValue} from "@testing-library/react";
import {Characters} from "../Characters/Component";

const Simpson = ({name, id, image}) => {
    return(
        <div>
            <div> {name} -- {id} </div>
            <img src={image} alt={name}/>
        </div>
    )
}
export {Simpson}