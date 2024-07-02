import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css',
})
export class UpdateUserComponent {
  user: any;
  data: any;
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void{
    let id = this.route.snapshot.params['id']
    this.userService.getUserByID(id).subscribe(data=>{
      this.user = data;
      console.log(data);
    })
  }
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required)
  })
  submit(){
    this.data = this.form.value
    this.user.name = this.data.name
    this.user.email = this.data.email
    // this.user.gender = this.data.gender

    console.log(this.data);

    this.userService.updateUser(this.user?.id,this.user).subscribe(data=>{
      console.log(data);
    })
    this.router.navigate(['/'])
  }
}
