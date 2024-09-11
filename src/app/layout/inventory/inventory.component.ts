import { Component, OnInit } from '@angular/core';
import { Inventory } from '../../shared/models/inventory';
import { InventoryService } from '../../shared/services/inventory.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateUpdateComponent } from './create-update/create-update.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventories: Inventory[] = [];

  constructor(private inventoryService: InventoryService, private modalService: NgbModal) {
   }

  ngOnInit() {

    this.loadInventory();
  }

  loadInventory(): void {
    this.inventoryService.getInventoryList().subscribe(items => {
      this.inventories = items;
    });
  }

  openModal(item: any = null) {
    const modalRef = this.modalService.open(CreateUpdateComponent);
    modalRef.componentInstance.item = item; 

    modalRef.result.then(
      (result) => {
        if (result) {
          if (item) {
            // Update existing item
            const index = this.inventories.findIndex(i => i.id === item.id);
            if (index !== -1) {
              this.inventories[index] = result;
            }
          } else {    
            //add new item       
            result.id = this.newId();         
            this.inventories.push(result);
          }
        }
      },
      (reason) => {
        console.log('Modal dismissed with:', reason);
      }
    );
  }

  private newId(){
    const lastItem = this.inventories[this.inventories.length - 1];
    let lastId = lastItem ? lastItem.id : 0;
    
    return lastId + 1;
}

}