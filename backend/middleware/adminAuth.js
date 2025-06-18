import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    const { token } = req.headers.token;
    if (!token) {
      return res.json({
        success: false,
        message: "No token provided, please login again!",
      });
    }
    const decoded_token = jwt.verify(token, process.env.JWT_SECRET);
    if (
      decoded_token.id !==
      process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD
    ) {
      return res.json({
        success: false,
        message: "Not Authorized, login again!",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default adminAuth;
