import { ApiService } from "../config/service";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})

export class UserApi {
  constructor(private apiService: ApiService) {}
  // URLs
  // login
  private loginURL            : string = "/user/login.do";
  // 检查用户名是否存在(有效)
  private checkNameValidURL   : string = "/user/check_valid.do";
  // register
  private  userRegisterURL    : string = "/user/register.do";
  // 检查登陆状态
  private checkUserLoginURL   : string = "/user/get_user_info.do";
  // get user's question
  private  userQuestionURL    : string = "/user/forget_get_question.do";
  // check the answer for last question
  private  userAnswerURL      : string = "/user/forget_check_answer.do";
  // reset the password
  private  setUserPasswordURL : string = "/user/forget_reset_password.do";
  // get user info
  private userInfoURL         : string = "/user/get_information.do";
  // update personal info
  private updateInfoURL       : string = "/user/update_information.do";
  // update password when you logged
  private updatedPasswordURL  : string = "/user/reset_password.do";
  // log out
  private logOutURL           : string = "/user/logout.do";

  // test
  private  testULR: string = "/cart/get_cart_product_count.do"

  public checkUsernameExists(testData: any): any {
    return this.apiService.post(environment.basicURL + "/api" + this.checkNameValidURL, testData);
  }

}
