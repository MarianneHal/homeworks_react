import {useSelector} from "react-redux";

import {CarForm} from "../Forms/CarForm";
import {Cars} from "../Cars/Cars";


const CarsPage = () => {

    const {loading} = useSelector(state => state.cars)

    return (
        <div>
            <CarForm/>
            <hr/>
            {loading && <h1>PLEASE WAIT!</h1>}
            <Cars/>

        </div>
    )
}


export {CarsPage}