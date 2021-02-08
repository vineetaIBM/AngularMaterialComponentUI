import { NgModule } from '@angular/core';
import{MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatTableModule} from '@angular/material/table'; 
import { MatNativeDateModule } from '@angular/material/core';

const MaterialComponent=[MatButtonModule,
  MatButtonToggleModule,MatAutocompleteModule,
  MatIconModule,MatSelectModule,
  MatBadgeModule,MatFormFieldModule,MatInputModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,MatStepperModule,
  MatToolbarModule,MatTabsModule,MatCheckboxModule,
  MatMenuModule,MatListModule,MatDividerModule,MatCardModule,MatTooltipModule,MatSnackBarModule,
  MatGridListModule,MatExpansionModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule,
  MatDialogModule,MatTableModule
];
@NgModule({

  imports: [MaterialComponent],
  exports:[MaterialComponent]
})
export class MaterialModule { }
