import { beforeEach } from 'mocha';
import { expect } from 'chai';
import * as sinnon from 'sinon';

import AddNewTaskController from '../../controllers/addNewTaskController';
import TaskModel from '../../models/taskModel';
import TaskService from '../../services/taskService';
import { addNewTask } from './mocks';

const taskModel = new TaskModel();
const taskService = new TaskService();

describe('Add new task', () => {
  const { request, created } = addNewTask;
  const sut = new AddNewTaskController(taskService, taskModel);
  const createStub = sinnon.stub(taskModel, 'create');
  const validateBodyStub = sinnon.stub(taskService, 'validateBody');

  beforeEach(async () => {
    createStub.resolves(created);
    validateBodyStub.resolves(null);
  });

  after(async () => {
    createStub.restore();
    validateBodyStub.restore();
  });

  it('Return task created successfully', async () => {
    const response = await sut.handle(request);
    expect(response.statusCode).equal(201);
    expect(response.body).deep.equal(created);
  });

  it('Return bad request error', async () => {
    validateBodyStub.resolves(new Error('Bad request'));
    const response = await sut.handle(request);
    expect(response.statusCode).equal(400);
  });

  it('Return server error', async () => {
    createStub.throwsException('Server Error');
    const response = await sut.handle(request);
    expect(response.statusCode).equal(500);
  });
});
