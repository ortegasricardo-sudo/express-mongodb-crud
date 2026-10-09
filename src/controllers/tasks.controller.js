import Task from "../models/Task.js";

export const renderTask = async (req, res) => {
  const tasks = await Task.find().lean();

  res.render("index", { tasks: tasks });
};

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);

    // const taskSaved = await task.save();
    await task.save();

    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();

    res.render("edit", { task });
  } catch (error) {
    console.log(error.message);
  }
};

export const editTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const taskToggleDone = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};
