const { ServicePublisher } = require("serviceCommon");

// User Event Publisher Classes

// Publisher class for register-user route
const { UserRegisterredTopic } = require("./topics");
class UserRegisterredPublisher extends ServicePublisher {
  constructor(user, session, requestId) {
    super(UserRegisterredTopic, user, session, requestId);
  }

  static async Publish(user, session, requestId) {
    const publisher = new UserRegisterredPublisher(user, session, requestId);
    await publisher.publish();
  }
}

// Publisher class for update-user route
const { UserUpdatedTopic } = require("./topics");
class UserUpdatedPublisher extends ServicePublisher {
  constructor(user, session, requestId) {
    super(UserUpdatedTopic, user, session, requestId);
  }

  static async Publish(user, session, requestId) {
    const publisher = new UserUpdatedPublisher(user, session, requestId);
    await publisher.publish();
  }
}

// Publisher class for update-userrole route
const { UserroleUpdatedTopic } = require("./topics");
class UserroleUpdatedPublisher extends ServicePublisher {
  constructor(userrole, session, requestId) {
    super(UserroleUpdatedTopic, userrole, session, requestId);
  }

  static async Publish(userrole, session, requestId) {
    const publisher = new UserroleUpdatedPublisher(
      userrole,
      session,
      requestId,
    );
    await publisher.publish();
  }
}

// Publisher class for retrive-user route
const { UserRetrivedTopic } = require("./topics");
class UserRetrivedPublisher extends ServicePublisher {
  constructor(user, session, requestId) {
    super(UserRetrivedTopic, user, session, requestId);
  }

  static async Publish(user, session, requestId) {
    const publisher = new UserRetrivedPublisher(user, session, requestId);
    await publisher.publish();
  }
}

// Publisher class for list-users route
const { UsersListedTopic } = require("./topics");
class UsersListedPublisher extends ServicePublisher {
  constructor(users, session, requestId) {
    super(UsersListedTopic, users, session, requestId);
  }

  static async Publish(users, session, requestId) {
    const publisher = new UsersListedPublisher(users, session, requestId);
    await publisher.publish();
  }
}

// GivenPermission Event Publisher Classes

// Publisher class for create-givenpermission route
const { GivenpermissionCreatedTopic } = require("./topics");
class GivenpermissionCreatedPublisher extends ServicePublisher {
  constructor(givenpermission, session, requestId) {
    super(GivenpermissionCreatedTopic, givenpermission, session, requestId);
  }

  static async Publish(givenpermission, session, requestId) {
    const publisher = new GivenpermissionCreatedPublisher(
      givenpermission,
      session,
      requestId,
    );
    await publisher.publish();
  }
}

// Publisher class for create-rolepermission route
const { RolepermissionCreatedTopic } = require("./topics");
class RolepermissionCreatedPublisher extends ServicePublisher {
  constructor(rolepermission, session, requestId) {
    super(RolepermissionCreatedTopic, rolepermission, session, requestId);
  }

  static async Publish(rolepermission, session, requestId) {
    const publisher = new RolepermissionCreatedPublisher(
      rolepermission,
      session,
      requestId,
    );
    await publisher.publish();
  }
}

// Publisher class for create-userpermission route
const { UserpermissionCreatedTopic } = require("./topics");
class UserpermissionCreatedPublisher extends ServicePublisher {
  constructor(userpermission, session, requestId) {
    super(UserpermissionCreatedTopic, userpermission, session, requestId);
  }

  static async Publish(userpermission, session, requestId) {
    const publisher = new UserpermissionCreatedPublisher(
      userpermission,
      session,
      requestId,
    );
    await publisher.publish();
  }
}

// Publisher class for create-grouppermission route
const { GrouppermissionCreatedTopic } = require("./topics");
class GrouppermissionCreatedPublisher extends ServicePublisher {
  constructor(grouppermission, session, requestId) {
    super(GrouppermissionCreatedTopic, grouppermission, session, requestId);
  }

  static async Publish(grouppermission, session, requestId) {
    const publisher = new GrouppermissionCreatedPublisher(
      grouppermission,
      session,
      requestId,
    );
    await publisher.publish();
  }
}

// Publisher class for create-rolegrouppermission route
const { RolegrouppermissionCreatedTopic } = require("./topics");
class RolegrouppermissionCreatedPublisher extends ServicePublisher {
  constructor(rolegrouppermission, session, requestId) {
    super(
      RolegrouppermissionCreatedTopic,
      rolegrouppermission,
      session,
      requestId,
    );
  }

  static async Publish(rolegrouppermission, session, requestId) {
    const publisher = new RolegrouppermissionCreatedPublisher(
      rolegrouppermission,
      session,
      requestId,
    );
    await publisher.publish();
  }
}

// Publisher class for create-objectpermission route
const { ObjectpermissionCreatedTopic } = require("./topics");
class ObjectpermissionCreatedPublisher extends ServicePublisher {
  constructor(objectpermission, session, requestId) {
    super(ObjectpermissionCreatedTopic, objectpermission, session, requestId);
  }

