import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
  
      username: {
          type: String,
          trim: true
      },
      email: {
          type: String,
          required: true,
          unique: true,
          trim: true,
          lowercase: true
      },
      password: {
          type: String,
          required: true
      },
      firstName: {
          type: String,
        //   required: true,
          trim: true
      },
      lastName: {
          type: String,
        //   required: true,
          trim: true
      },
      address: String,
      phone: Number,
      roles: {
          type: [String],
          default: 'user'
      },
      dateOfBirth: {
          type: String
      },

      wishlist:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            default: null
          },
      ]
    }
);


export default mongoose.model('User', userSchema);