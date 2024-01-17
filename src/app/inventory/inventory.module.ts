import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { CentralInventoryComponent } from './central-inventory/central-inventory.component';
import { ProvincialinventoryComponent } from './provincialinventory/provincialinventory.component';
import { InventoryComponent } from './inventory.component';
import { CentralinvetorycategoryComponent } from './centralinvetorycategory/centralinvetorycategory.component';
import { CentralinventoryteaandprovisionsComponent } from './centralinventoryteaandprovisions/centralinventoryteaandprovisions.component';


@NgModule({
  declarations: [
  CentralinvetorycategoryComponent,
  ProvincialinventoryComponent,
  InventoryComponent,
  CentralinventoryteaandprovisionsComponent,

  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ConfirmDialogModule,
    ToolbarModule,
    DropdownModule,
    TableModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
})
export class InventoryModule {}
