import { Component, Input } from '@angular/core';

class User {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;

  constructor(name: string, firstName: string, age: number, quote: string,
    photo: string) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.photo = photo;
    this.quote = quote;
  }
}



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  user: User = new User('Doe', 'John', 25, '', 'https://randomuser.me/api/portraits/lego/2.jpg');



}
