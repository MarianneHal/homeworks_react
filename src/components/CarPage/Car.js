import {useAppReducer} from "../../hooks/useAppReducer";
import {carAction} from "../../reducers/carReducer";



const Car = ({car}) => {

    const {id, model, year} = car;

    const [, dispatch] = useAppReducer(value => value.carReducer)

    return(
        <div>
            <div> id: {id}</div>
            <div> model: {model}</div>
            <div> year: {year}</div>
            <button onClick={() => dispatch(carAction.DELETE_BY_ID(id))}>Delete</button>
        </div>
    )
}

export {Car}