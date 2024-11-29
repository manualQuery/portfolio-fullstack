// src/multer.config.ts

import { diskStorage } from 'multer';
import { extname } from 'path';

// Multer configuration to handle file uploads
export const storageConfig = diskStorage({
  destination: './uploads',  // Directory where files will be stored
  filename: (req, file, callback) => {
    const filename = `${Date.now()}${extname(file.originalname)}`;  // Generate a unique filename based on timestamp
    callback(null, filename);  // Pass the filename to Multer
  },
});
