import { Task, arrayTasks } from "../interfaces";

export function completeTask(id:number) {
    const task = (element:Task) => element.id == id
    const index:number = arrayTasks.findIndex(task)
    const taskFinded = arrayTasks[index]
    
    taskFinded.isDone = true
    console.log(`A tarefa "${taskFinded.title}" foi concluída.`)
}