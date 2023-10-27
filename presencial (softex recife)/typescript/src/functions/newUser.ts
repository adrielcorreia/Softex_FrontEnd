import { User, arrayUsers, uniqueUserId } from "../interfaces";

export function newUser(user: User) {
    const id = uniqueUserId()
    const new_user: User = {
        id: id,
        informations: {
            name: user.informations.name,
            email: user.informations.email,
      }
  }

  if (!new_user.informations.email || !new_user.informations.name) {
        console.log('Um ou mais valores de um ou mais usuários não foram inseridos corretamente')
        return
  }
  
  arrayUsers.push(new_user);
  return new_user;
}