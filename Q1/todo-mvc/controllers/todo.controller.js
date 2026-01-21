import{readTodos,writeTodos} from "../models/todo.model.js";
export const getTodos=(req,res)=>{
    try{
        const todos=readTodos();
        res.status(200).json(todos);
    }catch(error){
        res.status(500).json({message:"Error fetching todos"});
    }
};
export const addTodo=(req,res)=>{
    try{
        const todos=readTodos();
        const newTodo={
            id:Date.now(),
            title:req.body.title,
            completed:false
        };
        todos.push(newTodo);
        writeTodos(todos);
        res.status(201).json(newTodo);
    }catch(error){
        res.status(500).json({message:"Error adding todo"});
    }
};
export const deleteTodo=(req,res)=>{
    try{
        const id=Number(req.params.id);
        let todos=readTodos();
        todos=todos.filter(todo=>todo.id!==id);
        writeTodos(todos);
        res.status(200).json({message:"Todo deleted"});
    }catch(error){
        res.status(500).json({message:"Error deleting todo"});
    }
};