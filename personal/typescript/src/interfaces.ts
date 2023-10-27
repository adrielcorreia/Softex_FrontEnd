export interface User {
    id?: number,
    informations: {
        name: string,
        email: string  
    }
}

export interface Task {
    readonly id?: number,
    title: string,
    description: string,
    isDone: boolean,
    owner?: User
    readonly date?: string
}

export const uniqueUserId = (id => {
    return () => {
        id++
        return id
    }
})(0)

export const uniqueTaskId = (id => {
    return () => {
        id++
        return id
    }
})(0)

export const arrayUsers:User[] = []
export const arrayTasks:Task[] = []