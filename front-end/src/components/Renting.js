import "../App.css";
import React, {useState, useEffect, Fragment} from "react";
import carService from "../services/cars";
import {useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";


function Renting() {
    const [cars, setCars] = useState([]);
    const [clickedCar, setClickedCar] = useState(null);

    const divStyle = {
        display: "inline-block",
        width: "250px",
        height: "200px",
        padding: "10px"
    }

    const userstate = useSelector(state => state.user);
    let logged = userstate.logged;
    

    useEffect(() => {
        carService.getAll().then(cars => 
        setCars( cars ));
    }, []);

    const showDetails = async (id) => {
        try{
            const car = await carService.getOne(id);
            setClickedCar(car);
        }
        catch (e) {
            console.log(e);
        }
    }

    const authLinks = (
        <Fragment>
        <Link to="/Mycars">
          <button>View your listings</button>
        </Link>
        </Fragment>
      );

    if(cars.length === 0) {
        return null;
    }

    if(clickedCar != null) {
        return (
            <>
            <div>
            <h3>{clickedCar.carBrand}</h3>
            <img src={clickedCar.img}/>
            <p>Listed by {clickedCar.user[0].username}</p>
            <ul>
            <li>{clickedCar.price}€/day</li>
             <li>Location {clickedCar.location}</li>
             <li>Basic info {clickedCar.basicInfo}</li>
             <li>Color {clickedCar.technicalDetails.color}</li>
             <li>Fuel type {clickedCar.technicalDetails.fuelTypes}</li>
             <li>Tyre type {clickedCar.technicalDetails.tyreType}</li>
             <li>Trailer hitch {clickedCar.technicalDetails.trailerHitch}</li>
             <li>Seating capacity {clickedCar.technicalDetails.seatingCapacity}</li>
             <li>Transmission {clickedCar.technicalDetails.transmission}</li>
             <li>Mileage {clickedCar.technicalDetails.mileage}</li>
             </ul>

            </div>
            </>
        );
    }
    return(
        <>
        <div>
         <h2>Cars available</h2>
         {logged ? authLinks : null}
         {cars.map(car =>
            <div style={divStyle}>
            <img src={car.img} onClick={(e) => showDetails(car.id)}/>
            <p>{car.price} €/day</p> 
            </div>)}
        </div>
        </>
    );
}

export default Renting;