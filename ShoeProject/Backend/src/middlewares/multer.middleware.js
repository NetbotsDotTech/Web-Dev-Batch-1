// import multer from "multer";
// import path from 'path';
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'media/');
//     },
//     filename: function (req, file, cb) {
//         const fileName = `${Date.now()}${path.extname(file.originalname)}`;
//         cb(null, fileName);
//     }
// });
// const fileFilter = (req, file, cb) => {
//     const allowedType = ['image/png', 'image/jpg', 'image/jpeg','image/avif'];
//     if (allowedType.includes(file.mimetype)) {
//         cb(null, true);
//     }
//     else {
//         ;
//         cb(new Error('Invalide file type. Only PNG, JPG, JPEG, and AVIF are allowed'), false)
//     }

// }

// export const upload = multer({
//     storage: storage,
//     fileFilter: fileFilter,
//     limits: { fileSize: 1024 * 1024 * 10 }
// })

import multer from "multer";
import path from "path";

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
    const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only PNG, JPG, JPEG, and webp are allowed'), false);
    }
}

export const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 10 } // 10MB limit
});