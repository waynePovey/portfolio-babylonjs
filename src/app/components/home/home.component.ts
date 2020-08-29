import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePath } from 'src/app/common/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public initialised = false;

  constructor(private router: Router) { }

  public ngOnInit() {
    setTimeout(() => {
      this.initialised = true;
    }, 500);
  }

  public play() {
    this.router.navigateByUrl(RoutePath.SOLAR_SYSTEM);

  }
}
