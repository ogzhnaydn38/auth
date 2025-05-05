const { QueryCache, QueryCacheInvalidator } = require("common");

const { Op } = require("sequelize");

class GivenPermissionQueryCache extends QueryCache {
  constructor(input, wClause) {
    super("givenPermission", [], Op.and, Op.eq, input, wClause);
  }
}
class GivenPermissionQueryCacheInvalidator extends QueryCacheInvalidator {
  constructor() {
    super("givenPermission", []);
  }
}

module.exports = {
  GivenPermissionQueryCache,
  GivenPermissionQueryCacheInvalidator,
};
