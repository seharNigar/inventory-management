import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { numericValidator } from './numeric.validator';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {

  @Input() item: any;
  inventoryForm!: FormGroup;
  isEditMode = false;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.isEditMode = !!this.item;

    // Initialize the form
    this.inventoryForm = this.fb.group({
      id: [this.item?.id || null],
      name: [this.item?.name || '', Validators.required],
      quantity: [this.item?.quantity || 0, [Validators.required, numericValidator()]],
      price: [this.item?.price || 0, [Validators.required, numericValidator()]]
    });
  }

  onSubmit() {
    if (this.inventoryForm.valid) {
      this.activeModal.close(this.inventoryForm.value);
    }
  }

}
