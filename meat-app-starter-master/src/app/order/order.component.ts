import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})

export class OrderComponent implements OnInit {

  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de debito', value: 'DEB'},
    {label: 'Cartão de crédito', value: 'CRE'},
  ]

  itemsValue(): number{
    return this.orderService.itemsValue()
  }

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    console.log('IncreaseQty2')
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    console.log('decreaseQty2')
    this.orderService.decrease(item)
  }

  remove(item: CartItem){
    console.log('remove2')
    this.orderService.remove(item)
  }

}
