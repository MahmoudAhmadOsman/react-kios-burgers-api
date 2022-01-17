import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Burger from "../models/burgerModel.js";

const burgersRouter = express.Router();

//Get all burgers
burgersRouter.get(
	"/",
	expressAsyncHandler(async (req, res) => {
		const burgers = await Burger.find({});
		// console.log(burgers);
		res.send(burgers);
	})
);

//Seed Router
burgersRouter.get(
	"/seed",
	expressAsyncHandler(async (req, res) => {
		//await Burger.remove({});
		const createdBurgers = await Burger.insertMany(data.burgers);
		res.send({ createdBurgers });
	})
);











//Get a burger by id

burgersRouter.get(
	"/:id",
	expressAsyncHandler(async (req, res) => {
		const burger = await Burger.findById(req.params.id);
		if (burger) {
			res.send(burger);
		} else {
			res.status(404).send({ message: "Burger Not Found!" });
		}
	})
);

export default burgersRouter;
