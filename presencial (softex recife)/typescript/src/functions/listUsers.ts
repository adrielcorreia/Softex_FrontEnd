import { User, arrayUsers } from '../interfaces'

export function listUsers(type: void) {
    console.log("Lista de usuários: \n");
  
    const show_info = (User:User) => {
        return (
            `ID: ${User.id}\n` +
            `Nome: ${User.informations.name}\n` +
            `Email: ${User.informations.email}\n`
        )
    }
  
    for (const user of arrayUsers) {
        console.log(show_info(user))
    }
    return
}