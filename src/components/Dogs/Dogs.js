import {Dog} from "../Dog/Dog";


const Dogs = ({dogs, dispatch}) => {

    return (
        <div>
            {dogs.map(dog => <Dog key={dog.idD} dog={dog} dispatch={dispatch}/>)}
        </div>
    )
}

export {Dogs}