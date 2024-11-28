import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonBadge, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { home, person, notifications } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonBadge, IonIcon, IonContent, ExploreContainerComponent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton],
})
export class Tab1Page {
  notificationCount = 3; // This will be displayed in the badge

  constructor() {
    addIcons({ home, person, notifications });
  }

  doAction() {
    console.log('Button clicked');
  }
}
