import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-yugioh',
  templateUrl: './yugioh.page.html',
  styleUrls: ['./yugioh.page.scss'],
})
export class YugiohPage implements OnInit {
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