import { Component, Input, OnInit } from '@angular/core';
import { UserApi } from "../../collectionURL/user";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() username! : string
  @Input() password! : string

  constructor(private userApi: UserApi, private router: Router) {
    this.username = "wg05";
    this.password = "123456"
  }

  ngOnInit(): void {
    console.log("on init")
  }

  login() {
    const userFormData = new FormData();
    userFormData.append("username", this.username);
    userFormData.append("password", this.password);
    this.userApi.login(userFormData).subscribe((res: any) => {
      if (res.status === 0) {
        this.router.navigate(["/home"])
      }
    });
  }
}
