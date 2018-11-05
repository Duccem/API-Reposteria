import {MatButtonModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatButtonModule,MatSelectModule,MatInputModule,MatDialogModule,MatIconModule],
  exports: [MatButtonModule,MatSelectModule,MatInputModule,MatDialogModule,MatIconModule],
})
export class MaterialModule { }