  static async Publish(objectpermission, session, requestId) {
    const publisher = new ObjectpermissionCreatedPublisher(
      objectpermission,
      session,
      requestId,
    );
    await publisher.publish();
  }
}

// Publisher class for create-objectgrouppermission route
const { ObjectgrouppermissionCreatedTopic } = require("./topics");
class ObjectgrouppermissionCreatedPublisher extends ServicePublisher {
  constructor(objectgrouppermission, session, requestId) {
    super(
      ObjectgrouppermissionCreatedTopic,
      objectgrouppermission,
      session,
      requestId,
    );
  }

  static async Publish(objectgrouppermission, session, requestId) {
    const publisher = new ObjectgrouppermissionCreatedPublisher(
      objectgrouppermission,
      session,
      requestId,
    );
    await publisher.publish();
  }
}

// Publisher class for create-objectrolepermission route
const { ObjectrolepermissionCreatedTopic } = require("./topics");
class ObjectrolepermissionCreatedPublisher extends ServicePublisher {
  constructor(objectrolepermission, session, requestId) {
    super(
      ObjectrolepermissionCreatedTopic,
      objectrolepermission,
      session,
      requestId,
    );
  }

  static async Publish(objectrolepermission, session, requestId) {
    const publisher = new ObjectrolepermissionCreatedPublisher(
      objectrolepermission,
      session,
      requestId,
    );
    await publisher.publish();
  }
}

// Publisher class for create-objectgrouprolepermission route
const { ObjectgrouprolepermissionCreatedTopic } = require("./topics");
class ObjectgrouprolepermissionCreatedPublisher extends ServicePublisher {
  constructor(objectgrouprolepermission, session, requestId) {
    super(
      ObjectgrouprolepermissionCreatedTopic,
      objectgrouprolepermission,
      session,
      requestId,
    );
  }

  static async Publish(objectgrouprolepermission, session, requestId) {
    const publisher = new ObjectgrouprolepermissionCreatedPublisher(
      objectgrouprolepermission,
      session,
      requestId,
    );
    await publisher.publish();
  }
}

// Publisher class for update-givenpermission route
const { GivenpermissionUpdatedTopic } = require("./topics");
class GivenpermissionUpdatedPublisher extends ServicePublisher {
  constructor(givenpermission, session, requestId) {
    super(GivenpermissionUpdatedTopic, givenpermission, session, requestId);
  }

  static async Publish(givenpermission, session, requestId) {
    const publisher = new GivenpermissionUpdatedPublisher(
      givenpermission,
      session,
      requestId,
    );
    await publisher.publish();
  }
}

// Publisher class for delete-givenpermission route
const { GivenpermissionDeletedTopic } = require("./topics");
class GivenpermissionDeletedPublisher extends ServicePublisher {
  constructor(givenpermission, session, requestId) {
    super(GivenpermissionDeletedTopic, givenpermission, session, requestId);
  }

  static async Publish(givenpermission, session, requestId) {
    const publisher = new GivenpermissionDeletedPublisher(
      givenpermission,
      session,
      requestId,
    );
    await publisher.publish();
  }
}

// Publisher class for retrive-givenpermission route
const { GivenpermissionRetrivedTopic } = require("./topics");
class GivenpermissionRetrivedPublisher extends ServicePublisher {
  constructor(givenpermission, session, requestId) {
    super(GivenpermissionRetrivedTopic, givenpermission, session, requestId);
  }

  static async Publish(givenpermission, session, requestId) {
    const publisher = new GivenpermissionRetrivedPublisher(
      givenpermission,
      session,
      requestId,
    );
    await publisher.publish();
  }
}

// Publisher class for list-givenpermissions route
const { GivenpermissionsListedTopic } = require("./topics");
class GivenpermissionsListedPublisher extends ServicePublisher {
  constructor(givenpermissions, session, requestId) {
    super(GivenpermissionsListedTopic, givenpermissions, session, requestId);
  }

  static async Publish(givenpermissions, session, requestId) {
    const publisher = new GivenpermissionsListedPublisher(
      givenpermissions,
      session,
      requestId,
    );
    await publisher.publish();
  }
}

module.exports = {
  UserRegisterredPublisher,
  UserUpdatedPublisher,
  UserroleUpdatedPublisher,
  UserRetrivedPublisher,
  UsersListedPublisher,
  GivenpermissionCreatedPublisher,
  RolepermissionCreatedPublisher,
  UserpermissionCreatedPublisher,
  GrouppermissionCreatedPublisher,
  RolegrouppermissionCreatedPublisher,
  ObjectpermissionCreatedPublisher,
  ObjectgrouppermissionCreatedPublisher,
  ObjectrolepermissionCreatedPublisher,
  ObjectgrouprolepermissionCreatedPublisher,
  GivenpermissionUpdatedPublisher,
  GivenpermissionDeletedPublisher,
  GivenpermissionRetrivedPublisher,
  GivenpermissionsListedPublisher,
};
