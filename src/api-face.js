const { inject } = require("mindbricks-api-face");

module.exports = (app) => {
  const authUrl = (process.env.SERVICE_URL ?? "mindbricks.com").replace(
    process.env.SERVICE_SHORT_NAME,
    "auth",
  );

  const config = {
    name: "tickatme - auth",
    brand: {
      name: "tickatme",
      image: "https://mindbricks.com/images/logo-light.svg",
      moduleName: "auth",
    },
    auth: {
      url: authUrl,
    },
    dataObjects: [
      {
        name: "User",
        description:
          "A data object that stores the user information and handles login settings.",
        reference: {
          tableName: "user",
          properties: [
            {
              name: "email",
              type: "String",
            },

            {
              name: "password",
              type: "String",
            },

            {
              name: "fullname",
              type: "String",
            },

            {
              name: "avatar",
              type: "String",
            },

            {
              name: "roleId",
              type: "String",
            },

            {
              name: "emailVerified",
              type: "Boolean",
            },
          ],
          endpoints: [
            {
              isAuth: false,
              method: "POST",
              url: "/users",
              title: "registerUser",
              query: [],

              body: {
                type: "json",
                content: {
                  email: {
                    operator: "eq",
                    value: "String",
                  },
                  password: {
                    operator: "eq",
                    value: "String",
                  },
                  fullname: {
                    operator: "eq",
                    value: "String",
                  },
                  avatar: {
                    operator: "eq",
                    value: "String",
                  },
                  roleId: {
                    operator: "eq",
                    value: "String",
                  },
                  emailVerified: {
                    operator: "eq",
                    value: "Boolean",
                  },
                },
              },
              parameters: [],
              headers: [],
            },

            {
              isAuth: true,
              method: "PATCH",
              url: "/users/{userId}",
              title: "updateUser",
              query: [],

              body: {
                type: "json",
                content: {
                  password: {
                    operator: "eq",
                    value: "String",
                  },
                  fullname: {
                    operator: "eq",
                    value: "String",
                  },
                  avatar: {
                    operator: "eq",
                    value: "String",
                  },
                },
              },
              parameters: [
                {
                  key: "userId",
                  value: "",
                  description: "",
                },
              ],
              headers: [],
            },

            {
              isAuth: true,
              method: "PATCH",
              url: "/userroles/{userId}",
              title: "updateUserRole",
              query: [],

              body: {
                type: "json",
                content: {
                  roleId: {
                    operator: "eq",
                    value: "ID",
                  },
                },
              },
              parameters: [
                {
                  key: "userId",
                  value: "",
                  description: "",
                },
              ],
              headers: [],
            },

            {
              isAuth: true,
              method: "GET",
              url: "/users/{userId}",
              title: "getUser",
              query: [],

              body: {
                type: "json",
                content: {},
              },
              parameters: [
                {
                  key: "userId",
                  value: "",
                  description: "",
                },
              ],
              headers: [],
            },

            {
              isAuth: true,
              method: "GET",
              url: "/users",
              title: "listUsers",
              query: [],

              body: {
                type: "json",
                content: {},
              },
              parameters: [],
              headers: [],
            },
          ],
        },
      },

      {
        name: "GivenPermission",
        description:
          "A data object that stores the assigment of a specific named permission to a role, usergroup or user for a specific object or for general use.",
        reference: {
          tableName: "givenPermission",
          properties: [
            {
              name: "permissionName",
              type: "String",
            },

            {
              name: "roleId",
              type: "String",
            },

            {
              name: "subjectUserId",
              type: "String",
            },

            {
              name: "subjectUserGroupId",
              type: "String",
            },

            {
              name: "objectId",
              type: "String",
            },

            {
              name: "canDo",
              type: "Boolean",
            },
          ],
          endpoints: [
            {
              isAuth: true,
              method: "POST",
              url: "/givenpermissions",
              title: "createGivenPermission",
              query: [],

              body: {
                type: "json",
                content: {
                  permissionName: {
                    operator: "eq",
                    value: "String",
                  },
                  roleId: {
                    operator: "eq",
                    value: "String",
                  },
                  subjectUserId: {
                    operator: "eq",
                    value: "String",
                  },
                  subjectUserGroupId: {
                    operator: "eq",
                    value: "String",
                  },
                  objectId: {
                    operator: "eq",
                    value: "String",
                  },
                  canDo: {
                    operator: "eq",
                    value: "Boolean",
                  },
                },
              },
              parameters: [],
              headers: [],
            },

            {
              isAuth: true,
              method: "POST",
              url: "/rolepermissions",
              title: "createRolePermission",
              query: [],

              body: {
                type: "json",
                content: {
                  roleId: {
                    operator: "eq",
                    value: "String",
                  },
                  permissionName: {
                    operator: "eq",
                    value: "String",
                  },
                  canDo: {
                    operator: "eq",
                    value: "Boolean",
                  },
                },
              },
              parameters: [],
              headers: [],
            },

            {
              isAuth: true,
              method: "POST",
              url: "/userpermissions",
              title: "createUserPermission",
              query: [],

              body: {
                type: "json",
                content: {
                  subjectUserId: {
                    operator: "eq",
                    value: "ID",
                  },
                  permissionName: {
                    operator: "eq",
                    value: "String",
                  },
                  canDo: {
                    operator: "eq",
                    value: "Boolean",
                  },
                },
              },
              parameters: [],
              headers: [],
            },

            {
              isAuth: true,
              method: "POST",
              url: "/grouppermissions",
              title: "createGroupPermission",
              query: [],

              body: {
                type: "json",
                content: {
                  subjectUserGroupId: {
                    operator: "eq",
                    value: "ID",
                  },
                  permissionName: {
                    operator: "eq",
                    value: "String",
                  },
                  canDo: {
                    operator: "eq",
                    value: "Boolean",
                  },
                },
              },
              parameters: [],
              headers: [],
            },

            {
              isAuth: true,
              method: "POST",
              url: "/rolegrouppermissions",
              title: "createPermissionForRoleAndGroup",
              query: [],

              body: {
                type: "json",
                content: {
                  roleId: {
                    operator: "eq",
                    value: "String",
                  },
                  subjectUserGroupId: {
                    operator: "eq",
                    value: "ID",
                  },
                  permissionName: {
                    operator: "eq",
                    value: "String",
                  },
                  canDo: {
                    operator: "eq",
                    value: "Boolean",
                  },
                },
              },
              parameters: [],
              headers: [],
            },

            {
              isAuth: true,
              method: "POST",
              url: "/objectpermissions",
              title: "createObjectPermission",
              query: [],

              body: {
                type: "json",
                content: {
                  objectId: {
                    operator: "eq",
                    value: "ID",
                  },
                  subjectUserId: {
                    operator: "eq",
                    value: "ID",
                  },
                  permissionName: {
                    operator: "eq",
                    value: "String",
                  },
                  canDo: {
                    operator: "eq",
                    value: "Boolean",
                  },
                },
              },
              parameters: [],
              headers: [],
            },

            {
              isAuth: true,
              method: "POST",
              url: "/objectgrouppermissions",
              title: "createObjectPermissionForGroup",
              query: [],

              body: {
                type: "json",
                content: {
                  objectId: {
                    operator: "eq",
                    value: "ID",
                  },
                  subjectUserGroupId: {
                    operator: "eq",
                    value: "ID",
                  },
                  permissionName: {
                    operator: "eq",
                    value: "String",
                  },
                  canDo: {
                    operator: "eq",
                    value: "Boolean",
                  },
                },
              },
              parameters: [],
              headers: [],
            },

            {
              isAuth: true,
              method: "POST",
              url: "/objectrolepermissions",
              title: "createObjectPermissionForRole",
              query: [],

              body: {
                type: "json",
                content: {
                  objectId: {
                    operator: "eq",
                    value: "ID",
                  },
                  roleId: {
                    operator: "eq",
                    value: "String",
                  },
                  permissionName: {
                    operator: "eq",
                    value: "String",
                  },
                  canDo: {
                    operator: "eq",
                    value: "Boolean",
                  },
                },
              },
              parameters: [],
              headers: [],
            },

            {
              isAuth: true,
              method: "POST",
              url: "/objectgrouprolepermissions",
              title: "createObjectPermissionForRoleAndGroup",
              query: [],

              body: {
                type: "json",
                content: {
                  objectId: {
                    operator: "eq",
                    value: "ID",
                  },
                  roleId: {
                    operator: "eq",
                    value: "String",
                  },
                  subjectUserGroupId: {
                    operator: "eq",
                    value: "ID",
                  },
                  permissionName: {
                    operator: "eq",
                    value: "String",
                  },
                  canDo: {
                    operator: "eq",
                    value: "Boolean",
                  },
                },
              },
              parameters: [],
              headers: [],
            },

            {
              isAuth: true,
              method: "PATCH",
              url: "/givenpermissions/{givenPermissionId}",
              title: "updateGivenPermission",
              query: [],

              body: {
                type: "json",
                content: {
                  permissionName: {
                    operator: "eq",
                    value: "String",
                  },
                  roleId: {
                    operator: "eq",
                    value: "String",
                  },
                  subjectUserId: {
                    operator: "eq",
                    value: "String",
                  },
                  subjectUserGroupId: {
                    operator: "eq",
                    value: "String",
                  },
                  objectId: {
                    operator: "eq",
                    value: "String",
                  },
                  canDo: {
                    operator: "eq",
                    value: "Boolean",
                  },
                },
              },
              parameters: [
                {
                  key: "givenPermissionId",
                  value: "",
                  description: "",
                },
              ],
              headers: [],
            },

            {
              isAuth: true,
              method: "DELETE",
              url: "/givenpermissions/{givenPermissionId}",
              title: "deleteGivenPermission",
              query: [],

              body: {
                type: "json",
                content: {},
              },
              parameters: [
                {
                  key: "givenPermissionId",
                  value: "",
                  description: "",
                },
              ],
              headers: [],
            },

            {
              isAuth: true,
              method: "GET",
              url: "/givenpermissions/{givenPermissionId}",
              title: "getGivenPermission",
              query: [],

              body: {
                type: "json",
                content: {},
              },
              parameters: [
                {
                  key: "givenPermissionId",
                  value: "",
                  description: "",
                },
              ],
              headers: [],
            },

            {
              isAuth: true,
              method: "GET",
              url: "/givenpermissions",
              title: "listGivenPermissions",
              query: [],

              body: {
                type: "json",
                content: {},
              },
              parameters: [],
              headers: [],
            },
          ],
        },
      },
    ],
  };

  inject(app, config);
};
