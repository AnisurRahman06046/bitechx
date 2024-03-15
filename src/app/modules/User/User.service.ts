import { IUser } from './User.interface';
import { User } from './User.model';

const createUser = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};
export const userServices = { createUser };
