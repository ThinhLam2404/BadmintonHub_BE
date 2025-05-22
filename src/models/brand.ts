import MongooseDelete from "mongoose-delete";
import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Override all methods
brandSchema.plugin(MongooseDelete, { overrideMethods: "all" });

const Brand = mongoose.model("brands", brandSchema);

export default Brand;
