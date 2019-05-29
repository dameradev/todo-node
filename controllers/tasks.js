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
exports.postFinishTask = (req, res, next) =>{}
exports.postDeleteTask = (req, res, next) =>{}