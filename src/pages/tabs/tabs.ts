import { Component } from '@angular/core';

import { CollectionPage } from '../page-collection/page-collection';
import { HeaderPage } from '../page-header/page-header';
import { HomePage } from '../page-home/page-home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  collection = CollectionPage;

  constructor() {

  }
}
