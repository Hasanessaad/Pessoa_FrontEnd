import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent {
  people = [
    { id: 1, name: 'Wellington', age: 30 },
    { id: 2, name: 'Willian', age: 25 },
    { id: 3, name: 'Guilherme :)', age: 19 },
    { id: 3, name: 'Guilherme :)', age: 39 },

  ];
}
