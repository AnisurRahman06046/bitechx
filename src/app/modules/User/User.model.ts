import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'User name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    phoneNumber: {
      type: String,
    },
  },
  { timestamps: true },
);

export const User = model('User', userSchema);
