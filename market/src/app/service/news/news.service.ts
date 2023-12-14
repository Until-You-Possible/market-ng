import { Injectable } from '@angular/core';
import { ApiService } from "../../config/service";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api_key = "b01a93a08bf7484e85f815100e7a7bc1"
  fromObject = {
    apiKey   : "b01a93a08bf7484e85f815100e7a7bc1",
    language : "en"
  }

  constructor(private apiService: ApiService) {
    // this.initSources()
  }

  initSources () {
    const url = "https://newsapi.org/v2/sources";
    return this.apiService.get(url, this.fromObject);
  }

  getArticlesById(source: string) {
    const getArticleFromObject = {
      sources: source,
      apikey: this.api_key
    }
    const url = "https://newsapi.org/v2/top-headless";
    return this.apiService.get(url, getArticleFromObject);
  }

  initArticles() {
    const articleFromObject = {
      sources: "techcrunch",
      apiKey: this.api_key
    }
    const url = "https://newsapi.org/v2/top-headlines";
    return this.apiService.get(url, articleFromObject);
  }

}
