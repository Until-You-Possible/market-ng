import { Injectable } from '@angular/core';
import { ApiService } from "../../config/service";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api_key = "b01a93a08bf7484e85f815100e7a7bc1"
  fromObjet = {
    apiKey   : "b01a93a08bf7484e85f815100e7a7bc1",
    language : "en"
  }

  constructor(private apiService: ApiService) {
    // this.initSources()
  }

  initSources () {
    const url = "https://newsapi.org/v2/sources";
    this.apiService.get(url, this.fromObjet).subscribe(res => {
      console.log("res", res);
    })
  }
}
