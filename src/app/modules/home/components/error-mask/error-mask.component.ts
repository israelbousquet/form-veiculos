import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-mask',
  templateUrl: './error-mask.component.html',
  styleUrls: ['./error-mask.component.css']
})
export class ErrorMaskComponent implements OnInit {

  @Input() maskLength!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
