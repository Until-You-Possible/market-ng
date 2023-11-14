import { Component, Input, OnInit } from '@angular/core';
import { UserApi } from "../../collectionURL/user";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() username! : string
  @Input() password! : string

  constructor(private userApi: UserApi, private http: HttpClient) {}

  ngOnInit(): void {
    console.log("on init")
  }

  login() {
    let data = {
      username: this.username,
      password: this.password
    }
    const testData = {
      type: "username",
      str: "wg05"
    }
    const formData = new FormData();
    formData.append('type', 'username'); // 添加参数到 FormData
    formData.append('str', 'wg05');

    this.userApi.checkUsernameExists(formData).subscribe((data: any) => {
      console.log("xx", data);
    })

  }

}
