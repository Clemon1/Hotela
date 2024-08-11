import { Router } from "express";
import {
  adminLogin,
  adminSignUp,
  forgotPassword,
  forgotPasswordLink,
  getAllUser,
  getSingleUser,
  getUserAnalysis,
  login,
  resendOTP,
  signUp,
  verifyOTP,
} from "../controllers/authController.js";
import { rateLimit } from "express-rate-limit";

const router = Router();
// rate limiter setup
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  limit: 1, // Limit each IP to 1 per `window` (here, per 1 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});
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
router.post("/OTP/resendOTP", limiter, resendOTP);
//verify acccount and OTP
router.post("/OTP/verify", verifyOTP);

// sending forgot password Link
router.post("/forgotPassword/OTP", forgotPasswordLink);

// forgot password
router.post("/forgotPassword/:resetPasswordToken", forgotPassword);

export default router;
