import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // 发起GET请求
  get<T>(url: string, params?: any): Observable<T> {
    let httpParams = new HttpParams({ fromObject: params });
    return this.http.get<T>(url, { params: httpParams }).pipe(
      retry(3), // 最多重试3次
      catchError(this.handleError)
    );
  }

  // 发起POST请求
  post<T>(url: string, body: any, customHeaders?: HttpHeaders): Observable<T> {
    let headers = customHeaders || new HttpHeaders();
    return this.http.post<T>(url, body, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // 发起PUT请求
  put<T>(url: string, body: any, customHeaders?: HttpHeaders): Observable<T> {
    let headers = customHeaders || new HttpHeaders();
    return this.http.put<T>(url, body, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // 发起DELETE请求
  delete<T>(url: string, customHeaders?: HttpHeaders): Observable<T> {
    let headers = customHeaders || new HttpHeaders();
    return this.http.delete<T>(url, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // 错误处理函数
  private handleError(error: any): Observable<never> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // 客户端错误
      errorMessage = `Client error: ${error.error.message}`;
    } else {
      // 服务端错误
      errorMessage = `Server error: ${error.status} - ${error.message || ''}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
