const userService = require("../../services/user");
const httpStatus = require("http-status");

module.exports = async (req, res, next) => {
  try {
    const data = await userService.deleteUser(req.params.id);
    res.status(httpStatus.OK).json({
      message: "Success",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};
