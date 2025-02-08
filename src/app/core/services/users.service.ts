import { Injectable } from '@angular/core';

 export interface User {
  id: number,
  name: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   users: User[] = [
    {
      id: 1,
      name: "Mark King",
      email: "mark.king@example.com"
    },
    {
      id: 2,
      name: "Jhon Snow",
      email: "jhon.snow@example.com"
    }
  ];
  private nextID = 3;

  getUsers() : User[] {
    console.log('UserService: Возвращаем список пользователей');
    return [...this.users]
  };

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  };

  createUser(name: string, email: string): void {
    const newUser: User = { id: this.users.length + 1, name, email};
    this.users = [...this.users, newUser]
    console.log('User Createdasfdgsha', newUser); 
  };

  updateUser(id: number, data: Partial<User>): User | undefined {
    let updatedUser: User | undefined;

    this.users = this.users.map(user => {
      if (user.id === id) {
        updatedUser = {...user, ...data};
        return updatedUser;
      }
      return user;
    });
    return updatedUser;
  };

  deletedUser(id: number): void{
    const initialLength = this.users.length;
    this.users = this.users.filter(user => user.id !== id);

      if (this.users.length < initialLength) {
        console.log(`User with id ${id} deleted`);
      }
      else {
        console.log(`User with id ${id} not found`);
      }
  };

}


