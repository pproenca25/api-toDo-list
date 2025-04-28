import { Response, Request } from "express";
import TaskService from "../services/TaskService";
import { ITask } from "../models/modelsTask";


const taskService = new TaskService

class TaskTodo{
    constructor(){

    }

    addTask(req: Request, res: Response){
        const {id, description, status, data} = req.body

        if( id && description && status && data){ //ja estou verificando todos os item se estao vaxios ou indefined, ou qualquercoisa
           if(status === 'in_progress' || status === 'completed'){ //verifica se o status é apenas 2
            const result = taskService.add(req.body)
            res.json(result)
            res.status(201)
           }else{
                res.json({error: 'invalid status: completed or in progress is required'}) //estou retornando erro caso o  valor enviado no status nao seja o pré definido(in_progress ou completed)
                res.status(401)
           }
            
        }else{
            res.json({error: 'invalid parameters'}) //estou retornando erro caso a requisição venha sem parametro algum.
            res.status(401)
        }

    }

    getTask(req: Request, res: Response){
        const {status} = req.query
        if(status && (status === 'in_progress' || status === 'completed')){ //verifico se veio vazio se nao veio vazio ou se veio com os parametros pré configurados
           
            const result = taskService.get(status)
            res.json(result)

        }else{
            res.status(401)
            res.json({error: "status parameters invalid"})
        }
        
    }

    getTaskId(req: Request, res: Response){
        const {id_task} = req.params
        
        
        if(id_task){
            const result = taskService.getById(id_task)

            res.json(result);
        }else{
            res.json({error: 'invalid id_task param'})
            res.status(401)
        }
    }


    updateTask(req: Request, res: Response){
        const {id_task} = req.params // pego o id da task mandada por url
        const {id, data, description, status} = req.body //pego todas as informações do body
        
        if(id_task  && id  && data  && description  && status ){ //verifico se nenhuma veio vazia ou indefinida
            if(status === 'in_progress' || status === 'completed'){ // verifico se o status é os dois previamente predefinidos
                const result = taskService.put(req.body, id_task) //mando para frente para o cormo e o id
                if(Object.keys(result).length > 0){ //estou verificando se dentro do objeto tem alguma coisa escrita objeto esse retornado o RESULT
                   res.json(result) 
                }else{
                    res.json({error: 'task not found'})
                }
                
            }else{
                res.status(401)
                res.json({error: 'invalid status, completed or in_progress'}) //retorna o erro do  status
                
            }
        }else{
            res.status(401)
            res.json({error: 'invalid parameters'})
            
        }
    }

    deleteTask(req: Request, res: Response){
        const {id_task} = req.params

        if(id_task){
            const result = taskService.delete(id_task)
            res.status(401).json(result)
           
        }else{
            res.status(401).json({error:'id_tasks is required in params'})
        }
    }
}

export default TaskTodo;