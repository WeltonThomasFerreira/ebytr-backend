export const addNewTask = {
  request: { body: { task: 'new task', status: 'pendente' } },
  created: {
    _id: '1',
    task: 'new task',
    status: 'pendente',
    createdAt: new Date(),
  },
};

export const findAllTasks = {
  finded: [
    {
      _id: '1',
      task: 'task b',
      status: 'pendente',
      createdAt: new Date('2022-05-20T05:01:51.224Z'),
    },
    {
      _id: '2',
      task: 'task c',
      status: 'andamento',
      createdAt: new Date('2022-05-20T05:05:30.060Z'),
    },
    {
      _id: '3',
      task: 'task a',
      status: 'pronto',
      createdAt: new Date('2022-05-20T05:05:46.830Z'),
    },
  ],

  alpha: [
    {
      _id: '3',
      task: 'task a',
      status: 'pronto',
      createdAt: new Date('2022-05-20T05:05:46.830Z'),
    },
    {
      _id: '1',
      task: 'task b',
      status: 'pendente',
      createdAt: new Date('2022-05-20T05:01:51.224Z'),
    },
    {
      _id: '2',
      task: 'task c',
      status: 'andamento',
      createdAt: new Date('2022-05-20T05:05:30.060Z'),
    },
  ],
  newest: [
    {
      _id: '3',
      task: 'task a',
      status: 'pronto',
      createdAt: new Date('2022-05-20T05:05:46.830Z'),
    },
    {
      _id: '2',
      task: 'task c',
      status: 'andamento',
      createdAt: new Date('2022-05-20T05:05:30.060Z'),
    },
    {
      _id: '1',
      task: 'task b',
      status: 'pendente',
      createdAt: new Date('2022-05-20T05:01:51.224Z'),
    },
  ],
};
