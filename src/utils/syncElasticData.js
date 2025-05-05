const { getUserById } = require("dbLayer");
const { getGivenPermissionById } = require("dbLayer");
const User = require("models");
const GivenPermission = require("models");
const path = require("path");
const fs = require("fs");
const { ElasticIndexer } = require("serviceCommon");
const { Op } = require("sequelize");

const indexUserData = async () => {
  const userIndexer = new ElasticIndexer("user", { isSilent: true });
  console.log("Starting to update indexes for User");

  const idListData = await User.findAll({
    attributes: ["id"],
  });
  const idList = idListData ? idListData.map((item) => item.id) : [];
  const chunkSize = 500;
  let total = 0;
  for (let i = 0; i < idList.length; i += chunkSize) {
    const chunk = idList.slice(i, i + chunkSize);
    const dataList = await getUserById(chunk);
    if (dataList.length) {
      await userIndexer.indexBulkData(dataList);
      await userIndexer.deleteRedisCache();
    }
    total += dataList.length;
  }

  return total;
};

const indexGivenPermissionData = async () => {
  const givenPermissionIndexer = new ElasticIndexer("givenPermission", {
    isSilent: true,
  });
  console.log("Starting to update indexes for GivenPermission");

  const idListData = await GivenPermission.findAll({
    attributes: ["id"],
  });
  const idList = idListData ? idListData.map((item) => item.id) : [];
  const chunkSize = 500;
  let total = 0;
  for (let i = 0; i < idList.length; i += chunkSize) {
    const chunk = idList.slice(i, i + chunkSize);
    const dataList = await getGivenPermissionById(chunk);
    if (dataList.length) {
      await givenPermissionIndexer.indexBulkData(dataList);
      await givenPermissionIndexer.deleteRedisCache();
    }
    total += dataList.length;
  }

  return total;
};

const syncElasticIndexData = async () => {
  const startTime = new Date();
  console.log("syncElasticIndexData started", startTime);

  try {
    const dataCount = await indexUserData();
    console.log("User agregated data is indexed, total users:", dataCount);
  } catch (err) {
    console.log("Elastic Index Error When Syncing User data", err.toString());
    hexaLogger.insertError(
      "ElasticIndexInitError",
      { function: "indexUserData" },
      "syncElasticIndexData.js->indexUserData",
      err,
    );
  }

  try {
    const dataCount = await indexGivenPermissionData();
    console.log(
      "GivenPermission agregated data is indexed, total givenPermissions:",
      dataCount,
    );
  } catch (err) {
    console.log(
      "Elastic Index Error When Syncing GivenPermission data",
      err.toString(),
    );
    hexaLogger.insertError(
      "ElasticIndexInitError",
      { function: "indexGivenPermissionData" },
      "syncElasticIndexData.js->indexGivenPermissionData",
      err,
    );
  }

  const elapsedTime = new Date() - startTime;
  console.log("initElasticIndexData ended -> elapsedTime:", elapsedTime);
};

module.exports = syncElasticIndexData;
