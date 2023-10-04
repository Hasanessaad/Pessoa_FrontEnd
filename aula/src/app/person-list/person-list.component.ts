import { Component } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  Pessoa = [
    { nome: 'Alice', idade: 25 },
    { nome: 'Bob', idade: 35 },
    { nome: 'Charlie', idade: 40 },
  ];
}
