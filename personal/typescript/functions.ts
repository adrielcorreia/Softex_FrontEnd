import { User, Task } from "./interfaces"

function generate_id() {
    return Math.floor(Math.random() * (2000 - 1000) + 1000)
}

export function newUser(config: User): {name:string, email:string} {
    config.id = generate_id()

    let user = {name:"", email:""}
    if (config.name) {user.name = config.name}
    if (config.email) {user.email = config.email}

    return user
}

export function newTask(config: Task): {title: string, description: string, done:boolean, owner?:User} {
    let task = {title: "", description: "", done:false}

    task.title = config.title
    task.description = config.description
    task.done = config.done
    
    return task
}