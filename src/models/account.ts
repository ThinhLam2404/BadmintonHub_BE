import MongooseDelete from "mongoose-delete";
import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    default: null,
  },
  address: {
    type: String,
  },

  phone: {
    type: String,
  },

  role: {
    type: String,
    enum: ["customer", "staff", "admin"],
    default: "customer",
  },
});

// Override all methods
accountSchema.plugin(MongooseDelete, { overrideMethods: "all" });

const Account = mongoose.model("accounts", accountSchema);

export default Account;
