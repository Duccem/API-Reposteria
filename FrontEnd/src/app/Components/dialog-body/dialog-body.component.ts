import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {
     name: string;
     photo: string;
     price: number;
     constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
          this.name = data.name;
          this.photo = data.photo;
          this.price = data.price;
     }

     ngOnInit() {
     }
}
