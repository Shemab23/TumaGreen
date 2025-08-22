import { Router } from "express";
import multer from "multer";
import UserController from "./controllers/userController.js";

const router = Router();

// Multer config for form-data
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/", upload.single('profile'), UserController.createUser);
router.put("/:id",UserController.ChangeNumber);
router.delete("/:id",UserController.DeleteUser);
router.post("/login",UserController.Login);

export default router;
