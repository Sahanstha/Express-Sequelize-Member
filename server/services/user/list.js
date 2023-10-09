const { user } = require("../../models");
module.exports = async()=>{
    const listUser = await user.findAll({
    })
    return listUser;
}
