import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'random-cards';
  users:any;
  constructor(private user:UserService,private toastr: ToastrService){}
  ngOnInit(): void {
    this.user.getUser().subscribe(
      (user:any)=>{
        console.log(user);
        
        this.users=user.results[0]
      },
      (error)=>{
        this.toastr.error("OOps! ")
      }
    )
  }

}
