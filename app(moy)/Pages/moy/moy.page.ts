import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-moy',
  templateUrl: './moy.page.html',
  styleUrls: ['./moy.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MoyPage  {

  noteControl: number =0;
  noteSynthese: number =0;
  noteTp: number =0;
  moyenne: number = 0;

  constructor() {}

  calculateMoyenne() {
    if (this.noteControl && this.noteSynthese && this.noteTp) {
      this.moyenne = (this.noteControl + this.noteSynthese + this.noteTp) / 3;
    } else {
      this.moyenne = 0;
    }
  }
}
