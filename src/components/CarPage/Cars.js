import {useAppReducer} from "../../hooks/useAppReducer";
import {Car} from "./Car";


const Cars = () => {
    const [cars, dispatch] = useAppReducer((reducers) => reducers.carReducer)

    return(
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    )
}

export {Cars}