import multer from "multer";
import path from "path";

// Counter for auto-increment
let counter = 0;

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'media/'); // Destination folder for images
  },
  filename: function (req, file, cb) {
    // Generate a custom filename: auto-increment + date + original file extension
    const fileName = `${++counter}_${Date.now()}${path.extname(file.originalname)}`;
    cb(null, fileName);
  }
});

// File filter for accepting only images
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG, JPG, and PNG are allowed."), false);
  }
};

// Set up multer middleware
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 } // 5MB limit
});

export default upload;
