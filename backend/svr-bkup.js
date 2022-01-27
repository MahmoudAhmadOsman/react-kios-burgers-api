import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import data from "./data.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database Connection
mongoose.connect(
	process.env.MONGODB_URL || "mongodb://localhost/mongodb2020",
	{}
);

app.get("/", (req, res) => {
	res.send("Server is running");
});

app.get("/api/burgers", (req, res) => {
	res.send(data.burgers);
});
// Show all errors - server errors
app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

//Show/handle  server error in a better way
process.on("unhandledRejection", (err, promise) => {
	console.log(`Type of Error is : ${err}`);
	server.close(() => process.exit(1));
});
