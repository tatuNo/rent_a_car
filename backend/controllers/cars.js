const carsRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const Car = require("../models/car");
const User = require("../models/user");

carsRouter.get("/", async (request, response) => {
  const cars = await Car.find({}).populate("user", { username: 1, name: 1 });
  response.json(cars.map((car) => car.toJSON()));
});

carsRouter.post("/", async (request, response) => {
  const body = request.body;
  const decodedToken = jwt.verify(request.token, process.env.SECRET);

  if (!decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid " });
  }
  const user = await User.findById(decodedToken.id);

  const car = new Car({
    date: new Date(),
    location: body.location,
    price: body.price,
    car: body.car,
    user: user._id,
  });

  const savedCar = await car.save();
  user.cars = user.cars.concat(savedCar._id);
  await user.save();
  response.status(201).json(savedCar.toJSON());
});

module.exports = carsRouter;
