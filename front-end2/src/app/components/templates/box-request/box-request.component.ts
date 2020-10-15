import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MerakiReq } from '../../models/merakiReq.model'



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




  constructor() { }

  ngOnInit(): void {
  }

}
