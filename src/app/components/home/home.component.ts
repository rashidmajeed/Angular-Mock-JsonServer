import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() { }

  slides:any[]=[
    {name:'Property Loan',
    img:'../assets/images/propertyloan.jpg',
    desc:'You can buy dream homes by taking Bank loans. Its never been easier before'
    },
    {
      name:'Education Loan',
      img:'../assets/images/studentloan.jpg',
      desc:'Students can get loans for their expensive educations. Make bright careers'
    },
    {
      name:'Make Business easily',
      img:'../assets/images/businessloan.jpg',
      desc:'Make Your business which never easier with help.'
    },
    {
      name:'BMW is easy to buy using loans',
      img:'../assets/images/carloan.jpg',
      desc:'You can buy favourite car using loan offers by Danish Banks'
    }
  ];

  constructor(private _config:NgbCarouselConfig) {
    _config.interval = 3000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = false;
  }

}

