import { User, Task, arrayUsers, arrayTasks, uniqueTaskId } from "../interfaces";

export function newTask(task: Task) {
    const id = uniqueTaskId()

    try {
        const new_task = {
            id: id,
            title: task.title,
            description: task.description,
            isDone: task.isDone,
            owner: task.owner,
            date: new Date().toLocaleString('pt-br')
        }

        if (!arrayUsers.includes(new_task.owner!)) {
            console.log(`A tarefa "${new_task.title}" não possui um responsável registrado.`)
        }

        if (!new_task.title || !new_task.description) {
            console.log('Um ou mais valores de uma ou mais tarefas não foram inseridos corretamente\n')
            return
        }

        arrayTasks.push(new_task)
        return new_task;

    } catch(err) {
        console.log(err)
    }
}