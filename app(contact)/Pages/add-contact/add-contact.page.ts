import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddContactPage {


  contact: any = {};
  contacts: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    const contactsParam = this.route.snapshot.paramMap.get('contacts');
    this.contacts = contactsParam ? JSON.parse(contactsParam) : [];
  }

  save() {
    const newContact = { ...this.contact, id: this.contacts.length + 1 };
    this.contacts.push(newContact);
    this.router.navigate(['/home', { contacts: JSON.stringify(this.contacts) }]);
  }


}
