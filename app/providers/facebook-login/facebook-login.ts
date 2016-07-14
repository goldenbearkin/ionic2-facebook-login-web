import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

/*
  Generated class for the FacebookLogin provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

declare var FB: any;

export interface FbStatus {
  status: string;
  authResponse: FbAuthResponse;
}

export interface FbAuthResponse {
  accessToken: string;
  expiresIn: string;
  signedRequest: string;
  userID: string;
}

@Injectable()
export class FacebookLogin {

  status$ = new Subject<FbStatus>();

  constructor() {
    
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

      (<any>window).fbAsyncInit = () => {
        FB.init({
          appId      : '1650752755250939',
          cookie     : true,  // enable cookies to allow the server to access the session 
          xfbml      : true,  // parse social plugins on this page
          version    : 'v2.2' // use version 2.2
        });
        
        FB.getLoginStatus(response => {
          this.status$.next(response);
        });
      }
  }

  login = () => {
    FB.login(response => {
      this.status$.next(response);
    });
  }
}

