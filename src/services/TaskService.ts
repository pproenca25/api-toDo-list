import { ITask } from "../models/modelsTask"
import TaskRepository from "../repositories/TaskRepository"

const taskRepository = new TaskRepository

class TaskService{
    constructor(){

    }

    add(data: ITask):ITask{
        const result = taskRepository.add(data)
        return result
    }

    get(status: string) {
        const result = taskRepository.get()  //recebendo a resposta do repositorio
        const tasksResult: ITask[] = [] //recebendo o resultado do map da filtragem dos dados para saber se existe o parametro que foi enviado pelo front
       result.map((obj) =>{
        if(obj.status === status){ //verifica o parametro
            tasksResult.push(obj) //adiciona a task caso ela passe na condição
        }
       })
       
        return tasksResult
    }

    getById(id_task: string): ITask | {} { // retorna uma task ou um objeto vazio
        const result = taskRepository.getById()
        let taskResult = {}
           result.map((obj) => {
                if(obj.id === id_task){
                    taskResult = obj
                } 
            })
            return taskResult
    }

    getIndexById(id_task: string): number{ //busca a posição no array, posisão do index
        const result = taskRepository.getById()
        let position = 99999999; //coloco uma posição que nunca vai ter 

        result.map((obj, index) =>{ //verifica a posição de cada item
            if(obj.id === id_task){
                position = index //alimenta a variavel position com a posição do item encontrado
            }

        })
        return position
    }

    put(data :ITask, id_task: string){
    const position = this.getIndexById(id_task) //chama a função de pegar index mandando o id da task
    
        if(position !== 99999999){
           return taskRepository.put(data, position) //retornando a resposta do repositorio
        }else{
            return {}
        }

       
        
    }

    delete(id_task: string){
        const position = this.getIndexById(id_task) //buscando a posição
        if(position !== 99999999){
            return taskRepository.delete(position)
        }else{
            return {}
        }
    }
}

export default TaskService