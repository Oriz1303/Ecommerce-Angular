import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from 'src/app/State/Order/order.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent {
  addresses = [1, 1, 1, 1];

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService
  ) {}

  myForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    streetAddress: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', Validators.required],
    mobile: ['', Validators.required],
  });

  handleCreateOrder(item: any) {}

  handleSubmit = () => {
    const formValue = this.myForm.value;
    if (this.myForm.valid) this.orderService.createOrder(formValue);
  };
}
