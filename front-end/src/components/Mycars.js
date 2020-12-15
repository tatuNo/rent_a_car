import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import CarService from "../services/cars";

function MyCars() {
    const username = useSelector(state => state.user.username);
    const [cars, setCars] = useState([]);
    const [price, setPrice] = useState ({});

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

    const handleSubmit = async (id) => {
        const target = id;
        const targetprice = price[target];
        const priceobject = {
            price: targetprice
        }
        try {
            const result = await CarService.update(id, priceobject);
            const carList = cars.map(car => car.id === result.id ? {
                ...car, price: result.price
            }
            : car );
            setCars(carList);
        } catch (e) {
            console.log(e);
        }    
    }

    const handlePriceChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name; 
      setPrice({
          ...price,
          [name]: value,
      })
    }
    console.log(price);
    const handleDelete = async (id) => {
        try{
            const car = await CarService.deleteCar(id);
            const carList = cars.filter(car => car.id !== id);
            setCars(carList);
        } catch (e) {
            console.log(e)
        }
    }

  if(cars.length === 0 ) {
      return(
          <p>No cars listed!</p>
      )
  }

  return (
    <>
      <h1>Your listings</h1>
      <div>
      {cars.map(car =>
            <div style={divStyle} key={car.id}>
            <img src={car.img}/>
            <form>
            <div>
                update price <input
                type="text"
                name={car.id}
                placeholder={car.price}
                onChange={handlePriceChange}
                />
            </div>
            </form>
            <button onClick={() => handleSubmit(car.id)}>Submit</button>
            <button onClick={() => handleDelete(car.id)}>Delete listing</button> 
            </div>)}  
      </div>
    </>
  );
}

export default MyCars;