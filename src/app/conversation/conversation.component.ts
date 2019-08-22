import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  //aquí estoy tomando todos los parámetros que yo mando a la url
  friendId: any
  friends: User[]
  friend: User
  numero: number = 1.123456789
  today: any = Date.now()

  constructor(private activatedRoute: ActivatedRoute, userService: UserService) {
    //injecto los datos a la variable friends
    this.friends = userService.getFriends()
    //me robo el valor del parámetro
    this.friendId = this.activatedRoute.snapshot.params['uid']
    console.log(this.friendId)

    //entro a todos los datos que me trae el parámetro por el UID
    this.friend = this.friends.find((record) => {
      return record.uid == this.friendId;
    })
    console.log(this.friend)
   }

  ngOnInit() {
  }

}
