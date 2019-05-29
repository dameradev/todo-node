const Task = require('../models/task');

exports.getTasks = async (req, res, next) => {
  const tasks = await Task.find({});

  res.render('tasks/task-list', {
    pageTitle: "Todo list",
    path:"/task-list",
    tasks
  });
}
exports.postAddTask = async (req, res, next) => {
  const content = req.body.content;

  const task = new Task({
    content,
    userId: req.user._id
  });

  await task.save();

  res.redirect('/tasks/task-list');
}
exports.postFinishTask = async (req, res, next) => {
  const taskId = req.body.taskId;
  
  const task = await Task.findById(taskId);

  if (task.status === 'new') {
    task.status = 'finished';
  } else if (task.status === 'finished') {
    task.status = 'new';
  }
  await task.save();
  res.redirect('/tasks/task-list');
}
exports.postDeleteTask = (req, res, next) => {}