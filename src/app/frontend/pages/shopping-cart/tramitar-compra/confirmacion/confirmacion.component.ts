import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '@app/backend/services/shoppingCart.service';

@Component({
  selector: 'confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})

export class ConfirmacionComponent {
  myDate = new Date();
  entrega = new Date().getUTCDate() + 2;
  pedido = Math.floor(Math.random() * (999999 - 100000)) + 100000;
  total = localStorage.getItem('price');
  products = JSON.parse(localStorage.getItem('products'));
  size = this.products.length;

  constructor(private shoppingCartService: ShoppingCartService, private router: Router ) { }

  clearCart() {
    this.shoppingCartService.clearCart(localStorage.getItem('email'))
    .subscribe(
      res => {
        this.router.navigate(['/']);
      },
      err => console.log(err)
    );
  }
}
