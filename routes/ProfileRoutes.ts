import express from "express";
import addProfile from "../controllers/profileControllers/profileController/AddProfileController";
import fetchProfile from "../controllers/profileControllers/profileController/FetchProfileController";
import addWorkExprience from "../controllers/profileControllers/exprienceController/AddExprienceController";
import deleteWorkExprience from "../controllers/profileControllers/exprienceController/DeleteExprienceController";
import fetchWorkExprience from "../controllers/profileControllers/exprienceController/FetchExprienceController";
import updateWorkExprience from "../controllers/profileControllers/exprienceController/UpdateExprienceController";
import addEducation from "../controllers/profileControllers/educationController/AddEducationController";
import deleteEducation from "../controllers/profileControllers/educationController/DeleteEducationController";
import fetchEducation from "../controllers/profileControllers/educationController/FetchEducationController";
import updateEducation from "../controllers/profileControllers/educationController/UpdateEducationController";
import addLicenseOrCertification from "../controllers/profileControllers/licenseOrCertificationController/AddLicenseOrCertificationController";
import deleteLicenseOrCertification from "../controllers/profileControllers/licenseOrCertificationController/DeleteLicenseOrCertificationController";
import updateLicenseOrCertification from "../controllers/profileControllers/licenseOrCertificationController/UpdateLicenseOrCertificationController";
import addSkills from "../controllers/profileControllers/skillsController/AddSkillsController";
import deleteSkill from "../controllers/profileControllers/skillsController/DeleteSkillsController";
import fetchSkill from "../controllers/profileControllers/skillsController/FetchSkillsController";
import updateHonorsAndAwards from "../controllers/profileControllers/honorsAndAwardsController/UpdateHonorsAndAwardsController";
import deleteHonorsAndAwards from "../controllers/profileControllers/honorsAndAwardsController/DeleteHonorsAndAwardsController";
import addHonorsAndAwards from "../controllers/profileControllers/honorsAndAwardsController/AddHonorsAndAwardsController";
import fetchHonorsAndAwards from "../controllers/profileControllers/honorsAndAwardsController/FetchHonorsAndAwardsController";

const router = express.Router();

// Profile Routes
router.post("/addProfile", addProfile);
router.post("/fetchProfile", fetchProfile);

// Work Exprience Routes
router.post("/addWorkExprience", addWorkExprience);
router.post("/deleteWorkExprience", deleteWorkExprience);
router.post("/fetchWorkExprience", fetchWorkExprience);
router.post("/updateWorkExprience", updateWorkExprience);

// Education Routes
router.post("/addEducation", addEducation);
router.post("/deleteEducation", deleteEducation);
router.post("/fetchEducation", fetchEducation);
router.post("/updateEducation", updateEducation);

// License Or Certification Routes
router.post("/addLicenseOrCertification", addLicenseOrCertification);
router.post("/deleteLicenseOrCertification", deleteLicenseOrCertification);
router.post("/updateLicenseOrCertification", updateLicenseOrCertification);

// Skills Routes
router.post("/addSkill", addSkills);
router.post("/deleteSkill", deleteSkill);
router.post("/fetchSkill", fetchSkill);

// Honors And Awards Routes
router.post("/updateHonorsAndAwards", updateHonorsAndAwards);
router.post("/deleteHonorsAndAwards", deleteHonorsAndAwards);
router.post("/addHonorsAndAwards", addHonorsAndAwards);
router.post("/fetchHonorsAndAwards", fetchHonorsAndAwards);

export default router;
