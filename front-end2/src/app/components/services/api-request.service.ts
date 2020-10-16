import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

import { Observable } from 'rxjs';
import { MerakiReq } from '../models/merakiReq.model';

@Injectable({
  providedIn: 'root'
})

export class ApiRequestService {
  baseUrl = 'https://localhost:4200/api'

  constructor(private snakeBar: MatSnackBar, private http: HttpClient) { }

  showAlert(msg: string): void {
    this.snakeBar.open(msg, 'X', {
      duration: 2500,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  makeRequest(merakiReq: MerakiReq): Observable<MerakiReq>{
    return this.http.post<MerakiReq>(this.baseUrl, merakiReq);
  }
}
