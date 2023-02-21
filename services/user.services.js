const Users = require("../models/User");

exports.userCreateServices = async (data) => {
  const result = await Users.create(data);
  return result;
};
