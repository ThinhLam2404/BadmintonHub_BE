import MongooseDelete from "mongoose-delete";
import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema({
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
voucherSchema.plugin(MongooseDelete, { overrideMethods: "all" });

const Voucher = mongoose.model("vouchers", voucherSchema);

export default Voucher;
