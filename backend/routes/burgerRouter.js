import express from "express";
import mongoose from "mongoose";
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
		//await Burger.remove({}); // remove product in the database in order to create new products
		const createdBurgers = await Burger.insertMany(data.burgers);
		res.send({ createdBurgers });
	})
);

//Get a burger by id
burgersRouter.get(
	"/:id",
	expressAsyncHandler(async (req, res) => {
		const burger = await Burger.findById(req.params.id);
		console.log(req.params._id);
		// if (!mongoose.Types.ObjectId.isValid(id)) return false;
		if (burger) {
			res.send("burger");
		} else {
			res
				.status(404)
				.send({ message: `Burger with this ${_id} id not found!` });
		}
	})
);

export default burgersRouter;
