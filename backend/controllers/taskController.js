const getTasks=(req, res) => {
    res.status(200).json({ message: "Get ALL tasks"})
}

const setTask=(req, res) => {
    if(!req.body || !req.body.text){
        res.status(400)
        throw new Error("Please enter a text");
    }
    res.status(200).json({ message: "Create task"})
}

const updateTask=(req, res) => {
    res.status(200).json({ message: "Update task"})
}


const deleteTask=(req, res) => {
    res.status(200).json({ message: "Delete task"})
}

module.exports = { getTasks,setTask,updateTask,deleteTask}
