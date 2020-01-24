export const apiRoutes = {
  users: {
    default: '/users',
    get: (id: number) => `${apiRoutes.users.default}/${id}`,
  }
};
