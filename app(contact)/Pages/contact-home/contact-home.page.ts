import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.page.html',
  styleUrls: ['./contact-home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContactHomePage  {
  contacts: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const contactsParam = this.route.snapshot.paramMap.get('contacts');
      this.contacts = contactsParam ? JSON.parse(contactsParam) : [];
    });
  }

  editContact(contact: any) {
    // Navigate to the edit contact page with the contact ID and contacts array as parameters
    this.router.navigate(['/edit-contact', { id: contact.id, contacts: JSON.stringify(this.contacts) }]);
  }

  deleteContact(contact: any) {
    // Remove the contact from the contacts array
    this.contacts = this.contacts.filter(c => c.id !== contact.id);
  }
  addContact() {
    // Navigate to the add contact page
    this.router.navigate(['/add-contact', { contacts: JSON.stringify(this.contacts) }]);
  }
}


