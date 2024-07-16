import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-toast',
  templateUrl: './custom-toast.component.html',
  styleUrls: ['./custom-toast.component.scss']
})
export class CustomToastComponent implements OnInit {

  @Input() message: string;
  @Input() messageType: string;

  constructor() { }

  ngOnInit() {
  }

}
