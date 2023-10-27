import { Task, arrayTasks } from '../interfaces'

export function listTasks(type: void) {
    console.log("Lista das tarefas: \n");
  
    const show_info = (task:Task) => {
        const ownerName = task.owner?.informations.name
        return (
            `ID: ${task.id}\n` +
            `Título: ${task.title}\n` +
            `Descrição: ${task.description}\n` +
            `Concluída: ${task.isDone? 'Sim': 'Não'}\n` +
            `Responsável: ${ownerName? ownerName : 'Não registrado'}\n` +
            `Data de criação: ${task.date}\n`
        )
    }
  
    for (const tsk of arrayTasks) {
        console.log(show_info(tsk))
    }

    return
}