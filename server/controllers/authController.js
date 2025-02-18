import { getMonthlyCounts } from "../middlewares/Analytics/analytics.js";
import { generateToken } from "../middlewares/JWT.js";
import { OTP } from "../middlewares/OTP/otpMiddleware.js";
import users from "../models/userModel.js";
import bcrypt from "bcrypt";

//Create user account
export const signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, role } = req.body;
    const existing = await users.findOne({ email });
    if (existing) {
      return res.status(401).json("Email already in use");
    }
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const generateOTP = OTP();
    const userDetails = new users({
      firstName,
      lastName,
      email,
      password: hashPassword,
      phoneNumber,
      role: role || "User",
      otp: generateOTP.value,
      otpExpires: generateOTP.expiresIn,
    });
    const newUser = await userDetails.save();
    const { password, ...userInfo } = newUser._doc;
    const token = generateToken({ user: userInfo, role: userInfo.role });
    res.status(201).json({ userInfo, token });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
//Create admin account
export const adminSignUp = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber } = req.body;
    const existing = await users.findOne({ email });
    if (existing) {
      return res.status(401).json("Email already in use");
    }
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const generateOTP = OTP();
    const userDetails = new users({
      firstName,
      lastName,
      email,
      role: "Admin",
      password: hashPassword,
      phoneNumber,
      otp: generateOTP.value,
      otpExpires: generateOTP.expiresIn,
    });
    const newUser = await userDetails.save();
    const { password, ...userInfo } = newUser._doc;
    const token = generateToken({ user: userInfo, role: userInfo.role });
    res.status(201).json({ userInfo, token });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
// User login
export const login = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await users.findOne({ email });
    if (!user) {
      return res.status(401).json("User not found");
    }
    const isMatched = await bcrypt.compare(req.body.password, user.password);
    if (!isMatched) {
      return res.status(401).json("Invalid or incorrect password");
    }
    const { password, ...userInfo } = user._doc;
    const token = generateToken({ user: userInfo, role: userInfo.role });
    res.status(200).json({ userInfo, token });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
// Admin Login
export const adminLogin = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await users.findOne({ email });
    if (!user) {
      return res.status(401).json("User not found");
    }
    if (user.role !== "admin") {
      return res.status(401).json("You are not allowed to login here");
    }
    const isMatched = await bcrypt.compare(req.body.password, user.password);
    if (!isMatched) {
      return res.status(401).json("Invalid or incorrect password");
    }
    const { password, ...userInfo } = user._doc;
    const token = generateToken({ user: userInfo, role: userInfo.role });
    res.status(200).json({ userInfo, token });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
// Resend OTP
export const resendOTP = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await users.findById(userId);
    if (!user) {
      return res.status(400).json("User not found");
    }
    const generatedOTP = OTP();
    await user.updateOne({
      otp: generatedOTP.value,
      otpExpires: generatedOTP.expiresIn,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
// Verify OTP
export const verifyOTP = async (req, res) => {
  try {
    const { otp } = req.body;
    const { userId } = req.params;
    const user = await users.findById(userId);
    if (!user) {
      return res.status(401).json("User not found");
    }
    if (otp !== user.otp || new Date() > new Date(user.otpExpires)) {
      return res.status(401).json("Invalid or expired OTP");
    }
    await users.findByIdAndUpdate(userId, {
      $set: { isVerified: true, otp: null, otpExpires: null },
    });
    res.status(200).json("Successfully Verified");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
// get all users
export const getAllUser = async (req, res) => {
  try {
    const user = await users.find();

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
// get single user by ID
export const getSingleUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await users.findById(userId);
    if (!user) {
      return res.status(400).json("User not found or exist");
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
// forgot password
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.params;
    const { newPassword } = req.body;
    // Check if user exists
    const user = await users.findOne(email);
    if (!user) {
      return res.status(401).json("User not found");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json("Password updated successfully");
  } catch (err) {
    res.status(500).json("Error updating password");
  }
};
// user count
export const getUserAnalysis = async (req, res) => {
  try {
    const { year } = req.query;
    const getNoUSER = await getMonthlyCounts(users, Number(year));
    res.status(200).json(getNoUSER);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
