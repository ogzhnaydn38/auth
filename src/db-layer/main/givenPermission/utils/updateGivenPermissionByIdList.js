const { HttpServerError } = require("common");

const { GivenPermission } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const updateGivenPermissionByIdList = async (idList, dataClause) => {
  try {
    let rowsCount = null;
    let rows = null;
    const options = {
      where: { id: { [Op.in]: idList }, isActive: true },
      returning: true,
    };
    [rowsCount, rows] = await GivenPermission.update(dataClause, options);
    const givenPermissionIdList = rows.map((item) => item.id);
    return givenPermissionIdList;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenUpdatingGivenPermissionByIdList",
      err,
    );
  }
};

module.exports = updateGivenPermissionByIdList;
