import Task from "../models/Task";

const TaskController = {};

TaskController.index = async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    res.render("index", {
      tasks,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};

TaskController.store = async (req, res) => {

  try {
   
    const newTask = new Task(req.body);
    await newTask.save();
    
    res.redirect('/');

  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }

};

TaskController.edit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }

};

TaskController.update = async (req, res) => {

  try {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }

};

TaskController.destroy = async (req, res) => {

  await Task.findByIdAndDelete(req.params.id);

  res.redirect('/');

};

TaskController.taskToggleDone = async (req, res, next) => {
  let { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};


export default TaskController;