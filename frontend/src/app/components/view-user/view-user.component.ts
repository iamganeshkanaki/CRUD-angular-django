import { Component } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  standalone: true,
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css',
})
export class ViewUserComponent {
  users: any | undefined;
  constructor(private userSerivce: UsersService) {}

  ngOnInIt(): void {
    this.userSerivce.getUsers().subscribe(data=>{
      this.users = data
      console.log(data);
    })
  }

  deleteUser(id:number){
    this.userSerivce.deleteUser(id).subscribe(data=>{
      this.users = data;
      this.ngOnInIt();
    })
  }
}
