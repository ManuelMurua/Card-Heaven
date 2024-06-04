import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
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
