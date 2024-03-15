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
export const userControllers = { createUser, users };
