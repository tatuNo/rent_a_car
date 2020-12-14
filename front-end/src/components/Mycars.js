import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import CarService from "../services/cars";

function MyCars() {
    const username = useSelector(state => state.user.username);
    const [cars, setCars] = useState([]);
    const [price, setPrice] = useState ("");

    const divStyle = {
        display: "inline-block",
        width: "250px",
        height: "200px",
        padding: "10px"
    }

    useEffect(() => {
        CarService.getAll().then(cars => 
        cars.filter(car => car.user[0].username === username))
        .then(c => setCars(c));
    }, [username]);

    console.log(price);

    const handleSubmit = () => {
        console.log("jees");
    }

    const handleDelete = (id) => {

    }

  return (
    <>
      <h1>Your listings</h1>
      <div>
      {cars.map(car =>
            <div style={divStyle}>
            <img src={car.img}/>
            <form onSubmit={handleSubmit}>
            <div>
                update price <input
                type="text"
                name="location"
                placeholder={car.price}
                onChange={({ target }) => setPrice (target.value)}
                />
            </div>
            <button type="submit">Submit</button>
            <button onClick={handleDelete(car.id)}>Delete listing</button>
                </form> 
            </div>)}  
      </div>
    </>
  );
}

export default MyCars;