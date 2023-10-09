const { user } = require("../../models");
const { ValidationError } = require("../../errors");
module.exports = async (id) => {
  const showUser = await user.findOne({
    where: {
      id: id,
    },
  });
  if (!showUser) {
    throw new ValidationError("No user found");
  }
  return showUser;
};
