const { HttpServerError, BadRequestError } = require("common");

const { GivenPermission } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getGivenPermissionByQuery = async (query) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }
    const givenPermission = await GivenPermission.findOne({ where: query });
    if (!givenPermission) return null;
    return givenPermission.getData();
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingGivenPermissionByQuery",
      err,
    );
  }
};

module.exports = getGivenPermissionByQuery;
