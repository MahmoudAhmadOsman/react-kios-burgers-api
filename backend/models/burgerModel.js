import mongoose from "mongoose";
const burgerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		meal_img: {
			type: String,
			required: true,
		},
	
		price: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		calories: {
			type: Number,
			required: true,
		},
		fiber: {
			type: Number,
			required: true,
		},
		protein: {
			type: Number,
			required: true,
		},
		carbs: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Burger = mongoose.model("Burger", burgerSchema);

export default Burger;
