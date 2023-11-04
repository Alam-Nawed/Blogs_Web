const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  // Extract token from headers
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ error: "A token is required for authentication" });
  }
  
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, "SECRET"); // Use an environment variable for the secret
    req.user = decoded; // Add the decoded user payload to the request
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid Token" });
  }
};

module.exports = authenticate ;
