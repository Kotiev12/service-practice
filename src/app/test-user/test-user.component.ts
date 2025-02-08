import { Component, OnInit } from '@angular/core';
import {  User, UsersService } from '../core/services/users.service';

@Component({
  selector: 'app-test-user',
  imports: [],
  templateUrl: './test-user.component.html',
  styleUrl: './test-user.component.scss'
})
export class TestUserComponent implements OnInit {


  constructor(private usersService: UsersService) {

  }
  
  ngOnInit(): void {
    const users = this.usersService.getUsers();
    console.log(users);
  }

  createUser(): void {
    const user = this.usersService.createUser(
      'Bob Green',
      'Bob.example.com'
    )    
  }

  getUsersById(id: number): void {
    this.usersService.getUserById(id)
    console.log('Возвращаем пользователя по id');
    } 
  
  addUser(name: string, email: string): void {
    console.log('addUser: Добавление нового пользователя', name, email);
    this.usersService.createUser(name, email);
  };

  updateUser(id: number, updateData: Partial<User>): void{
    const user = this.usersService.updateUser(id, {name:'Updated Snow', email:'Updated.Snow@example.com'})
    console.log('User update:', user);
  };

  deleteUser(id: number): void{
    console.log('deleteUser: удаление пользователя с id:', id);    
    this.usersService.deletedUser(id);
  }
};
