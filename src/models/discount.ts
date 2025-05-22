import MongooseDelete from "mongoose-delete";
import mongoose from "mongoose";

const discountSchema = new mongoose.Schema({
  percent: {
    type: Number,
    unique: true,
  },
  expired_at: {
    type: Date,
    required: true,
  },
});

// Override all methods
discountSchema.plugin(MongooseDelete, { overrideMethods: "all" });

const Discount = mongoose.model("discounts", discountSchema);

export default Discount;
