import { User } from '../modules/User/User.model';

export const checkUser = async (id: string) => {
  const user = await User.findById(id);
  return !!user;
};
