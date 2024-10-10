import { Request, Response } from "express";
import cloudinary from "../cloudinaryConfig";

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
}

// GET GALERÍA
export const getAllImages = async (req: Request, res: Response) => {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix: process.env.VITE_UPLOAD_PRESET,
      max_results: 20,
    });

    const images = result.resources.map((resource: CloudinaryResource) => ({
      public_id: resource.public_id,
      url: resource.secure_url,
    }));

    res.json(images);
  } catch (error) {
    console.error("Error al obtener imágenes de Cloudinary:", error);
    res.status(500).json({ error: "Error al obtener imágenes" });
  }
};

// POST UPLOAD
export const uploadImage = async (req: MulterRequest, res: Response) => {
  if (!req.file) {
    res.status(400).json({ error: "No hay archivo a subir!" });
    return;
  }

  try {
    const result = await cloudinary.uploader.upload(
      req.file.buffer.toString("base64"),
      {
        resource_type: "auto",
        folder: process.env.VITE_UPLOAD_PRESET
      }
    );

    res.json({
      public_id: result.public_id,
      url: result.secure_url,
    });
  } catch (error) {
    console.error("Error subiendo imagen a Cloudinary", error);
    res.status(500).json({ error: "Error al subir la imagen" });
  }
};
