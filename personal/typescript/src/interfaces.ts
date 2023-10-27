export interface User {
    id?: string,
    informations: {
        name: string,
        email: string  
    }
}

export interface Task {
    readonly id?: string,
    title: string,
    description: string,
    isDone: boolean,
    owner?: User
    readonly date?: string
}

export const uniqueUserId = (id => {
    return () => {
        id++
        return `user${id}`
    }
})(0)

export const uniqueTaskId = (id => {
    return () => {
        id++
        return `task${id}`
    }
})(0)

export const arrayUsers:User[] = []
export const arrayTasks:Task[] = []