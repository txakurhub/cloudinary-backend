import express from "express";
import upload from "../middlewares/upload";
import { getAllImages, uploadImage } from "../controllers/imagesController";

const router = express.Router();

router.get('/images', getAllImages);
router.post("/upload", upload.single("image"), uploadImage);

export default router;
