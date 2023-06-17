import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-http-interceptor-demo';

  constructor(private httpService : HttpClient){}

  productData : any;

  ngOnInit(): void {
    this.httpService.get("https://fakestoreapi.com/products").subscribe(res=>{
      this.productData = res;
    })
  }
}
