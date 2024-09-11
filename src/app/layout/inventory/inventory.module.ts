import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule 
  ],
  declarations: [
    InventoryComponent,
    CreateUpdateComponent
  ]
})
export class InventoryModule { }