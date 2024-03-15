import { checkUser } from '../../utils/checkUser';
import { IUser } from './User.interface';
import { User } from './User.model';

const createUser = async (payload: IUser) => {
  // check if user exists
  const isUserExist = await User.findOne({ email: payload.email });
  if (isUserExist) throw new Error('User already exist');
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
  if (!(await checkUser(id))) {
    throw new Error('User not found');
  }
  const result = await User.findById(id);
  return result;
};
// update a user
const editUser = async (id: string, payload: Partial<IUser>) => {
  if (!(await checkUser(id))) {
    throw new Error('User not found');
  }
  const result = await User.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

// delete a user
const deleteUser = async (id: string) => {
  if (!(await checkUser(id))) {
    throw new Error('User not found');
  }
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const userServices = { createUser, users, user, editUser, deleteUser };
