import { Component, OnInit,Input } from '@angular/core';
import { Province } from '../province';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Inject} from '@angular/core';



@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {
 @Input() provList!:Province[];
  displayedColumns = ['name', 'capital', 'population', 'code'];
 

  constructor(public dialog:MatDialog) {

   }
   openDialog(inputcode:string){
     for(let prov of this.provList){
      if(prov.code===inputcode){
          
          this.dialog.open(DialogBoxComponent,{data:prov.majorCities})
     
      
        
      }
    }
    

   }

  ngOnInit(): void {
  }

}
