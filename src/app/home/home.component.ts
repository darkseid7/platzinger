import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  // constructor() {
  //   // //así es como defino los tipos de variables en TypeScript
  //   // let a: number = 1
  //   // let b: number = 1

  //   // let c: string = '1'
  //   // let d: string = '2'

  //   // let e: boolean = true
  //   // let f: object = [{ nombre: 'sergio', age: 16 }, {nombre: 'andrés', age: 18}]

  //   // console.log(a+b)

  //   // console.log(c+d)

  //   // console.log(f)

  //   // let i = [a, b, c, d, e, f]

  //   // console.log(i)

  //   // //tipo de dato any, que puede ser literalmente cualquier cosa 
  //   // let h : any = [1, 'sadas', {}, [1,5,3]]
    
  //   // console.log(h)
  // }
  
  
  
  
  
  
  // creo una variable llamada friends que va a ser igual a User importado de la interfaz user
  friends: User[]
    constructor(private userService: UserService){
      //aquí mi variable friends pasa a tener los datos que están en el servicio nuevamente
      this.friends = userService.getFriends()

    }

   

  ngOnInit() {
  }

}
