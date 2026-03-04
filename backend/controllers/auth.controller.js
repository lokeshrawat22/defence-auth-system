const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const service = require("../services/user.service.js");
const getRedirect = require("../utils/redirect.util.js");

exports.register = async (req, res) => {
  await service.register(req.body);
  res.json({ message: "User registered" });
};

exports.login = async (req, res) => {

  const user = await service.findUser(req.body);

  if (!user)
    return res.status(401).json({ message: "Invalid credentials" });

  const valid = await bcrypt.compare(req.body.password, user.password);

  if (!valid)
    return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { username: user.username, organisation: req.body.organisation },
    process.env.JWT_SECRET
  );
res.cookie("token", token, {
  httpOnly: true,
  secure: false,   
  sameSite: "none",  
  path: "/"
});

  res.json({
    token, 
    redirectUrl: getRedirect(req.body.organisation)
  });

};

