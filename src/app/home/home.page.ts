import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  verSigno(signo: string){
    const extras: NavigationExtras={
      state : {signo}
    };
    this.router.navigate(['/signo'], extras);

  }

}
