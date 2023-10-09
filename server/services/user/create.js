const { user } = require("../../models");

module.exports = async (createObj) => {
  console.log(createObj);
  const Createuser = await user.create({
    name: createObj.name,
    email: createObj.email,
    password: createObj.password,
  });

  return { Createuser };
};
