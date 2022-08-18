import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signo',
  templateUrl: './signo.page.html',
  styleUrls: ['./signo.page.scss'],
})
export class SignoPage implements OnInit {

  signo: string;
  data: any

  constructor(private router:Router, private active: ActivatedRoute,private http: HttpClient) {
    this.active.queryParams.subscribe(params =>{
      this.signo = this.router.getCurrentNavigation().extras.state.signo;
      this.getHoroscopo("https://aztro.sameerkumar.website/?sign="+this.signo+"&day=today")
    });
   }

   getHoroscopo(url:string){
      this.http.post(url,"").subscribe(data => {
        this.data = data
        console.log(this.data);
      })
   }

  ngOnInit() {
  }

}
