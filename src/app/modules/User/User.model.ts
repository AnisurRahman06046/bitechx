import { Schema, model } from 'mongoose';
import { IUser } from './User.interface';

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'User name is required'],
    },
    password: {
      type: String,
      required: true,
    },
    // email: {
    //   type: String,
    //   required: [true, 'Email is required'],
    //   unique: true,
    // },
    // phoneNumber: {
    //   type: String,
    // },
  },
  { timestamps: true },
);

export const User = model<IUser>('User', userSchema);
