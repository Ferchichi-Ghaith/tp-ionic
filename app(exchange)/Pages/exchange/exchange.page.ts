import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ExchangePage {
  amount: number = 0 ;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  convertedAmount: string = '';

  constructor() {}

  async convert() {
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${this.fromCurrency}`);
      const rate = response.data.rates[this.toCurrency];
      this.convertedAmount = (this.amount * rate).toFixed(2);
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    }
  }
}