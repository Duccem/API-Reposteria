import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../models/menu';
import { MenusComponent } from '../Components/menus/menus.component';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
     selectedMenu: Menu;//el menu seleccionado
     menus: Menu[];//arreglo de menus devuelto
     readonly URL_API = 'http://localhost:3000/api/menu';//URL de la URL_API

     //Contructor
     constructor(private http: HttpClient) {
          this.selectedMenu = new Menu();
     }

     getMenus(){//retorna todos los menus
          return this.http.get(this.URL_API);
     }
     getMenusFilter(e:number){
          console.log(e);
          return this.http.get(this.URL_API+'/filter/'+e);
     }
     getMenuByName(e:string){
          console.log(e);
          return this.http.get(this.URL_API+'/menu/'+e);
     }
     postMenu(menu: Menu){//crea un menu nuevo
          return this.http.post(this.URL_API,Menu);
     }
     putMenu(menu: Menu){//edita un menu
          return this.http.put(this.URL_API+'/${Menu._id}',menu);
     }
     deleteMenu(_id: string){//elimina un menu
          return this.http.delete(this.URL_API+'${_id}');
     }
}
