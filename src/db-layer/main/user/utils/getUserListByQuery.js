const { HttpServerError, BadRequestError } = require("common");

const { User } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getUserListByQuery = async (query) => {
  try {
    const user = await User.findAll({ where: query });
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }
    if (!user) return [];
    return user.map((item) => item.getData());
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingUserListByQuery",
      err,
    );
  }
};

module.exports = getUserListByQuery;
