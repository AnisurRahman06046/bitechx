import { IUser } from './User.interface';
import { User } from './User.model';

const createUser = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};

//  fetch all users
const users = async () => {
  const result = await User.find({});
  return result;
};

// fetch single user
const user = async (id: string) => {
  const result = await User.findOne({ id });
  return result;
};
// update a user
const editUser = async (id: string, payload: Partial<IUser>) => {
  const result = await User.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

// delete a user
const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const userServices = { createUser, users, user, editUser, deleteUser };
