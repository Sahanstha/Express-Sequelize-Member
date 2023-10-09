const express = require("express");

const router = new express.Router();
router.use("/user", require("./user"));

// router.use((req, res, next) => {
//   const role = req.decoded.role;
//   if (role === "administrator") {
//     next();
//   } else {
//     res.status(403).json({
//       error: "Action not permitted",
//     });
//   }
// });
module.exports = router;
