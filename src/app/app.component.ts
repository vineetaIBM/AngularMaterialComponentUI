import { Component } from '@angular/core';
import{MatSnackBar} from '@angular/material/snack-bar';
import{MatDialog} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  //constructor(private snackbar: MatSnackBar){}
  constructor(private dialog: MatDialog){}
   // openSnackBar(message, action){
     //let snackBarRef= this.snackbar.open(message, action, {duration:2000});
     //snackBarRef.afterDismissed().subscribe(()=>{
       //console.log('The snackbar was dismissed');
     //});
     //snackBarRef.onAction().subscribe(()=>{
       //console.log('The snackbar action was triggered');
     //});
    //}
    openDialog(){
     let dialogref= this.dialog.open(DialogExampleComponent, {data:{name:'Vineeta'}});
     dialogref.afterClosed().subscribe(result=>{
       console.log('Dialog result:${result}');
     });
    }

  minDate = new Date();
  maxDate = new Date(2021, 1, 12); 
  //function to disable sat and sun
  dateFilter = date =>{
    const day = date.getDay();
    return day != 0 && day != 6;
  }

  selectedValue='select';
  title = 'MaterialAngularControlUI';
  notification =0;
  showSpinner = false;
  loadData(){
    this.showSpinner = true;
    setTimeout(()=>{
      this.showSpinner=false;
    },5000);
  }

  options:string[] =['Angular','React','Vue'];
  objectOptions=[{name:'Angular'},
  {name:'Angular Material'},
  {name:'React'},
  {name:'Vue'}];
 displayFn(subject: any):any{
   debugger;
  return subject? subject.name:'undefined';
}
}


