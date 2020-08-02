import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})

export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[]

  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem){
    console.log('IncreaseQty')
    this.increaseQty.emit(item)
  }

  emitDecreaseQty(item: CartItem){
    console.log('DecreaseQty')
    this.decreaseQty.emit(item)
  }

  emitRemove(item: CartItem){
    console.log('Remove')
    this.remove.emit(item)
  }

}
