import { beforeEach } from 'mocha';
import { expect } from 'chai';
import * as sinnon from 'sinon';

import AddNewTaskController from '../../controllers/addNewTaskController';
import FindAllTasksController from '../../controllers/findAllTasksController';
import TaskModel from '../../models/taskModel';
import TaskService from '../../services/taskService';
import { addNewTask, findAllTasks } from './mocks';

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

describe('Find all tasks', () => {
  const { finded, alpha, newest } = findAllTasks;
  const sut = new FindAllTasksController(taskModel);
  const readStub = sinnon.stub(taskModel, 'read');

  beforeEach(async () => {
    readStub.resolves(finded);
  });

  after(async () => {
    readStub.restore();
  });

  it('Return tasks successfully', async () => {
    const request = { query: {} };
    const response = await sut.handle(request);
    expect(response.statusCode).equal(200);
    expect(response.body).deep.equal(finded);
  });

  it('Return tasks in alphabetic order', async () => {
    readStub.resolves(alpha);
    const request = { query: { sort: 'alpha' } };
    const response = await sut.handle(request);
    expect(response.statusCode).equal(200);
    expect(response.body).deep.equal(alpha);
  });

  it('Return tasks in order of most recent', async () => {
    readStub.resolves(newest);
    const request = { query: { sort: 'new' } };
    const response = await sut.handle(request);
    expect(response.statusCode).equal(200);
    expect(response.body).deep.equal(newest);
  });

  it('Return server error', async () => {
    const request = { query: {} };
    readStub.throwsException('Server Error');
    const response = await sut.handle(request);
    expect(response.statusCode).equal(500);
  });
});
