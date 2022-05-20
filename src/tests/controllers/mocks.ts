export const addNewTask = {
  request: { body: { task: 'new task', status: 'to do' } },
  created: {
    _id: '1',
    task: 'new task',
    status: 'to do',
    createdAt: new Date(),
  },
};
