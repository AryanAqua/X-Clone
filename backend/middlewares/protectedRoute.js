import User from "../model/user.model.js"
import jwt from "jsonwebtoken";

export const protectedRoute = async(req, res, next) => {
  try {
    const token = req.cookies.jwt; //you cannot access it without having cookie parser import
    if(!token) {
      return res.status(401).json({error: "Unauthorized: No Token Provided"});
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const user = await User.findById(decoded.userId).select("-password");
    if(!user) {
      return res.status(401).json({error: "Unauthorized: User not found"});
    }
    
    req.user = user;
    next();
  } catch(error) {
    console.log("Error in Protected Route", error.message);
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({error: "Unauthorized: Invalid Token"});
    }
    return res.status(500).json({error: "Internal Server Error"});
  }
};