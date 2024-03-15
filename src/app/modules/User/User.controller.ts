import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendApiResponse';
import { userServices } from './User.service';

const createUser = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await userServices.createUser(data);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User is created',
    data: result,
  });
});

// fetch all users
const users = catchAsync(async (req, res) => {
  const result = await userServices.users();
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Users are fetched',
    data: result,
  });
});

// fetch single user
const user = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userServices.user(id);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User is fetched',
    data: result,
  });
});

// update user
const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result = await userServices.editUser(id, data);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User is updated',
    data: result,
  });
});
export const userControllers = { createUser, users, user, updateUser };
