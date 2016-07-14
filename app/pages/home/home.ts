import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FacebookLogin, FbStatus } from '../../providers/facebook-login/facebook-login'

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [FacebookLogin]
})
export class HomePage {
  constructor(private navController: NavController, private facebookLogin: FacebookLogin) {
    facebookLogin.status$
      .subscribe(response => {
        console.log(response);
      })
  }
}
