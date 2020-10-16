import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiRequestService } from '../../services/api-request.service';
import { MerakiReq } from '../../models/merakiReq.model';


@Component({
  selector: 'app-box-request',
  templateUrl: './box-request.component.html',
  styleUrls: ['./box-request.component.css']
})

export class BoxRequestComponent implements OnInit {

  merakiReq: MerakiReq = {
    networkID: '',
    authKEY: ''
  };
  
  constructor(private apiRequestService: ApiRequestService) {};


  ngOnInit(): void {
  }

  makeRequest(): void {
    this.apiRequestService.makeRequest(this.merakiReq).subscribe(() => {
      this.apiRequestService.showAlert('Requisição feita com sucesso!');
    });
  }
}
