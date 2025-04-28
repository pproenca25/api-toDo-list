import { ITask } from "../models/modelsTask";


class TaskRepository{
        private tasks: ITask[]

    constructor(){
        this.tasks = []

    }

    add(data: ITask){
        this.tasks.push(data)
        return data
    }

    get():ITask[]{
        
        return this.tasks
    }

    getById():ITask[]{
       
        return this.tasks
    }

    put(data: ITask, position: number): ITask{
        this.tasks[position] = data
        return data
    }

    delete(position: number){
        delete this.tasks[position]

        return position
    }
}

export default TaskRepository