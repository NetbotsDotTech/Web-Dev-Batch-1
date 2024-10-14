import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log("Token ", authHeader)

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(createError(401, "You are not authenticated!"));
  }

  const token = authHeader.substring(7); // Remove "Bearer " prefix
  // const token = req.cookies.access_token;
  console.log("Token ", token)
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized! User"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized! Admin"));
    }
  });
};


