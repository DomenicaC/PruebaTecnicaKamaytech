import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bienvenido al CRUD del usuario \n Para ingresar a las diferentes funcionalidades ingrese en el link los siguientes comandos \n' +
            '------------------------------------------------------------- \n'+
            '| Crear nuevo usuario \t | /user/create                     | \n' +
            '------------------------------------------------------------- \n'+
            '| Actualizar un usuario | /user/updateUser?userID="userID" | \n' +
            '------------------------------------------------------------- \n'+
            '| Eliminar usuario | /user/deleteUser?userID="userID" | \n' +
            '------------------------------------------------------------- \n'+
            '| Buscar usuario por ID | /user/getUser/"userID" | \n' +
            '------------------------------------------------------------- \n'+
            '| Listar todos los usuarios | /user/getUsers | \n' ;
            '------------------------------------------------------------- \n'
  }
}
