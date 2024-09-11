import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Inventory } from '../models/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private inventory: Inventory[] = [
    { id: 1, name: 'Item 1', quantity: 10, price: 100 },
    { id: 2, name: 'Item 2', quantity: 20, price: 200 }
  ];

  // Get the list of inventory items
  getInventoryList(): Observable<Inventory[]> {
    return of(this.inventory);
  }

  // Add a new item
  addInventoryItem(item: Inventory): void {
    this.inventory.push(item);
  }

  // Update an existing item
  updateInventoryItem(item: Inventory): void {
    const index = this.inventory.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.inventory[index] = item;
    }
  }
}
