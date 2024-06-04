import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-magic',
  templateUrl: './magic.page.html',
  styleUrls: ['./magic.page.scss'],
})
export class MagicPage implements OnInit {
  isMenuOpen = false;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goToPage(page: string) {
    this.navCtrl.navigateForward('/' + page);
  }

  onMenuOpen() {
    this.isMenuOpen = true;
  }

  onMenuClose() {
    this.isMenuOpen = false;
  }
}
