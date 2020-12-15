import React, {useState, useEffect} from 'react'
import carService from '../services/cars'
import FileBase64 from 'react-file-base64'

function About () {
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [basicinfo, setBasicInfo] = useState("");
    const [carBrand, setCarBrand] = useState("");
    const [vechileType, setVechileType] = useState("");
    const [color, setColor] = useState("");
    const [fuelTypes, setFuelTypes] = useState(""); 
    const [tyreType, setTyreType] = useState(""); 
    const [trailerHitch, setTrailerHitch] = useState(false); 
    const [seatingCapacity, setSeatingCapacity] = useState("");
    const [transmission, setTransmission] = useState(""); 
    const [mileage, setMileage] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [cars, setCars] = useState([]);
    
    // tämä asynciksi...
    const handleSubmit = async event => {
        event.preventDefault();

        const carObject = {
            img: imageFile.base64,
            location: location,
            price: price,
            basicInfo: basicinfo,
            carBrand: carBrand,
            technicalDetails: {
                vechileType: vechileType,
                color: color,
                fuelTypes: fuelTypes,
                tyreType: tyreType,
                trailerHitch: trailerHitch,
                seatingCapacity: seatingCapacity,
                transmission: transmission,
                mileage: mileage
            }
        }
        try {
        const car = await carService.create(carObject);
        console.log(car);
        } catch (e) {
        console.log(e);
        }
        console.log(carObject);
    }
  
    return(
        <>
        <h1>Rent your car!</h1>
        <form onSubmit={handleSubmit}>
            <div>
                location <input
                type="text"
                name="location"
                value={location}
                onChange={({ target }) => setLocation (target.value)}
                />
            </div>
            <div>
                price <input
                type="text"
                name="price"
                value={price}
                onChange={({ target }) => setPrice (target.value)}
                />
            </div>
            <div>
                basic info <input
                type="text"
                name="basicinfo"
                value={basicinfo}
                onChange={({ target }) => setBasicInfo (target.value)}
                />
            </div>
            
            <div>
                car brand <input
                type="text"
                name="car brand"
                value={carBrand}
                onChange={({ target }) => setCarBrand (target.value)}
                />
            </div>
            
            <div>
                vechileType <input
                type="text"
                name="vechiletype"
                value={vechileType}
                onChange={({ target }) => setVechileType (target.value)}
                />
            </div>
            
            <div>
                color <input
                type="text"
                name="color"
                value={color}
                onChange={({ target }) => setColor (target.value)}
                />
            </div>
            
            <div>
                fuel type <input
                type="radio"
                name="fueltype"
                value="diesel"
                onChange={({ target }) => setFuelTypes (target.value)}
                />
                diesel
                <input 
                type="radio"
                name="fueltype"
                value="electric"
                onChange={({ target }) => setFuelTypes (target.value)}
                />
                electric
                <input
                type="radio"
                name="fueltype"
                value="gasoline"
                onChange={({ target }) => setFuelTypes (target.value)}
                />
                gasoline
            </div>
            
            <div>
                tyre type <input
                type="radio"
                name="tyretype"
                value="winter"
                onChange={({ target }) => setTyreType (target.value)}
                />
                winter
                <input
                type="radio"
                name="tyretype"
                value="summer"
                onChange={({ target }) => setTyreType (target.value)}
                />
                summer
            </div>
            
            <div>
                trailer hitch <input
                type="checkbox"
                name="trailer hitch"
                value={trailerHitch}
                onChange={() => setTrailerHitch (!trailerHitch)}
                />
            </div>
            
            <div>
                seating capacity <input
                type="text"
                name="seating capacity"
                value={seatingCapacity}
                onChange={({ target }) => setSeatingCapacity (target.value)}
                />
            </div>
            
            <div>
                transmission <input
                type="radio"
                name="transmission"
                value="manual"
                onChange={({ target }) => setTransmission (target.value)}
                />
                manual
                <input 
                type="radio"
                name="transmission"
                value="automatic"
                onChange={({ target }) => setTransmission (target.value)}/>
                automatic
            </div>
            
            <div>
                mileage <input
                type="text"
                name="mileage"
                value={mileage}
                onChange={({ target }) => setMileage (target.value)}
                />
            </div>
                <div>Choose image
                    <FileBase64 multiple={false}
                    onDone={x => {setImageFile(x)}}/>
                </div>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default About