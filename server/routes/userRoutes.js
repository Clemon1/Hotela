import { Router } from "express";
import {
  adminLogin,
  adminSignUp,
  forgotPassword,
  getAllUser,
  getSingleUser,
  getUserAnalysis,
  login,
  resendOTP,
  signUp,
  verifyOTP,
} from "../controllers/authController.js";

const router = Router();

//get all users
router.get("/", getAllUser);
router.get("/userAnalysis", getUserAnalysis);
// get user by Id
router.get("/:userId", getSingleUser);
//user signUP
router.post("/createUser", signUp);
//user login
router.post("/login", login);
//admin Sign Up
router.post("/admin/createUser/", adminSignUp);
//admin Login
router.post("/admin/login/", adminLogin);
//resending OTP
router.post("/OTP/:userId/resend", resendOTP);
//verify acccount and OTP
router.post("/OTP/:userId/verify", verifyOTP);
// forgot password
router.post("/forgotPassword/:userId", forgotPassword);

export default router;
