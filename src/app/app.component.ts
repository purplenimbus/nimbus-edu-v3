import { Component } from '@angular/core';
import { ENVService } from './common/services/env/env.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  appName: string;
	appLogoUrl: string;

	constructor(private ENVService: ENVService) {
  	this.appName = this.ENVService.ENV.appName;
  	this.appLogoUrl = this.ENVService.ENV.appLogoUrl;
  }

  public toggleMenu = () => this.isCollapsed = !this.isCollapsed;
}