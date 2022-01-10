import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// import data from "./data.json";
//Burges api Routes
import burgerRouter from "./routes/burgerRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database Connection
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/burgersdb", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

//Burges api Routes
app.use("/api/burgers", burgerRouter);

app.get("/", (req, res) => {
	res.json({ Page: "Restricted Route!!" });
	// res.status(301).redirect("/api/burgers");
});

//Show all errors - server errors
app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

//Show/handle  server error in a better way
process.on("unhandledRejection", (err, promise) => {
	console.log(`Your Error is : ${err}`);
	server.close(() => process.exit(1));
});
