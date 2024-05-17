import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.page.html',
  styleUrls: ['./edit-contact.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EditContactPage {
 

  contact: any = {};
  contacts: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    // Get the contact ID and contacts array from the route parameters
    const contactId = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
    const contactsParam = this.route.snapshot.paramMap.get('contacts');
    this.contacts = contactsParam ? JSON.parse(contactsParam) : [];

    // Find the contact with the given ID
    this.contact = this.contacts.find(contact => contact.id === contactId);
  }

  saveChanges() {
    // Find the index of the contact in the contacts array
    const index = this.contacts.findIndex(contact => contact.id === this.contact.id);

    // Update the contact in the contacts array
    this.contacts[index] = this.contact;

    // Navigate back to the contact list page with updated contacts array
    this.router.navigate(['/home', { contacts: JSON.stringify(this.contacts) }]);
  }
}
