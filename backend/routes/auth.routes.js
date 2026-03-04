const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const { register, login } = require("../controllers/auth.controller");

router.post("/register", register);
router.post("/login", login);


router.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Profile accessed",
    user: req.user
  });
});

module.exports = router;

