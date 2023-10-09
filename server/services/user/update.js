const { user } = require("../../models");
const { ValidationError } = require("../../errors");
module.exports = async (queryObj) => {
  const existingUser = await user.findOne({
    where: {
      id: queryObj.id,
    },
  });

  if (!existingUser) {
    throw new ValidationError("No user found");
  }
  existingUser.name = queryObj.name;
  existingUser.email = queryObj.email;
  existingUser.password = queryObj.password;

  await existingUser.save();
  return existingUser;
};
