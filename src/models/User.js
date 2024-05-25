import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    // تاریخ عضویت
    type: Date,
    default: () => Date.now(),
    immutable: true, // can't change it
  },
});

// اگر مدلی وجود داشت اونو بگیر
const User = models.User || model("User", userSchema);

export default User;
