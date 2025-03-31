import multer from "multer";
import path from 'path';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'media/');
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});
const fileFilter = (req, file, cb) => {
    const allowedType = ['image/png', 'image/jpg', 'image/jpeg'];
    if (allowedType.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        ;
        cb(new Error('Invalide file type. Only PNG, JPG, and JPEG are allowed'), false)
    }

}

export const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 }
})