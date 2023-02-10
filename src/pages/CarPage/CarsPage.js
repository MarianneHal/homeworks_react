import {useSelector} from "react-redux";

import {CarForm} from "../../components/Forms/CarForm";
import {Cars} from "../../components/Cars/Cars";


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