import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
    {
      username: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      profilePicture: {
        type: String,
      },
      isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
  );
  
const User = mongoose.model('User', UserSchema);
export default User;