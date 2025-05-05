const { HttpServerError, BadRequestError } = require("common");

const { GivenPermission } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getGivenPermissionCountByQuery = async (query, stats) => {
  const promises = [];
  const statLabels = [];
  try {
    for (const stat of stats) {
      statParts = stat.replace("(", "-").replace(")", "").split("-");
      if (stat === "count") {
        promises.push(GivenPermission.count({ where: query }));
        statLabels.push("count");
      } else if (startParts.length == 2) {
        if (statParts[0] === "sum") {
          promises.push(GivenPermission.sum(statParts[1], { where: query }));
          statLabels.push("sum-" + statParts[1]);
        } else if (statParts[0] === "avg") {
          promises.push(GivenPermission.avg(statParts[1], { where: query }));
          statLabels.push("avg-" + statParts[1]);
        } else if (statParts[0] === "min") {
          promises.push(GivenPermission.min(statParts[1], { where: query }));
          statLabels.push("min-" + statParts[1]);
        } else if (statParts[0] === "max") {
          promises.push(GivenPermission.max(statParts[1], { where: query }));
          statLabels.push("max-" + statParts[1]);
        }
      }
    }

    if (promises.length == 0) {
      return await GivenPermission.count({ where: query });
    } else if (promises.length == 1) {
      return await promises[0];
    } else {
      const results = await Promise.all(promises);
      return results.reduce((acc, val, index) => {
        acc[statLabels[index]] = val;
        return acc;
      }, {});
    }
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingGivenPermissionStatsByQuery",
      err,
    );
  }
};

module.exports = getGivenPermissionCountByQuery;
