import express from "express";
import expressAsyncHandler from "express-async-handler";
// import data from "../data.json";
import Burger from "../models/burgerModel.js";

const burgersRouter = express.Router();

burgersRouter.get(
	"/",
	expressAsyncHandler(async (req, res) => {
		// const burgers = await Burger.find({});
		const burgers = await Burger.find({});
		// console.log(burgers);
		res.send(burgers);
	})
);

export default burgersRouter;
