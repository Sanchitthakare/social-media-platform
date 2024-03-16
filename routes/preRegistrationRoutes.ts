// Purpose: Routing for user related requests.
import express from "express";
import preRegistration from "../controllers/preRegistrationController/PreRegistrationController";

const router = express.Router();

// User Routes
router.post("/preRegistration", preRegistration);

export default router;
