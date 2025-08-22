import { Router } from "express";
import multer from "multer";
import RiderController from "./controllers/riderController.js";

const router = Router();

// Multer config for form-data
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
router.get("/", RiderController.getAllRiders);
router.get("/:id", RiderController.getRider);
router.delete("/:id", RiderController.DeleteRider);
router.delete("/applicant/:id", RiderController.DeleteApplicant);
router.delete("/application/:id", RiderController.DeleteApplicantion);
// router.get("/:id", RiderController.getUserById);
// router.post("/", upload.single('profile'), RiderController.createUser);
router.post("/application",RiderController.RidersApplication);
router.post("/application/response/:id",RiderController.ApplicationResponse);
router.get("/applicants",RiderController.getAllApplicants);
router.post("/register/:applicant_id",RiderController.RidersRegister);
router.post("/login",RiderController.Login);
router.put("/register/profile/:id",upload.single('profile'),RiderController.RiderProfile);
// router.put("/:id",RiderController.ChangeNumber);
// router.delete("/:id",RiderController.DeleteUser);

export default router;
