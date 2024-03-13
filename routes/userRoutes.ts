// Purpose: Routing for user related requests.
import express from "express";
import Singup from "../controllers/userControllers/signUpController/SignupController";
import Login from "../controllers/userControllers/loginController/LoginController";
import checkUserFirstTimeLogin from "../controllers/userControllers/checkUserFirstTimeLoginController/CheckUserFirstTimeLoginController";

const router = express.Router();

// User Routes
router.post("/signup", Singup);
router.post("/login", Login);
router.post("/checkUserFirstTimeLogin", checkUserFirstTimeLogin);

export default router;
