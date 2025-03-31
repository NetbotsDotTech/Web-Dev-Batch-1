import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  const access_token = req.cookies.access;
  
  if (!access_token) {
    return next(createError(401, "You are not authenticated!"));
  }

  // No need to substring; check if the token directly exists in the cookie.
  const token = access_token;
  

  // Verify the token using the secret
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(createError(403, "Token is not valid!"));
    }
    
    // Store user details in the request object for further use
    req.user = user;
    next();
  });
};

// For verifying the user role or id
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.role === 'user') {
      console.log('huura basit')
      next();
    } else {
      return next(createError(403, "You are not authorized! User"));
    }
  });
};

// For verifying if the user is an admin
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized! Admin"));
    }
  });
};
