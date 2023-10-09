const { user } = require("../../models");
module.exports = async (id) => {
  const deleteUser = await user.destroy({
    where: {
      id: id,
    },
  });
  return deleteUser;
};
