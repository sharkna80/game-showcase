import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

@NgModule({
  declarations: [
  ],
  imports: [
    MatButtonModule,
    FormsModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  exports:[ MatButtonModule,
    FormsModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule,
  NgxSkeletonLoaderModule]
})
export class SharedModule { }
