import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

//este es un servicio el cual es una clase que puedo injectar en otros componentes o vistas

@Injectable({
  providedIn: 'root'
})
export class UserService {

  friends: User[]

  constructor(){
    let User1: User = {
      nick:'sergio',
      subnick: 'oquendo',
      age: 18,
      email: 'saoquendo5@gmail.com',
      friend: true,
      uid: '1',
      status: 'online'
    }

    let User2: User = {
      nick:'camilo',
      subnick: 'tabares',
      age: 19,
      email: 'ctr@gmail.com',
      friend: true,
      uid: '2',
      status: 'offline'
    }

    let User3: User = {
      nick:'andres',
      subnick: 'velez',
      age: 19,
      email: 'andres@gmail.com',
      friend: true,
      uid: '3',
      status: 'busy'
    }

    let User4: User = {
      nick:'jhonatan',
      subnick: 'lezcano',
      age: 19,
      email: 'jlezcano@gmail.com',
      friend: true,
      uid: '4',
      status: 'away'
    }

    let User5: User = {
      nick:'alexis',
      subnick: 'higita',
      age: 19,
      email: 'alexis@gmail.com',
      friend: false,
      uid: '5',
      status: 'online'
    };

    //acá referencio a friends y le paso mis usuarios 
    this.friends = [User1,User2,User3,User4,User5]

  }

  //creo un método para retornar los valores que tiene friends
  getFriends(){
    return this.friends
  }

}
