// this code was to change user when we click on that user name button

// import { Component, signal, computed } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const  randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
// @Component({
//   selector: 'app-user',
//   standalone: true,
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })
// export class UserComponent {
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//   imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar )

//   // this will be used in non-signal project:
//   // get imagePath() {
//   //   return 'assets/users/' + this.selectedUser.avatar;
//   // }

//   onSelectUser() {
//     const  randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   }
// }

import {
  Component,
  Input,
  input,
  computed,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

// with interface, you can only define object types, but with the type keyword, you can also define other types

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  // this is how we handle the input data that we get from outside the component
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // Accepting object as input
  // @Input({ required: true }) user!: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // };

  // OR

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  // this is what we do to handle the part where we want to send output or emit some data from the component.
  // i.e. this is how we can emit our own events
  // i.e. how we mostly create outputs in our angular projects.

  // we can also add type information to EventEmitter: @Output() select = new EventEmitter<string>();
  // to let typescript and Angular know about the type of value we will be emitting. (for extra type safety)
  @Output() select = new EventEmitter();

  // modern way of creating the outputs in angular projects.
  // this output funtion does not create any kind of signal
  // select = output<string>();

  // This is modern method of how we handle the input data that we get from outside the component (signal based inputs)

  // this input() signal is readonly, i.e. we cannot change or assign value for input()
  // inside this component where the inputs are registered,
  // but it will change if the value is changed outside this component where the inputs are registered.

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // this is how we can handle
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
