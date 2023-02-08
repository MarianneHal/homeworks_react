import {useDispatch} from "react-redux";
import {carActions} from "../../redux";


const Car = ({car}) => {

   const {brand, id, year} = car;
   const dispatch = useDispatch();

    return(
        <div>
            <div> id: {id}</div>
            <div> brand: {brand}</div>
            <div> year: {year}</div>
            <button onClick={()=>dispatch(carActions.deleteCar({id}))}>DELETE</button>
            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>UpDATE</button>

        </div>
    )
}

export {Car}