import { Schema, model, models } from "mongoose";

const profileSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    realState: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    constructionDate: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      // کتگوری فقط این مقادیر رو می تونه بگیره
      enum: ["villa", "apartment", "store", "office"],
      required: true,
    },
    amenities: {
      type: [String],
      default: [],
    },
    rules: {
      type: [String],
      default: [],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  // createdAt,updatedAt
  { timestamps: true }
);

/// اگر مدلی وجود داشت اونو بگیر
const Profile = models.Profile || model("Profile", profileSchema);

export default Profile;

// createdAt:{
//     type:Date,
//     default:()=>Date.now(),
//     immutable:true
// }
// updatedAt:{
//     type:Date,
//     default:()=>Date.now(),
// }
