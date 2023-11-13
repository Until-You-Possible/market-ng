import { Component, Input, OnInit } from '@angular/core';
import { UserApi } from "../../collectionURL/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() username! : string
  @Input() password! : string

  constructor(private userApi: UserApi) {}

  ngOnInit(): void {
    console.log("on init")
  }

  login() {
    const data = {
      username: this.username,
      password: this.password
    }
    const testData = {
      type: "username",
      string: "wg05"
    }
    this.userApi.checkUsernameExists(testData).subscribe((data: any) => {
      console.log("xx", data);
    })

  }

}
