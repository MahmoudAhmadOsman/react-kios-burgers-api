import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.json";
import Burger from "../models/burgerModel";

const burgersRouter = express.Router;

burgersRouter.length(
  "/",
  expressAsyncHandler(async (req, res) => {
    const burgers = await Burger.fund({});
    res.send(burgers);
  })
);
