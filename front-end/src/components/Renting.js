import "../App.css";
import React, {useState, useEffect} from "react";
import carService from "../services/cars";

function Renting() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(cars => 
        setCars( cars ));
    }, []);

    console.log(cars);

    if(cars.length === 0) {
        return null
    }
    return(
        <>
        <div>
         <h2>Cars available</h2>
         {cars.map(car =>
            <div>
            <img src={car.img}/>
            <p>{car.price}€/day</p> 
            </div>)}
        </div>
        </>
    );
}

export default Renting;