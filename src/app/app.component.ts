import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  heart,
  heartOutline,
  chatbubbleOutline,
  bookmark,
  bookmarkOutline,
  personCircle,
  personCircleOutline,
  home,
  homeOutline,
  cafe,
  logIn,
  logOut,
  star,
  starOutline,
  settings,
  settingsOutline,
  search,
  searchOutline,
  addCircle,
  addCircleOutline,
  notifications,
  notificationsOutline,
} from 'ionicons/icons';

addIcons({
  heart,
  heartOutline,
  chatbubbleOutline,
  bookmark,
  bookmarkOutline,
  personCircle,
  personCircleOutline,
  home,
  homeOutline,
  cafe,
  logIn,
  logOut,
  star,
  starOutline,
  settings,
  settingsOutline,
  search,
  searchOutline,
  addCircle,
  addCircleOutline,
  notifications,
  notificationsOutline,
});

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
