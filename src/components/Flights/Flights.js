import {useEffect, useState} from "react";
import {getSpace} from "../../services/SpaceX/SpaceService";
import {Flight} from "../Flight/flight";


const Flights = () => {

    const [flights, setflights] = useState([])

    useEffect(() => {getSpace()
        .then((response) => setflights(response.data)
    );
},[])


    return(
        <div>{
            flights.filter(item => item.launch_year !== '2020').map((item => (<Flight key={item.flight_number} item={item}/>)))
        }
        </div>
    )
}

export {Flights}