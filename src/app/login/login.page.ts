import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  usuario: string="";
  password: string="";


  constructor( private AlertController:AlertController, private Router:Router) { }


  ngOnInit() {
  }

  login() {
    if (this.usuario.trim() == 'miguel' && this.password.trim() == '1234') {
      let NavigationExtras: NavigationExtras = {
        state:{
          usuarioEnviado: this.usuario,
          passwordEnviado: this.password
        }

      }
      this.Router.navigate(['/home'],NavigationExtras);
    }
    else{
      this.presentAlert('incorrecto');
    }
  }

  async presentAlert(message: string) {
    const alert = await this.AlertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
