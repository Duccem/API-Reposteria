import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { MenuService } from '../../Services/menu.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {DialogBodyComponent} from '../dialog-body/dialog-body.component';
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css'],
  providers: [MenuService]
})
export class MenusComponent implements OnInit {

     constructor(private menuService:MenuService,private dialog: MatDialog) { }
     selectedPrecio:number;
     precios:number[] = [5,10,15,20,25];
     imagen;
     ngOnInit() {
          this.getMenus();
          //this.cargarImagen();
     }
    /* cargarImagen(){
          
          this.menuService.getImage()
               .subscribe(data =>{
                    this.createImageFromBlob(data);
                    //this.isImageLoading = false;
               }, error =>{
                    console.log(error);
               });
          //console.log(this.imagen.name);
     }*/
     /*createImageFromBlob(image: Blob) {
          let reader = new FileReader();
          reader.addEventListener("load", () => {
             this.imagen = reader.result;
          }, false);
       
          if (image) {
             reader.readAsDataURL(image);
          }
       }*/
     getMenus(){
          this.menuService.getMenus()
               .subscribe(res =>{
                    this.menuService.menus = res as Menu[];
                    //console.log(res);
               });
     }
     FilterMenu(e:number){
          if(e!=0){
               this.menuService.getMenusFilter(e)
                    .subscribe(res=>{
                         this.menuService.menus = res as Menu[];
                         console.log(res);
                    });
          }else{
               this.getMenus();
          }

     }
     BuscarPlatillo(e){
          if(e.target.value!=""){
               this.menuService.getMenuByName(e.target.value)
                    .subscribe(res=>{
                         this.menuService.menus = res as Menu[];
                         console.log(res);
                    });
          }else{
               this.getMenus();
          }

     }
     openDialog(menu:Menu){
          const dialogConfig = new MatDialogConfig();
          this.menuService.selectedMenu = menu;
          dialogConfig.data = {
               name: menu.name,
               photo: menu.photo,
               price: menu.price
          }
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          dialogConfig.height = '350px';
          dialogConfig.width = '700px';
          this.dialog.open(DialogBodyComponent, dialogConfig);
     }
}
