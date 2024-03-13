import express from "express";
import { fetchProfile,fetchEducation,fetchHonorsAndAwards,fetchLicenseOrCertification,fetchSkill,fetchWorkExprience } from "../controllers/profileController/fetchProfileController/main";


const router = express.Router();
router.post("/fetchProfile", fetchProfile);
router.get("/fetchProfile", fetchProfile);
router.post("/fetchEducation", fetchEducation);
router.get("/fetchEducation", fetchEducation);
router.post("/fetchHonorsAndAwards", fetchHonorsAndAwards);
router.get("/fetchHonorsAndAwards", fetchHonorsAndAwards);
router.post("/fetchLicenseOrCertification", fetchLicenseOrCertification);
router.get("/fetchLicenseOrCertification", fetchLicenseOrCertification);
router.post("/fetchSkill", fetchSkill);
router.get("/fetchSkille", fetchSkill);
router.post("/fetchWorkExprience", fetchWorkExprience);
router.get("/fetchWorkExprience", fetchWorkExprience);

export default router;