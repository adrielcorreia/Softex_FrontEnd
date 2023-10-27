import { newUser } from "./src/functions/newUser"
import { newTask } from "./src/functions/newTask"
import { listTasks } from "./src/functions/listTasks"
import { completeTask } from "./src/functions/completeTask"
import { arrayTasks } from "./src/interfaces"
import { listUsers } from "./src/functions/listUsers"


const carlos = newUser({
    informations: {
        name: '',
        email: 'carlos@gmail.com'
    }
})

const marcos = newUser({
    informations: {
        name: 'Marcos',
        email: 'marcos@gmail.com'
    }
})

const lucas = newUser({
    informations: {
        name: 'Lucas',
        email: 'lucas@gmail.com'
    }
})

newTask({
    title: 'Limpar HD',
    description: 'Excluir arquivos desnecessários para liberar memória.',
    isDone: false
})

newTask({
    title: 'Criar API',
    description: 'Um backend estará responsável por criar uma API para o frontend usá-la',
    isDone: true,
    owner: marcos
})

newTask({
    title: '',
    description: 'asd',
    isDone: true,
    owner: lucas
})

listTasks()
completeTask(1)