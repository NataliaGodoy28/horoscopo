import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signo',
  templateUrl: './signo.page.html',
  styleUrls: ['./signo.page.scss'],
})
export class SignoPage implements OnInit {

  signo: string;

  constructor(private router:Router, private active: ActivatedRoute) {
    this.active.queryParams.subscribe(params =>{
      this.signo = this.router.getCurrentNavigation().extras.state.signo;
      console.log(this.signo);
    });
   }

  ngOnInit() {
  }

}
